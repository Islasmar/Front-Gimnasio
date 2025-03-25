<template>
    <div class="bg-black p-6 min-h-screen">
      <h1 class="text-white text-2xl mb-4">Equipos</h1>
      <div class="flex items-center mb-4">
        <!-- Filtro y Botón Agregar Equipo -->
        <input v-model="searchQuery" type="text" placeholder="Buscar equipo" class="p-2 mb-4 text-black rounded-l-md" />
        <button @click="redirectToAddForm" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 ml-2 rounded-md transition duration-300">Agregar Equipo</button>
      </div>
  
      <!-- Tabla con fondo blanco -->
      <table class="table-auto w-full mt-4 bg-white text-black">
        <thead>
          <tr class="bg-red-600 text-white">
            <th class="px-4 py-2">Área</th>
            <th class="px-4 py-2">Nombre</th>
            <th class="px-4 py-2">Marca</th>
            <th class="px-4 py-2">Modelo</th>
            <th class="px-4 py-2">Fotografía</th>
            <th class="px-4 py-2">Estatus</th>
            <th class="px-4 py-2">Existencias</th>
            <th class="px-4 py-2">Fecha de Registro</th>
            <th class="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="equipo in equipos" :key="equipo.id" class="border-b border-gray-300">
            <td class="px-4 py-2">{{ equipo.area }}</td>
            <td class="px-4 py-2">{{ equipo.nombre }}</td>
            <td class="px-4 py-2">{{ equipo.marca }}</td>
            <td class="px-4 py-2">{{ equipo.modelo }}</td>
            <td class="px-4 py-2">
              <img :src="equipo.fotografia" alt="Fotografía" class="w-16 h-16 rounded-md shadow-md" />
            </td>
            <td class="px-4 py-2">{{ equipo.estatus }}</td>
            <td class="px-4 py-2">{{ equipo.total_existencias }}</td>
            <td class="px-4 py-2">{{ equipo.fecha_registro }}</td>
            <td class="px-4 py-2 flex space-x-2">
              <button @click="editEquipo(equipo.id)" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition duration-300">Editar</button>
              <button @click="deleteEquipo(equipo.id)" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        equipos: [],
        searchQuery: ''
      };
    },
    methods: {
      async fetchEquipmentData() {
        try {
          const response = await fetch('http://localhost:5000/equipos');
          const data = await response.json();
          this.equipos = data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      async deleteEquipo(id) {
        try {
          const response = await fetch(`http://localhost:5000/equipos/${id}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            this.fetchEquipmentData(); // Refrescar los datos
          }
        } catch (error) {
          console.error('Error deleting equipo:', error);
        }
      },
      editEquipo(id) {
        // Redirigir a un formulario de edición (puedes usar Vue Router aquí)
        this.$router.push({ name: 'editEquipo', params: { id } });
      },
      redirectToAddForm() {
        // Redirigir a un formulario de agregar equipo
        this.$router.push({ name: 'addEquipo' });
      }
    },
    mounted() {
      this.fetchEquipmentData();
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales */
  body {
    background-color: black;
  }
  
  table {
    border-collapse: collapse;
  }
  
  th, td {
    text-align: left;
  }
  
  input {
    border-radius: 0.375rem;
    border: 1px solid #ddd;
  }
  
  input:focus {
    outline: none;
    border-color: #3b82f6;
  }
  
  button {
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.9;
  }
  
  input {
    background-color: #fff;
  }
  </style>  