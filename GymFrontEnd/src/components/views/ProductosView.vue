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
        <h1 class="text-white text-2xl mb-4">Productos</h1>
  
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
            Agregar Producto
          </button>
        </div>
  
        <!-- Tabla -->
        <div class="overflow-x-auto bg-black">
          <table class="table-auto min-w-full mt-4 bg-white text-black">
            <thead>
              <tr class="bg-red-600 text-white">
                <th class="px-4 py-2">Nombre</th>
                <th class="px-4 py-2">Marca</th>
                <th class="px-4 py-2">Código de Barras</th>
                <th class="px-4 py-2">Descripción</th>
                <th class="px-4 py-2">Precio Actual</th>
                <th class="px-4 py-2">Fotografía</th>
                <th class="px-4 py-2">Estatus</th>
                <th class="px-4 py-2">Fecha Registro</th>
                <th class="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="producto in filteredProductos"
                :key="producto.cod_barras"
                class="border-b border-gray-300"
              >
                <td class="px-4 py-2">{{ producto.nombre }}</td>
                <td class="px-4 py-2">{{ producto.marca }}</td>
                <td class="px-4 py-2">{{ producto.cod_barras }}</td>
                <td class="px-4 py-2">{{ producto.descripcion }}</td>
                <td class="px-4 py-2">${{ producto.precio_actual }}</td>
                <td class="px-4 py-2">
                  <img :src="producto.fotografia" alt="Imagen Producto" class="w-16 h-16 object-cover rounded-md" />
                </td>
                <td class="px-4 py-2">{{ producto.estatus }}</td>
                <td class="px-4 py-2">{{ producto.fecha_registro }}</td>
                <td class="px-4 py-2 flex space-x-2">
                  <button
                    @click="editProducto(producto.cod_barras)"
                    class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition duration-300"
                  >
                    Editar
                  </button>
                  <button
                    @click="deleteProducto(producto.cod_barras)"
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
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productos: [],
        searchQuery: ""
      };
    },
    computed: {
      filteredProductos() {
        const query = this.searchQuery.toLowerCase();
        return this.productos.filter((item) => {
          return (
            item.nombre.toLowerCase().includes(query) ||
            item.marca.toLowerCase().includes(query) ||
            item.descripcion.toLowerCase().includes(query)
          );
        });
      }
    },
    methods: {
      async fetchProductosData() {
        try {
          const response = await fetch("http://localhost:5000/productos");
          const data = await response.json();
          this.productos = data.map((producto) => ({
            ...producto,
            fotografia: producto.fotografia || "https://via.placeholder.com/50"
          }));
        } catch (error) {
          console.error("Error fetching productos:", error);
        }
      },
      async deleteProducto(id) {
        try {
          const response = await fetch(`http://localhost:5000/productos/${id}`, {
            method: "DELETE"
          });
          if (response.ok) {
            this.fetchProductosData();
          }
        } catch (error) {
          console.error("Error deleting producto:", error);
        }
      },
      editProducto(cod_barras) {
        this.$router.push({ name: "editProducto", params: { cod_barras } });
      },
      redirectToAddForm() {
        this.$router.push({ name: "addProducto" });
      }
    },
    mounted() {
      this.fetchProductosData();
    }
  };
  </script>
  
  <style scoped>
  /* Mantiene el fondo negro aún si la tabla se expande */
  table {
    width: 100%;
    min-width: 1300px; /* Ajusta según sea necesario */
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Ajustes adicionales */
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