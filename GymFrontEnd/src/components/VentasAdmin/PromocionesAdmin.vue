<template>
  <div>
    <h1 class="text-2xl xl:text-3xl font-extrabold mb-6">Promociones</h1>

    <!-- Formulario para añadir una nueva promoción -->
    <form @submit.prevent="addPromotion">
      <input
        v-model="newPromotion.Producto_ID"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="text" placeholder="ID del Producto" required
      />
      <input
        v-model="newPromotion.NombreProducto"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="text" placeholder="Nombre del Producto" required
      />
      <input
        v-model="newPromotion.Marca"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="text" placeholder="Marca" required
      />
      <input
        v-model="newPromotion.Precio"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="number" step="0.01" placeholder="Precio" required
      />
      <select v-model="newPromotion.Tipo"
         class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"> 
        <option value="" disabled selected hidden>Tipo</option>
        <option value="Miembro">Miembro</option>
        <option value="Usuario">Usuario</option>
        <option value="Empleado">Empleado</option>
        </select>  
        
      <select v-model="newPromotion.Aplicacion"
        
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"> 
       <option value="" disabled selected hidden>Aplicacion en</option>
       <option value="Tienda Virtual">Tienda Virtual</option>
       <option value="Tienda presencial">Tienda presencial</option>
      </select>

      <select v-model="newPromotion.Estatus"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"> 
        <option value="" disabled selected hidden>Estatus</option>
        <option value="1">1</option>
        <option value="0">0</option>
         </select>
         <div class="relative mt-5">
  <input
    v-model="newPromotion.FechaCreacion"
    id="fecha-creacion"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
    type="date"
    required
  />
  <label for="fecha-creacion" class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs">
    Fecha de Creación
  </label>
</div>
<div class="relative mt-5">
  <input
    v-model="newPromotion.FechaActualizacion"
    id="fecha-Actualizacion"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
    type="date"
    required
  />
  <label for="fecha-Actualizacion" class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs">
    Fecha de Actualizacion
  </label>
</div>

      <button
        class="mt-5 tracking-wide font-semibold bg-red-700 text-red-100 w-full py-4 rounded-lg hover:bg-red-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none col-span-2"
        type="submit"
      >
        Registrar
      </button>
    </form>

    <!-- Listado de promociones -->
    <h2 class="text-xl font-bold mt-10">Lista de Promociones</h2>
    <table class="min-w-full bg-white mt-5">
      <thead>
        <tr>
          <th class="py-2">ID</th>
          <th class="py-2">ID producto</th>
          <th class="py-2">Nombre del Producto</th>
          <th class="py-2">Marca</th>
          <th class="py-2">Precio</th>
          <th class="py-2">Tipo</th>
          <th class="py-2">Aplicacion en</th>
          <th class="py-2">Estatus</th>
          <th class="py-2">Fecha de Creación</th>
          <th class="py-2">Fecha de Actualizacion</th>
          <th class="py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="promotion in promotions" :key="promotion.id">
          <td class="border px-4 py-2">{{ promotion.id }}</td>
          <td class="border px-4 py-2">{{ promotion.Producto_ID }}</td>
          <td class="border px-4 py-2">{{ promotion.NombreProducto }}</td>
          <td class="border px-4 py-2">{{ promotion.Marca }}</td>
          <td class="border px-4 py-2">{{ promotion.Precio }}</td>
          <td class="border px-4 py-2">{{ promotion.Tipo }}</td>
          <td class="border px-4 py-2">{{ promotion.Aplicacion }}</td>
          <td class="border px-4 py-2">{{ promotion.Estatus }}</td>
          <td class="border px-4 py-2">{{ promotion.FechaCreacion }}</td>
          <td class="border px-4 py-2">{{ promotion.FechaActualizacion }}</td>
          <td class="border px-4 py-2 text-center">
            <div class="flex justify-center gap-2">
              <button @click="editPromotion(promotion.id)" class="bg-yellow-500 text-white px-4 py-2 rounded-lg w-24">
                Editar
              </button>
              <button @click="deletePromotion(promotion.id)" class="bg-red-500 text-white px-4 py-2 rounded-lg w-24">
                Eliminar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Formulario para editar una promoción -->
    <div v-if="editingPromotion">
      <h2 class="text-xl font-bold mt-10">Editar Promoción</h2>
      <form @submit.prevent="updatePromotion">
        <input
          v-model="currentPromotion.NombreProducto"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="text" placeholder="Nombre del Producto" required
        />
        <input
          v-model="currentPromotion.Marca"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="text" placeholder="Marca" required
        />
        <input
          v-model="currentPromotion.Precio"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="number" step="0.01" placeholder="Precio" required
        />
        <select v-model="currentPromotion.Tipo"
         class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"> 
        <option value="" disabled selected hidden>Tipo</option>
        <option value="Miembro">Miembro</option>
        <option value="Usuario">Usuario</option>
        <option value="Empleado">Empleado</option>
        </select>   
        <select v-model="currentPromotion.Aplicacion"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"> 
    <option value="" disabled hidden>Aplicacion en</option>
    <option value="Tienda Virtual">Tienda Virtual</option>
    <option value="Tienda presencial">Tienda presencial</option>
</select>

<select v-model="currentPromotion.Estatus"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"> 
        <option value="" disabled selected hidden>Estatus</option>
        <option value="1">1</option>
        <option value="0">0</option>
         </select>
         <div class="relative mt-5">
  <input
    v-model="currentPromotion.FechaCreacion"
    id="fecha-creacion"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
    type="date"
    required
  />
  <label for="fecha-creacion" class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs">
    Fecha de Creación
  </label>
</div>
         <div class="relative mt-5">
  <input
    v-model="currentPromotion.FechaActualizacion"
    id="fecha-Actualizacion"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
    type="date"
    required
  />
  <label for="fecha-Actualizacion" class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs">
    Fecha de Actualizacion
  </label>
</div>
        <button
          class="mt-5 tracking-wide font-semibold bg-blue-700 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none col-span-2"
          type="submit"
        >
          Actualizar
        </button>
        <br>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promotions: [
        { id: 1, NombreProducto: "Producto A", Marca: "Marca X", Precio: 19.99, Tipo: "Descuento", FechaCreacion: "2024-01-01" },
        { id: 2, NombreProducto: "Producto B", Marca: "Marca Y", Precio: 29.99, Tipo: "Oferta", FechaCreacion: "2024-02-15" },
        { id: 3, NombreProducto: "Producto C", Marca: "Marca Z", Precio: 39.99, Tipo: "Descuento", FechaCreacion: "2024-03-20" }
      ],
      newPromotion: {
        Aplicacion: "",
        NombreProducto: "",
        Marca: "",
        Precio: "",
        Tipo: "",
        FechaCreacion: "",
        FechaActualizacion: "",
        Estatus:""
      },
      currentPromotion: null,
      editingPromotion: false
    };
  },
  methods: {
    addPromotion() {
      if (this.newPromotion.NombreProducto && this.newPromotion.Marca && this.newPromotion.Precio && this.newPromotion.Tipo && this.newPromotion.FechaCreacion) {
        const newId = this.promotions.length ? this.promotions[this.promotions.length - 1].id + 1 : 1;
        this.promotions.push({ ...this.newPromotion, id: newId });
        this.newPromotion = { NombreProducto: "", Marca: "", Precio: "", Tipo: "", FechaCreacion: "" };
      }
    },
    editPromotion(id) {
      this.currentPromotion = { ...this.promotions.find(p => p.id === id) };
      this.editingPromotion = true;
    },
    updatePromotion() {
      const index = this.promotions.findIndex(p => p.id === this.currentPromotion.id);
      if (index !== -1) {
        this.promotions.splice(index, 1, this.currentPromotion);
      }
      this.currentPromotion = null;
      this.editingPromotion = false;
    },
    deletePromotion(id) {
      this.promotions = this.promotions.filter(p => p.id !== id);
    }
  }
};
</script>
