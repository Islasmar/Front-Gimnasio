<template>
  <div class="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4 py-12">
    <!-- Contenido principal -->
    <div class="relative z-10 bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden w-full max-w-5xl animate-fade-in">
      <!-- Formulario de edición -->
      <form @submit.prevent="editarMantenimiento" class="w-full lg:w-1/2 p-8 space-y-5 text-black">
        <h2 class="text-3xl font-bold text-center text-red-600 flex items-center justify-center gap-2">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Editar Mantenimiento
        </h2>

        <!-- Campos del formulario -->
        <!-- Menú desplegable de Equipamiento -->
        <select v-model="mantenimiento.Id_equipamiento" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
          <option v-for="equipamiento in equipamientos" :key="equipamiento.Id" :value="equipamiento.Id">
            {{ equipamiento.Nombre }}
          </option>
        </select>
        <input v-model="mantenimiento.Descripcion" type="text" placeholder="Descripción"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
        <input v-model="mantenimiento.Responsable" type="text" placeholder="Responsable"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
        <input v-model="mantenimiento.Costo" type="number" placeholder="Costo"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
        <input v-model="mantenimiento.Fecha_mantenimiento" type="date"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
        
        <select v-model="mantenimiento.Estatus" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
          <option value="true">Activo</option>
          <option value="false">Inactivo</option>
        </select>

        <!-- Botones -->
        <div class="flex flex-col md:flex-row gap-2 justify-center mt-4">
          <!-- Botón Guardar -->
          <button type="submit" class="flex-1 bg-red-700 hover:bg-red-800 text-white font-medium text-sm py-2 rounded transition-all duration-300 flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Guardar Cambios
          </button>

          <!-- Botón Volver -->
          <button type="button" @click="$router.push('/Menu/mantenimiento')"
            class="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2 rounded flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22V12h6v10" />
            </svg>
            Volver al inicio
          </button>
        </div>

        <!-- Barra de carga -->
        <transition name="fade">
          <div v-if="cargando" class="relative w-full max-w-xs mx-auto h-2 bg-gray-200 rounded overflow-hidden mt-4">
            <div class="absolute top-0 left-0 h-full bg-red-600 animate-progress"></div>
          </div>
        </transition>

        <!-- Mensaje de éxito -->
        <transition name="fade">
          <div v-if="exito" class="flex items-center justify-center gap-3 text-green-600 mt-4 animate-bounce">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Mantenimiento editado exitosamente</span>
          </div>
        </transition>
      </form>

      <!-- Imagen lateral -->
      <div class="hidden lg:block lg:w-1/2 bg-cover bg-center" :style="{ backgroundImage: 'url(/src/assets/img/sucursal2.jpg)' }"></div>
    </div>
  </div>
</template>

<script>
import api from '@/api/api.js';

export default {
  data() {
    return {
      mantenimiento: {
        Descripcion: '',
        Responsable: '',
        Costo: '',
        Estatus: 'Activo',
        Fecha_mantenimiento: '',
        Id_equipamiento: null,
      },
      equipamientos: [],  // Aquí guardamos los equipamientos disponibles
      exito: false,
      cargando: false,
    };
  },
  async mounted() {
    const mantenimientoId = this.$route.params.id;
    await this.obtenerMantenimiento(mantenimientoId);
    await this.obtenerEquipamientos();  // Obtener los equipamientos al montar el componente
  },
  methods: {
    async obtenerMantenimiento(id) {
      try {
        const response = await api.get(`/mantenimiento/${id}`);
        if (response.status === 200) {
          this.mantenimiento = response.data;
        }
      } catch (error) {
        console.error('Error al obtener mantenimiento:', error);
      }
    },
    async obtenerEquipamientos() {
      try {
        const response = await api.get('/equipamiento');  // Endpoint para obtener los equipamientos
        if (response.status === 200) {
          this.equipamientos = response.data;  // Guardamos los equipamientos disponibles
        }
      } catch (error) {
        console.error('Error al obtener equipamientos:', error);
      }
    },
    async editarMantenimiento() {
  try {
    this.cargando = true;

    // Crear un nuevo objeto con el formato correcto para enviar
    const mantenimientoActualizado = {
      Id_equipamiento: this.mantenimiento.Id_equipamiento,
      Descripcion: this.mantenimiento.Descripcion,
      Responsable: this.mantenimiento.Responsable,
      Costo: this.mantenimiento.Costo,
      Estatus: this.mantenimiento.Estatus,
      Fecha_mantenimiento: this.mantenimiento.Fecha_mantenimiento,
      Fecha_Actualizacion: new Date().toISOString()  // Agregar la fecha de actualización en formato ISO
    };

    // Enviar la solicitud PUT a la API para editar el mantenimiento
    const mantenimientoId = this.$route.params.id;
    const response = await api.put(`/mantenimiento/${mantenimientoId}`, mantenimientoActualizado);

    if (response.status === 200) {
      this.cargando = false;
      this.exito = true;

      setTimeout(() => {
        this.exito = false;
        this.$router.push('/Menu/mantenimiento');
      }, 1500);
    }
  } catch (error) {
    console.error('Error al editar mantenimiento:', error);
    this.cargando = false;
  }
}
  },
};
</script>

<style scoped>
/* Animaciones y estilo como antes */
</style>
