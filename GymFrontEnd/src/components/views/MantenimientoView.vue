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
      <h1 class="text-white text-2xl mb-4">Mantenimientos</h1>

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
          Agregar Mantenimiento
        </button>
      </div>

      <!-- Tabla con fondo blanco -->
      <table class="table-auto w-full mt-4 bg-white text-black">
        <thead>
          <tr class="bg-red-600 text-white">
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Equipamiento</th>
            <th class="px-4 py-2">Descripción</th>
            <th class="px-4 py-2">Responsable</th>
            <th class="px-4 py-2">Costo</th>
            <th class="px-4 py-2">Estatus</th>
            <th class="px-4 py-2">Fecha de Mantenimiento</th>
            <th class="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="mantenimiento in filteredMantenimientos"
            :key="mantenimiento.Id"
            class="border-b border-gray-300"
          >
            <td class="px-4 py-2">{{ mantenimiento.Id }}</td>
            <td class="px-4 py-2">{{ getEquipamientoName(mantenimiento.Id_equipamiento) }}</td> <!-- Equipamiento por nombre -->
            <td class="px-4 py-2">{{ mantenimiento.Descripcion }}</td>
            <td class="px-4 py-2">{{ mantenimiento.Responsable }}</td>
            <td class="px-4 py-2">{{ mantenimiento.Costo }}</td>
            <td class="px-4 py-2">{{ mantenimiento.Estatus ? 'Activo' : 'Inactivo' }}</td> <!-- Formatear el estatus -->
            <td class="px-4 py-2">{{ formatFecha(mantenimiento.Fecha_mantenimiento) }}</td> <!-- Fecha formateada -->
            <td class="px-4 py-2 flex space-x-2">
              <button
                @click="editMantenimiento(mantenimiento.Id)"
                class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Editar
              </button>
              <button
                @click="deleteMantenimiento(mantenimiento.Id)"
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
import api from '@/api/api.js';

export default {
  data() {
    return {
      mantenimientos: [],
      equipos: [], // Almacenará los equipos con su ID y Nombre
      searchQuery: '',
    };
  },
  computed: {
    filteredMantenimientos() {
      if (this.searchQuery === '') {
        return this.mantenimientos;
      }
      const query = this.searchQuery.toLowerCase(); // Normaliza la búsqueda
      return this.mantenimientos.filter((mantenimiento) => {
        return (
          mantenimiento.Descripcion.toLowerCase().includes(query)
        );
      });
    }
  },
  methods: {
    async fetchMaintenanceData() {
      try {
        const response = await api.get('/mantenimiento');
        this.mantenimientos = response.data;
      } catch (error) {
        console.error('Error al obtener los mantenimientos:', error);
      }
    },
    async fetchEquiposData() {
      try {
        const response = await api.get('/equipamiento');
        this.equipos = response.data; // Guardamos la lista de equipos
      } catch (error) {
        console.error('Error al obtener equipos:', error);
      }
    },
    async deleteMantenimiento(id) {
      try {
        await api.delete(`/mantenimiento/${id}`);
        this.fetchMaintenanceData(); // Refrescar los datos después de eliminar
      } catch (error) {
        console.error('Error al eliminar mantenimiento:', error);
      }
    },
    editMantenimiento(id) {
      // Redirigir a un formulario de edición (puedes usar Vue Router aquí)
      this.$router.push({ name: 'editMantenimiento', params: { id } });
    },
    redirectToAddForm() {
      // Redirigir a un formulario de agregar mantenimiento
      this.$router.push({ name: 'addMantenimiento' });
    },
    getEquipamientoName(id) {
      const equipamiento = this.equipos.find(e => e.Id === id);
      return equipamiento ? equipamiento.Nombre : 'Desconocido';
    },
    formatFecha(fecha) {
      const date = new Date(fecha);
      return date.toLocaleDateString(); // O usa un formato personalizado si lo necesitas
    }
  },
  mounted() {
    this.fetchMaintenanceData();
    this.fetchEquiposData(); // Obtener los equipos al montar el componente
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

th,
td {
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

button,
input {
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
