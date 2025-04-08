<template> 
    <div class="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4 py-12">
      <!-- Contenido principal -->
      <div class="relative z-10 bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden w-full max-w-5xl animate-fade-in">
        
        <!-- Formulario de edición -->
        <form @submit.prevent="editarUsuario" class="w-full lg:w-1/2 p-8 space-y-5 text-black">
          <h2 class="text-3xl font-bold text-center text-red-600 flex items-center justify-center gap-2">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Editar Usuario
          </h2>
  
          <input v-model="usuario.Nombre_Usuario" type="text" placeholder="Nombre de Usuario"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
  
          <input v-model="usuario.Correo_Electronico" type="email" placeholder="Correo Electrónico"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
  
          <input v-model="usuario.Contrasena" type="password" placeholder="Contraseña"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
  
          <input v-model="usuario.Numero_Telefonico_Movil" type="tel" placeholder="Número Telefónico"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
  
          <select v-model="usuario.Estatus" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required>
            <option :value="true">Activo</option>
            <option :value="false">Inactivo</option>
            <option :value="false">Bloqueado</option>
            <option :value="false">Suspendido</option>
          </select>
  
          <input v-model="usuario.Fecha_Registro" type="date"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
  
          <div class="flex flex-col md:flex-row gap-2 justify-center mt-4">
            <button type="submit" class="flex-1 bg-red-700 hover:bg-red-800 text-white font-medium text-sm py-2 rounded transition-all duration-300 flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Guardar Cambios
            </button>
  
            <button type="button" @click="$router.push('/Menu/usuarios')"
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
              <span>Usuario editado exitosamente</span>
            </div>
          </transition>

          <!-- Imagen lateral -->
        <div class="hidden lg:block lg:w-1/2 bg-cover bg-center" :style="{ backgroundImage: 'url(/src/assets/img/sucursal2.jpg)' }">
        </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import api from '@/api/api.js';
  
  export default {
    data() {
      return {
        usuario: {
          Nombre_Usuario: '',
          Correo_Electronico: '',
          Contrasena: '',
          Numero_Telefonico_Movil: '',
          Estatus: '',
          Fecha_Registro: ''
        },
        exito: false,
        cargando: false
      };
    },
    async mounted() {
      const usuarioID = this.$route.params.ID;
      await this.obtenerUsuario(usuarioID);
    },
    methods: {
      async obtenerUsuario(ID) {
        try {
          const response = await api.get(`/users/${ID}`);
          if (response.status === 200) {
            this.usuario = response.data;
          }
        } catch (error) {
          console.error('Error al obtener usuario:', error);
        }
      },
      async editarUsuario() {
        try {
          this.cargando = true;
          const usuarioActualizado = {
            Nombre_Usuario: this.usuario.Nombre_Usuario,
            Correo_Electronico: this.usuario.Correo_Electronico,
            Contrasena: this.usuario.Contrasena,
            Numero_Telefonico_Movil: this.usuario.Numero_Telefonico_Movil,
            Estatus: this.usuario.Estatus,
            Fecha_Registro: this.usuario.Fecha_Registro
          };
  
          const usuarioID = this.$route.params.ID;
          const response = await api.put(`/users/${usuarioID}`, usuarioActualizado);
  
          if (response.status === 200) {
            this.cargando = false;
            this.exito = true;
  
            setTimeout(() => {
              this.exito = false;
              this.$router.push('/Menu/usuarios');
            }, 1500);
          }
        } catch (error) {
          console.error('Error al editar usuario:', error);
          this.cargando = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
  
  @keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
  }
  .animate-progress {
    animation: progress 2s linear infinite;
  }
  </style>  