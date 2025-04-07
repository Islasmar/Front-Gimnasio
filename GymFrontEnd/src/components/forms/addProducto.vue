<template>
  <div class="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4 py-12">
    <!-- Contenido principal -->
    <div class="relative z-10 bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden w-full max-w-5xl animate-fade-in">
      <!-- Formulario de Agregar Producto -->
      <form @submit.prevent="agregarProducto" class="w-full lg:w-1/2 p-8 space-y-5 text-black">
        <h2 class="text-3xl font-bold text-center text-red-600 flex items-center justify-center gap-2">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Agregar Producto
        </h2>

        <input v-model="producto.nombre" type="text" placeholder="Nombre"
               class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />

        <input v-model="producto.marca" type="text" placeholder="Marca"
               class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />

        <input v-model="producto.cod_barras" type="text" placeholder="Código de Barras"
               class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />

        <input v-model="producto.descripcion" type="text" placeholder="Descripción"
               class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />

        <input v-model="producto.presentacion" type="text" placeholder="Presentación"
               class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" />

        <input v-model.number="producto.precio_actual" type="number" placeholder="Precio Actual"
               class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />

        <input type="file" @change="handleImageUpload"
               class="w-full p-2 border border-gray-300 rounded file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-red-600 file:text-white hover:file:bg-red-700" />
        <div v-if="previewImage" class="mt-2">
          <img :src="previewImage" alt="Vista previa" class="w-32 h-32 object-cover rounded shadow-md" />
        </div>

        <select v-model="producto.estatus" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required>
          <option :value="true">Activo</option>
          <option :value="false">Inactivo</option>
        </select>

        <div class="flex flex-col md:flex-row gap-2 justify-center mt-4">
          <button type="submit" class="flex-1 bg-red-700 hover:bg-red-800 text-white font-medium text-sm py-2 rounded transition-all duration-300 flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Guardar Producto
          </button>
          <button type="button" @click="$router.push('/Menu/productos')"
                  class="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2 rounded flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22V12h6v10" />
            </svg>
            Volver al inicio
          </button>
        </div>
      </form>
        <!-- Imagen lateral -->
        <div class="hidden lg:block lg:w-1/2 bg-cover bg-center"
          :style="{ backgroundImage: 'url(/src/assets/img/producto.jpg)' }">
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      producto: {
        nombre: '',
        marca: '',
        cod_barras: '',
        descripcion: '',
        presentacion: '',
        precio_actual: null,
        fotografia: '',
        estatus: true
      },
      previewImage: null,
      exito: false,
      cargando: false
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
          this.producto.fotografia = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async agregarProducto() {
      try {
        this.cargando = true;

        const nuevoProducto = { ...this.producto };

        const response = await axios.post('http://localhost:8000/productos/', nuevoProducto, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });

        console.log('Producto guardado:', response.data);

        this.cargando = false;
        this.exito = true;

        setTimeout(() => {
          this.exito = false;
          this.$router.push('/Menu/productos');
        }, 1500);
      } catch (error) {
        console.error('Error al agregar producto:', error);
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
    top: 80%;
    left: 50%;
    animation-delay: 6s;
  }
  </style>  


