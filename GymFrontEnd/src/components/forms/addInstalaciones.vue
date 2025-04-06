<template>
  <div class="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4 py-12">
    <!-- Contenido principal -->
    <div
      class="relative z-10 bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden w-full max-w-5xl animate-fade-in">
      <!-- Formulario -->
      <form @submit.prevent="agregarInstalacion" class="w-full lg:w-1/2 p-8 space-y-5 text-black">
        <h2 class="text-3xl font-bold text-center text-red-600 flex items-center justify-center gap-2">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Agregar Instalación
        </h2>

        <!-- Campos del formulario -->
        <input v-model="instalacion.Descripcion" type="text" placeholder="Descripción"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required />
        <input v-model="instalacion.Tipo" type="text" placeholder="Tipo"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required />
        <input v-model="instalacion.Observaciones" type="text" placeholder="Observaciones"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required />

        <!-- Estatus como desplegable -->
        <select v-model="instalacion.Estatus"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required>
          <option :value="true">Activo</option>
          <option :value="false">Inactivo</option>
        </select>

        <input v-model="instalacion.Fecha_Registro" type="date"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required />

        <div class="flex flex-col md:flex-row gap-2 justify-center mt-4">
          <!-- Botón Guardar -->
          <button type="submit"
            class="flex-1 bg-red-700 hover:bg-red-800 text-white font-medium text-sm py-2 rounded transition-all duration-300 flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Guardar Instalación
          </button>

          <!-- Botón Volver -->
          <button type="button" @click="$router.push('/Menu/instalaciones')"
            class="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2 rounded flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
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
            <span>Instalación guardada exitosamente</span>
          </div>
        </transition>
      </form>

      <!-- Imagen lateral -->
      <div class="hidden lg:block lg:w-1/2 bg-cover bg-center"
        :style="{ backgroundImage: 'url(/src/assets/img/sucursal2.jpg)' }">
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/api.js';

export default {
  data() {
    return {
      instalacion: {
        Descripcion: '',
        Tipo: '',
        Observaciones: '',
        Estatus: true, // Valor por defecto es 'true' (Activo)
        Fecha_Registro: ''
      },
      exito: false,
      cargando: false
    };
  },
  methods: {
    async agregarInstalacion() {
      try {
        this.cargando = true;
        const nuevaInstalacion = {
          Descripcion: this.instalacion.Descripcion,
          Tipo: this.instalacion.Tipo,
          Observaciones: this.instalacion.Observaciones,
          Estatus: this.instalacion.Estatus,
          Fecha_Registro: this.instalacion.Fecha_Registro
        };

        // Enviar la solicitud POST a la API
        const response = await api.post('/instalacion/', nuevaInstalacion);

        if (response.status === 200 || response.status === 201) {
          this.cargando = false;
          this.exito = true;

          setTimeout(() => {
            this.exito = false;
            this.$router.push('/Menu/instalaciones');
          }, 1500);
        }
      } catch (error) {
        console.error('Error al agregar instalación:', error);
        this.cargando = false;
      }
    }
  }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.7s ease-out;
}

/* partículas estilo humo */
.particle {
  position: absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(rgba(255, 0, 0, 0.2), transparent 70%);
  animation: float 10s infinite ease-in-out alternate;
  top: 20%;
  left: 30%;
  border-radius: 50%;
  filter: blur(30px);
  z-index: 0;
}

.particle.delay-1 {
  top: 60%;
  left: 20%;
  animation-delay: 3s;
}

.particle.delay-2 {
  top: 40%;
  left: 70%;
  animation-delay: 6s;
}

@keyframes float {
  0% {
    transform: translateY(0) scale(1);
  }

  100% {
    transform: translateY(-40px) scale(1.3);
  }
}

/* Animación mensaje éxito */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
