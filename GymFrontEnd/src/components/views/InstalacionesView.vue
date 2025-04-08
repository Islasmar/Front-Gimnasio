<template>
  <div class="bg-black min-h-screen">
    <!-- Navbar -->
    <nav class="bg-black text-white p-4 fixed top-0 right-0 w-full shadow-lg">
      <ul class="flex justify-end space-x-8">
        <li>
          <a href="/Menu" class="text-white hover:text-gray-300 font-semibold text-lg">Volver a inicio</a>
        </li>
      </ul>
    </nav>

    <div class="p-6">
      <h1 class="text-white text-2xl mb-4">Instalaciones</h1>

      <!-- Barra de búsqueda -->
      <div class="flex items-center mb-4">
        <input v-model="searchQuery" type="text" placeholder="Buscar" class="p-2 text-black rounded-l-md" />
        <button @click="redirectToAddForm"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 ml-2 rounded-md transition duration-300">
          Agregar Instalación
        </button>
      </div>

      <!-- Tabla -->
      <div class="overflow-x-auto bg-black">
        <table class="table-auto min-w-full mt-4 bg-white text-black">
          <thead>
            <tr class="bg-red-600 text-white">
              <th class="px-4 py-2">Sucursal</th>
              <th class="px-4 py-2">Descripción</th>
              <th class="px-4 py-2">Tipo</th>
              <th class="px-4 py-2">Observaciones</th>
              <th class="px-4 py-2">Estatus</th>
              <th class="px-4 py-2">Fecha Registro</th>
              <th class="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="instalacion in filteredInstalaciones" :key="instalacion.id" class="border-b border-gray-300">
              <td class="px-4 py-2">{{ instalacion.Sucursal_Id }}</td>
              <td class="px-4 py-2">{{ instalacion.Descripcion }}</td>
              <td class="px-4 py-2">{{ instalacion.Tipo }}</td>
              <td class="px-4 py-2">{{ instalacion.Observaciones }}</td>
              <td class="px-4 py-2">{{ formatEstatus(instalacion.Estatus) }}</td>
              <td class="px-4 py-2">{{ formatDate(instalacion.Fecha_Registro) }}</td>
              <td class="px-4 py-2 flex space-x-2">
                <button @click="editInstalacion(instalacion.Id)"
                  class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition duration-300">
                  Editar
                </button>
                <button @click="deleteInstalacion(instalacion.Id)"
                  class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/api.js'; // Asegúrate de que este sea el camino correcto

export default {
  data() {
    return {
      instalaciones: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredInstalaciones() {
      const query = this.searchQuery.toLowerCase();
      return this.instalaciones.filter((item) => {
        return (
          item.Descripcion.toLowerCase().includes(query) ||
          item.Tipo.toLowerCase().includes(query) ||
          item.Servicio.toLowerCase().includes(query)
        );
      });
    }
  },
  methods: {
    async fetchInstalacionesData() {
      try {
        const response = await api.get('/instalacion/');
        this.instalaciones = response.data; // Asumimos que la respuesta es un array de instalaciones
      } catch (error) {
        console.error('Error fetching instalaciones:', error);
      }
    },
    async deleteInstalacion(id) {
      try {
        const response = await api.delete(`/instalacion/${id}`); // Cambiado de fetch a axios a través de api.js
        if (response.status === 200) {
          this.fetchInstalacionesData();
        }
      } catch (error) {
        console.error('Error deleting instalación:', error);
      }
    },
    editInstalacion(id) {
      this.$router.push({ name: 'editInstalaciones', params: { id } });
    },
    redirectToAddForm() {
      this.$router.push({ name: 'addInstalaciones' });
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES'); // Formato de fecha local
    },
    formatEstatus(estatus) {
      return estatus ? 'Activo' : 'Inactivo'; // Cambiar según tus valores de estatus
    }
  },
  mounted() {
    this.fetchInstalacionesData();
  }
};
</script>

<style scoped>
/* Igual al anterior para mantener la coherencia visual */
body {
  background-color: black;
}

/* Hace que el contenedor de la tabla tenga fondo negro continuo al hacer scroll */
table {
  width: 100%;
  min-width: 1200px;
  /* Puedes ajustar esto si quieres */
}

th,
td {
  text-align: left;
}

input {
  border-radius: 0.375rem;
  border: 1px solid #ddd;
  background-color: #fff;
  padding-left: 8px;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
}

button {
  cursor: pointer;
  margin-left: 8px;
  height: 38px;
}

button:hover {
  opacity: 0.9;
}

nav a {
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
}
</style>
