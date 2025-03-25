<template>
    <div class="p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold mb-4">Transacciones</h1>
  
      <!-- Buscador -->
      <input
        type="text"
        v-model="search"
        placeholder="Buscar por método de pago..."
        class="p-2 border rounded mb-4 w-full"
      />
  
      <!-- Tabla de Transacciones -->
      <table class="w-full border-collapse border">
        <thead>
          <tr class="bg-gray-200">
            <th class="border p-2">ID</th>
            <th class="border p-2">Usuario</th>
            <th class="border p-2">Método de Pago</th>
            <th class="border p-2">Monto</th>
            <th class="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaccion in filteredTransacciones" :key="transaccion.id">
            <td class="border p-2">{{ transaccion.id }}</td>
            <td class="border p-2">{{ transaccion.usuario }}</td>
            <td class="border p-2">{{ transaccion.metodoPago }}</td>
            <td class="border p-2">${{ transaccion.monto }}</td>
            <td class="border p-2">
              <button class="text-blue-500 mr-2" @click="editar(transaccion)">✏️</button>
              <button class="text-red-500" @click="eliminar(transaccion)">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Mensaje si no hay datos -->
      <p v-if="filteredTransacciones.length === 0" class="text-gray-500 mt-4">
        No se encontraron transacciones.
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const search = ref("");
  const transacciones = ref([
    { id: 1, usuario: "Juan Pérez", metodoPago: "Tarjeta de crédito", monto: 500 },
    { id: 2, usuario: "María López", metodoPago: "Tarjeta de debito", monto: 300 },
    { id: 3, usuario: "Carlos Méndez", metodoPago: "Tarjeta de crédito", monto: 700 },
    { id: 4, usuario: "Diego Cruz", metodoPago: "Tarjeta de debito", monto: 250 },
    { id: 5, usuario: "Adrian Reyes", metodoPago: "Tarjeta de debito", monto: 750 },

  ]);
  
  // Filtrar transacciones según el buscador
  const filteredTransacciones = computed(() =>
    transacciones.value.filter((t) =>
      t.metodoPago.toLowerCase().includes(search.value.toLowerCase())
    )
  );
  
  // Función ficticia para editar
  const editar = (transaccion) => {
    alert(`Editar transacción ID: ${transaccion.id}`);
  };
  
  // Función ficticia para eliminar
  const eliminar = (transaccion) => {
    if (confirm(`¿Eliminar transacción ID: ${transaccion.id}?`)) {
      transacciones.value = transacciones.value.filter((t) => t.id !== transaccion.id);
    }
  };
  </script>
  