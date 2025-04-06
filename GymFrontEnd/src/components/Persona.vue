<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Registro de Usuario</h2>

      <input v-model="usuario.Nombre_Usuario" type="text" placeholder="Nombre de Usuario"
             class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500" />

      <input v-model="usuario.Contrasena" type="password" placeholder="Contraseña"
             class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500" />

      <input v-model="usuario.Correo_Electronico" type="email" placeholder="Correo Electrónico"
             class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500" />

      <input v-model="usuario.Numero_Telefonico_Movil" type="text" placeholder="Número Telefónico Móvil"
             class="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500" />

      <button @click="registrarUsuario"
              class="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
        Registrarse
      </button>
    </div>
  </div>
</template>

<script>
import api from '@/api/api.js'; // Asegúrate que este archivo esté bien configurado

export default {
  data() {
    return {
      usuario: {
        Nombre_Usuario: '',
        Contrasena: '',
        Correo_Electronico: '',
        Numero_Telefonico_Movil: '',
      }
    };
  },
  methods: {
    async registrarUsuario() {
      try {
        const fecha = new Date().toISOString();

        const payload = {
          ...this.usuario,
          Estatus: 'activo',
          Fecha_Registro: fecha,
          Fecha_Actualizacion: fecha
        };

        const response = await api.post('/users/', payload);
        console.log('Usuario registrado:', response.data);
        this.$router.push('/home/login'); // o cambia la ruta según tu app
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    }
  }
};
</script>
