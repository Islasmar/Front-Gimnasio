<template>
  <div>
    <h1 class="text-2xl xl:text-3xl font-extrabold mb-6">Gestión de Pedidos</h1>

    <!-- Formulario para añadir un nuevo pedido -->
    <form @submit.prevent="addOrder">

      <input
        v-model="newOrder.ProductoID"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="text" placeholder="Producto ID" required
      />
      <input
        v-model="newOrder.PersonaID"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="text" placeholder="Persona ID" required
      />
      <select
        v-model="newOrder.Tipo"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        required
      >
        <option value="" disabled>Selecciona un tipo</option>
        <option value="Promoción">Promoción</option>
        <option value="Descuento">Descuento</option>
        <option value="Precio Tienda">Precio Tienda</option>
      </select>

  <div class="relative mt-5">
    <input
      v-model="newOrder.FechaRegistro"
      id="fecha-registro"
      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white peer"
      type="date"
      required
    />
    <label
      for="fecha-registro"
      class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs transition-all duration-300 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600"
    >
      Fecha Registro
    </label>
  </div>
  <div class="relative mt-5">
    <input
      v-model="newOrder.FechaActualizacion"
      id="fecha-actualizacion"
      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white peer"
      type="date"
      required
    />
    <label
      for="fecha-actualizacion"
      class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs transition-all duration-300 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600"
    >
      Fecha Actualización
    </label>
  </div>
      <select
        v-model="newOrder.Estatus"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        required
      >
        <option value="" disabled>Selecciona un estatus</option>
        <option value="Activo">Activo</option>
        <option value="Inactivo">Inactivo</option>
      </select>
      <input
        v-model="newOrder.TotalProductos"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="number" placeholder="Total de Productos" required
      />
      <input
        v-model="newOrder.CostoTotal"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="number" step="0.01" placeholder="Costo Total" required
      />
      <button
        class="mt-5 tracking-wide font-semibold bg-red-700 text-red-100 w-full py-4 rounded-lg hover:bg-red-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none col-span-2"
        type="submit"
      >
        Registrar
      </button>
    </form>

    <!-- Listado de pedidos -->
    <h2 class="text-xl font-bold mt-10">Lista de Pedidos</h2>
    <table class="min-w-full bg-white mt-5">
      <thead>
        <tr>
          <th class="py-2">ID</th>
          <th class="py-2">Producto ID</th>
          <th class="py-2">Persona ID</th>
          <th class="py-2">Tipo</th>
          <th class="py-2">Fecha de Registro</th>
          <th class="py-2">Fecha de Actualización</th>
          <th class="py-2">Estatus</th>
          <th class="py-2">Total de Productos</th>
          <th class="py-2">Costo Total</th>
          <th class="py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td class="border px-4 py-2">{{ order.ID }}</td>
          <td class="border px-4 py-2">{{ order.ProductoID }}</td>
          <td class="border px-4 py-2">{{ order.PersonaID }}</td>
          <td class="border px-4 py-2">{{ order.Tipo }}</td>
          <td class="border px-4 py-2">{{ order.FechaRegistro }}</td>
          <td class="border px-4 py-2">{{ order.FechaActualizacion }}</td>
          <td class="border px-4 py-2">{{ order.Estatus }}</td>
          <td class="border px-4 py-2">{{ order.TotalProductos }}</td>
          <td class="border px-4 py-2">{{ order.CostoTotal }}</td>
          <td class="border px-4 py-2 text-center">
            <div class="flex justify-center gap-2">
              <button @click="editOrder(order.ProductoID)" class="bg-yellow-500 text-white px-4 py-2 rounded-lg w-24">
                Editar
              </button>
              <button @click="deleteOrder(order.ProductoID)" class="bg-red-500 text-white px-4 py-2 rounded-lg w-24">
                Eliminar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Formulario para editar un pedido -->
    <div v-if="editingOrder">
      <h2 class="text-xl font-bold mt-10">Editar Pedido</h2>
      <form @submit.prevent="updateOrder">

        <input
          v-model="currentOrder.ProductoID"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="text" placeholder="Producto ID" required
        />
        <input
          v-model="currentOrder.PersonaID"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="text" placeholder="Persona ID" required
        />
        <select
          v-model="currentOrder.Tipo"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          required
        >
          <option value="" disabled>Selecciona un tipo</option>
          <option value="Promoción">Promoción</option>
          <option value="Descuento">Descuento</option>
          <option value="Precio Tienda">Precio Tienda</option>
        </select>
        <div class="relative mt-5">
    <input
      v-model="currentOrder.FechaRegistro"
      id="fecha-registro"
      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white peer"
      type="date"
      required
    />
    <label
      for="fecha-registro"
      class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs transition-all duration-300 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600"
    >
      Fecha Registro
    </label>
  </div>
  <div class="relative mt-5">
    <input
      v-model="currentOrder.FechaActualizacion"
      id="fecha-actualizacion"
      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white peer"
      type="date"
      required
    />
    <label
      for="fecha-actualizacion"
      class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs transition-all duration-300 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600"
    >
      Fecha Actualización
    </label>
  </div>
        <select
          v-model="currentOrder.Estatus"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          required
        >
          <option value="" disabled>Selecciona un estatus</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
        <input
          v-model="currentOrder.TotalProductos"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="number" placeholder="Total de Productos" required
        />
        <input
          v-model="currentOrder.CostoTotal"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="number" step="0.01" placeholder="Costo Total" required
        />
        <button
          class="mt-5 tracking-wide font-semibold bg-blue-700 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          type="submit"
        >
          Actualizar Pedido
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
      orders: [
        { ID: 1, ProductoID: "P123", PersonaID: "U456", Tipo: "Promoción", FechaRegistro: "2024-08-01", FechaActualizacion: "2024-08-01", Estatus: "Activo", TotalProductos: 5, CostoTotal: 100.00 },
        { ID: 2, ProductoID: "P124", PersonaID: "U457", Tipo: "Descuento", FechaRegistro: "2024-08-03", FechaActualizacion: "2024-08-03", Estatus: "Inactivo", TotalProductos: 10, CostoTotal: 200.00 },
        { ID: 3, ProductoID: "P125", PersonaID: "U458", Tipo: "Precio Tienda", FechaRegistro: "2024-08-05", FechaActualizacion: "2024-08-05", Estatus: "Activo", TotalProductos: 2, CostoTotal: 50.00 }
      ],
      newOrder: {
        ProductoID: "",
        PersonaID: "",
        Tipo: "",
        FechaRegistro: "",
        FechaActualizacion: "",
        Estatus: "",
        TotalProductos: "",
        CostoTotal: ""
      },
      currentOrder: null,
      editingOrder: false,
      nextId: 4  // Asegúrate de que este ID sea único y se actualice adecuadamente
    };
  },
  methods: {
    addOrder() {
      if (this.newOrder.ProductoID && this.newOrder.PersonaID && this.newOrder.Tipo && this.newOrder.FechaRegistro && this.newOrder.FechaActualizacion && this.newOrder.Estatus && this.newOrder.TotalProductos && this.newOrder.CostoTotal) {
        const newOrderWithId = { ID: this.nextId++, ...this.newOrder };
        this.orders.push(newOrderWithId);
        this.newOrder = { ProductoID: "", PersonaID: "", Tipo: "", FechaRegistro: "", FechaActualizacion: "", Estatus: "", TotalProductos: "", CostoTotal: "" };
      }
    },
    editOrder(id) {
      this.currentOrder = { ...this.orders.find(o => o.ID === id) };
      this.editingOrder = true;
    },
    updateOrder() {
      const index = this.orders.findIndex(o => o.ID === this.currentOrder.ID);
      if (index !== -1) {
        this.orders.splice(index, 1, this.currentOrder);
      }
      this.currentOrder = null;
      this.editingOrder = false;
    },
    deleteOrder(id) {
      this.orders = this.orders.filter(o => o.ID !== id);
    }
  }
};

</script>

<style scoped>
/* Añade aquí tus estilos personalizados si es necesario */
</style>
