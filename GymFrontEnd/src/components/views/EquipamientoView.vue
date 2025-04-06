<template>
  <div class="bg-black min-h-screen">
    <!-- Navbar -->
    <nav class="bg-black text-white p-4">
      <ul class="flex justify-start space-x-8">
        <li>
          <a href="#" class="text-white">Inicio</a>
        </li>
      </ul>
    </nav>

    <div class="p-6">
      <h1 class="text-white text-2xl mb-4">Equipos</h1>

      <!-- Barra de búsqueda -->
      <div class="flex items-center mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar"
          class="p-2 text-black rounded-l-md"
        />
        <button
          @click="redirectToAddForm"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 ml-2 rounded-md transition duration-300"
        >
          Agregar Equipo
        </button>
      </div>

      <!-- Tabla con fondo blanco -->
      <table class="table-auto w-full mt-4 bg-white text-black">
        <thead>
          <tr class="bg-red-600 text-white">
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
          <tr
            v-for="equipo in filteredEquipos"
            :key="equipo.Id"
            class="border-b border-gray-300"
          >
            <td class="px-4 py-2">{{ equipo.Nombre }}</td>
            <td class="px-4 py-2">{{ equipo.Marca }}</td>
            <td class="px-4 py-2">{{ equipo.Modelo }}</td>
            <td class="px-4 py-2">
              <img :src="equipo.Fotografia" alt="Fotografía" class="w-16 h-16 rounded-md shadow-md" />
            </td>
            <td class="px-4 py-2">{{ equipo.Estatus ? 'Activo' : 'Inactivo' }}</td>
            <td class="px-4 py-2">{{ equipo.Total_Existencias }}</td>
            <td class="px-4 py-2">{{ formatDate(equipo.Fecha_Registro) }}</td>
            <td class="px-4 py-2 flex space-x-2">
              <button
                @click="editEquipo(equipo.Id)"
                class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Editar
              </button>
              <button
                @click="deleteEquipo(equipo.Id)"
                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import api from '@/api/api.js'; // Importamos la instancia de la API

export default {
  data() {
    return {
      equipos: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredEquipos() {
      if (this.searchQuery === '') {
        return this.equipos;
      }
      const query = this.searchQuery.toLowerCase();  // Normaliza la búsqueda
      return this.equipos.filter((equipo) => {
        return (
          equipo.Nombre.toLowerCase().includes(query) ||
          equipo.Marca.toLowerCase().includes(query) ||
          equipo.Modelo.toLowerCase().includes(query)
        );
      });
    }
  },
  methods: {
    async fetchEquipos() {
      try {
        const response = await api.get('/equipamiento/'); // Usamos la instancia de api
        this.equipos = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async deleteEquipo(id) {
      try {
        const response = await api.delete(`/equipamiento/${id}`); // Usamos la instancia de api
        if (response.status === 200) {
          this.fetchEquipos(); // Refrescar los datos
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
      // Redirigir a un formulario para agregar un nuevo equipo
      this.$router.push({ name: 'addEquipo' });
    },
    async addEquipo(equipo) {
      try {
        const response = await api.post('/equipamiento/', equipo); // Usamos la instancia de api
        if (response.status === 201) {
          this.fetchEquipos(); // Refrescar los datos
        }
      } catch (error) {
        console.error('Error adding equipo:', error);
      }
    },
    async updateEquipo(id, equipo) {
      try {
        const response = await api.put(`/equipamiento/${id}`, equipo); // Usamos la instancia de api
        if (response.status === 200) {
          this.fetchEquipos(); // Refrescar los datos
        }
      } catch (error) {
        console.error('Error updating equipo:', error);
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString('es-ES', options);
    }
  },
  mounted() {
    this.fetchEquipos();
  }
};
</script>


<style scoped>
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

nav a {
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
}

input {
  padding-left: 8px;
}

button {
  margin-left: 8px;
}

button, input {
  height: 38px;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.mb-4 {
  margin-bottom: 16px;
}

.ml-2 {
  margin-left: 8px;
}
</style>
