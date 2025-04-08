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
      <h1 class="text-white text-2xl mb-4">Sucursales</h1>

      <!-- Barra de búsqueda -->
      <div class="flex items-center mb-4">
        <input v-model="searchQuery" type="text" placeholder="Buscar por nombre o responsable"
          class="p-2 text-black rounded-l-md" />
        <button @click="redirectToAddForm"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 ml-2 rounded-md transition duration-300">
          Agregar Sucursal
        </button>
      </div>

      <!-- Contenedor responsivo para la tabla -->
      <div class="overflow-x-auto bg-black">
        <table class="table-auto w-full mt-4 bg-white text-black">
          <thead>
            <tr class="bg-red-600 text-white">
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Nombre</th>
              <th class="px-4 py-2">Dirección</th>
              <th class="px-4 py-2">Responsable ID</th>
              <th class="px-4 py-2">Total Clientes Atendidos</th>
              <th class="px-4 py-2">Promedio Clientes por Día</th>
              <th class="px-4 py-2">Capacidad Máxima</th>
              <th class="px-4 py-2">Total Empleados</th>
              <th class="px-4 py-2">Horarios de Disponibilidad</th>
              <th class="px-4 py-2">Estatus</th>
              <th class="px-4 py-2">Fecha de Registro</th>
              <th class="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sucursal in filteredSucursales" :key="sucursal.id" class="border-b border-gray-300">
              <td class="px-4 py-2">{{ sucursal.Id }}</td>
              <td class="px-4 py-2">{{ sucursal.Nombre }}</td>
              <td class="px-4 py-2">{{ sucursal.Direccion }}</td>
              <td class="px-4 py-2">{{ sucursal.Responsable_Id }}</td>
              <td class="px-4 py-2">{{ sucursal.Total_Clientes_Atendidos }}</td>
              <td class="px-4 py-2">{{ sucursal.Promedio_Clientes_X_Dia }}</td>
              <td class="px-4 py-2">{{ sucursal.Capacidad_Maxima }}</td>
              <td class="px-4 py-2">{{ sucursal.Total_Empleados }}</td>
              <td class="px-4 py-2">{{ sucursal.Horario_Disponibilidad }}</td>
              <td class="px-4 py-2">
                {{ sucursal.Estatus ? 'Activo' : 'Inactivo' }}
              </td>
              <td class="px-4 py-2">
                {{ formatDate(sucursal.Fecha_Registro) }}
              </td>
              <td class="px-4 py-2 flex space-x-2">
                <button @click="editSucursal(sucursal.Id)"
                  class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition duration-300">
                  Editar
                </button>
                <button @click="deleteSucursal(sucursal.Id)"
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
import api from '@/api/api.js'; // Importamos la instancia de la API
export default {
  data() {
    return {
      sucursales: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredSucursales() {
      if (this.searchQuery === '') {
        return this.sucursales;
      }
      const query = this.searchQuery.toLowerCase();
      return this.sucursales.filter((sucursal) => {
        return (
          sucursal.nombre.toLowerCase().includes(query) ||
          sucursal.responsable_id.toString().includes(query)
        );
      });
    }
  },
  methods: {
    async fetchSucursalData() {
      try {
        const response = await api.get('/sucursales/');
        this.sucursales = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString('es-MX', options);
    },
    async deleteSucursal(id) {
      try {
        const response = await api.delete(`/sucursal/${id}`);
        if (response.status === 200) {
          this.fetchSucursalData();
        }
      } catch (error) {
        console.error('Error deleting sucursal:', error);
      }
    },
    editSucursal(id) {
      this.$router.push({ name: 'editSucursal', params: { id } });
    },
    redirectToAddForm() {
      this.$router.push({ name: 'addSucursal' });
    }
  },
  mounted() {
    this.fetchSucursalData();
  }
};
</script>

<style scoped>
body {
  background-color: black;
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
