<template>
    <div class="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4 py-12">
      <!-- Partículas -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <div class="particle"></div>
        <div class="particle delay-1"></div>
        <div class="particle delay-2"></div>
      </div>
  
      <!-- Contenido principal -->
      <div class="relative z-10 bg-white rounded-2xl shadow-2xl flex flex-col w-full max-w-5xl animate-fade-in">
        <!-- Formulario -->
        <form @submit.prevent="submitEditForm" class="w-full p-8 space-y-5 text-black">
          <h2 class="text-3xl font-bold text-center text-red-600 flex items-center justify-center gap-2">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Editar Mantenimiento
          </h2>
  
          <input v-model="form.descripcion" type="text" placeholder="Descripción"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
          <input v-model="form.responsable" type="text" placeholder="Responsable"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
          <input v-model="form.costo" type="number" placeholder="Costo"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
            <input
  v-model="form.fecha_mantenimiento"
  type="date"
  placeholder="Fecha de Mantenimiento"
  class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
  required
/>

          
          <select v-model="form.estatus" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
  
          <!-- Botones -->
          <div class="flex flex-col md:flex-row gap-2 justify-center mt-4">
            <button type="submit"
              class="flex-1 bg-red-700 hover:bg-red-800 text-white font-medium text-sm py-2 rounded transition-all duration-300 flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Guardar Cambios
            </button>
  
            <button type="button" @click="$router.push('/Menu/mantenimiento')"
              class="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2 rounded flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22V12h6v10" />
              </svg>
              Volver
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          descripcion: '',
          responsable: '',
          costo: '',
          fecha_mantenimiento: '',
          estatus: 'Activo',
        },
        cargando: false,
        exito: false,
      };
    },
    methods: {
      async submitEditForm() {
        try {
          this.cargando = true;
          const response = await fetch(`http://localhost:5000/mantenimiento/${this.$route.params.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.form),
          });
  
          if (response.ok) {
            this.cargando = false;
            this.exito = true;
  
            setTimeout(() => {
              this.exito = false;
              this.$router.push({ name: 'mantenimientos' });
            }, 1500);
          } else {
            alert('Error al editar mantenimiento');
          }
        } catch (error) {
          console.error('Error en el formulario:', error);
          this.cargando = false;
          alert('Ocurrió un error');
        }
      },
      goBack() {
        this.$router.push({ name: 'mantenimientos' });
      },
    },
    async mounted() {
      const response = await fetch(`http://localhost:5000/mantenimiento/${this.$route.params.id}`);
      const data = await response.json();
      this.form = data;
    },
  };
  </script>
  
  <style scoped>
  /* Animaciones y estilos similares al de "editar sucursal" */
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
  </style>  