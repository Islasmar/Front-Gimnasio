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
        <h1 class="text-white text-2xl mb-4">Usuarios</h1>
  
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
              <tr
                v-for="usuario in filteredUsuarios"
                :key="usuario.id"
                class="border-b border-gray-300"
              >
                <td class="px-4 py-2">{{ usuario.id }}</td>
                <td class="px-4 py-2">{{ usuario.nombre_usuario }}</td>
                <td class="px-4 py-2">{{ usuario.correo_electronico }}</td>
                <td class="px-4 py-2">{{ usuario.contrasena }}</td>
                <td class="px-4 py-2">{{ usuario.numero_telefonico_movil }}</td>
                <td class="px-4 py-2">{{ usuario.estatus }}</td>
                <td class="px-4 py-2">{{ usuario.fecha_registro }}</td>
                <td class="px-4 py-2 flex space-x-2">
                  <button
                    @click="editUsuario(usuario.id)"
                    class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
                  >
                    Editar
                  </button>
                  <button
                    @click="deleteUsuario(usuario.id)"
                    class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                  >
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
  export default {
    data() {
      return {
        usuarios: [],
        searchQuery: ""
      };
    },
    computed: {
      filteredUsuarios() {
        const query = this.searchQuery.toLowerCase();
        return this.usuarios.filter((u) => {
          return (
            u.nombre_usuario.toLowerCase().includes(query) ||
            u.correo_electronico.toLowerCase().includes(query) ||
            u.numero_telefonico_movil.toLowerCase().includes(query)
          );
        });
      }
    },
    methods: {
      async fetchUsuarios() {
        try {
          const response = await fetch("http://localhost:5000/usuarios");
          const data = await response.json();
          this.usuarios = data;
        } catch (error) {
          console.error("Error al obtener los usuarios:", error);
        }
      },
      async deleteUsuario(id) {
        try {
          const res = await fetch(`http://localhost:5000/usuarios/${id}`, {
            method: "DELETE"
          });
          if (res.ok) {
            this.fetchUsuarios();
          }
        } catch (error) {
          console.error("Error al eliminar el usuario:", error);
        }
      },
      editUsuario(id) {
        this.$router.push({ name: "editUsuario", params: { id } });
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
  