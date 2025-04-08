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
      <h1 class="text-white text-2xl mb-4">Usuarios</h1>

      <!-- Barra de búsqueda -->
      <div class="flex items-center mb-4">
        <input v-model="searchQuery" type="text" placeholder="Buscar" class="p-2 text-black rounded-l-md" />
        <button @click="redirectToAddForm"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 ml-2 rounded-md transition duration-300">
          Agregar Usuario
        </button>
      </div>

      <!-- Tabla -->
      <div class="overflow-x-auto bg-black">
        <table class="table-auto min-w-full mt-4 bg-white text-black">
          <thead>
            <tr class="bg-red-600 text-white">
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Nombre de Usuario</th>
              <th class="px-4 py-2">Correo Electrónico</th>
              <th class="px-4 py-2">Contraseña</th>
              <th class="px-4 py-2">Número Telefónico</th>
              <th class="px-4 py-2">Estatus</th>
              <th class="px-4 py-2">Fecha Registro</th>
              <th class="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in filteredUsuarios" :key="usuario.ID" class="border-b border-gray-300">
              <td class="px-4 py-2">{{ usuario.ID }}</td>
              <td class="px-4 py-2">{{ usuario.Nombre_Usuario }}</td>
              <td class="px-4 py-2">{{ usuario.Correo_Electronico }}</td>
              <td class="px-4 py-2">{{ usuario.Contrasena }}</td>
              <td class="px-4 py-2">{{ usuario.Numero_Telefonico_Movil }}</td>
              <td class="px-4 py-2">{{ usuario.Estatus }}</td>
              <td class="px-4 py-2">{{ usuario.Fecha_Registro }}</td>
              <td class="px-4 py-2 flex space-x-2">
                <button @click="deleteUsuario(usuario.ID)"
                  class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
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
import api from '@/api/api.js';
export default {
  data() {
    return {
      usuarios: [],
      searchQuery: ""
    };
  },
  computed: {
    filteredUsuarios() {
      if (this.searchQuery === '') {
        return this.usuarios;
      }
      const query = this.searchQuery.toLowerCase();
      return this.usuarios.filter((usuarios) => {
        return (
          usuarios.Nombre_Usuario.toLowerCase().includes(query) ||
          usuarios.Correo_Electronico.toLowerCase().includes(query) ||
          usuarios.Numero_Telefonico_Movil.toLowerCase().includes(query)
        );
      });
    }
  },
  methods: {
    async fetchUsuarios() {
      try {
        const response = await api.get('/users/');
        this.usuarios = response.data;
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    },
    async deleteUsuario(ID) {
      try {
        const response = await api.delete(`/users/${ID}`);
        if (response.status === 200) {
          this.fetchUsuarios();
        }
      } catch (error) {
        console.error("Error al eliminar el usuario:", error);
      }
    },
    editUsuario(ID) {
      this.$router.push({ name: "editUsuario", params: { ID } });
    },
    redirectToAddForm() {
      this.$router.push({ name: "addUsuario" });
    }
  },
  mounted() {
    this.fetchUsuarios();
  }
};
</script>

<style scoped>
table {
  width: 100%;
  min-width: 1300px;
}

th,
td {
  text-align: left;
  padding: 8px;
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
  height: 38px;
}

nav a {
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
}
</style>