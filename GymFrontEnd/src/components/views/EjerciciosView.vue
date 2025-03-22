<template>
    <div class="container mx-auto p-4">
      <!-- Botón para mostrar/ocultar formulario y botón de registrar -->
      <div class="mb-4 flex justify-center space-x-4">
        <button @click="mostrarFormulario = !mostrarFormulario" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          {{ mostrarFormulario ? 'Ocultar' : 'Registrar' }} Ejercicio
        </button>
        <button v-if="mostrarFormulario" type="submit" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          Registrar
        </button>
      </div>
  
      <!-- Formulario -->
      <div v-if="mostrarFormulario" class="flex flex-col gap-4">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Columna 1 -->
          <div class="space-y-4">
            <div>
              <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" name="nombre" id="nombre" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50" placeholder="Nombre" required>
            </div>
            <div>
              <label for="descripcion" class="block text-sm font-medium text-gray-700">Descripción</label>
              <input type="text" name="descripcion" id="descripcion" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50" placeholder="Descripción" required>
            </div>
            <div>
              <label for="video" class="block text-sm font-medium text-gray-700">Video</label>
              <input type="file" name="video" id="video" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            </div>
            <div>
              <label for="tipo" class="block text-sm font-medium text-gray-700">Tipo</label>
              <select id="tipo" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50" required>
                <option>Selecciona Tipo</option>
                <option>Aeróbico</option>
                <option>Resistencia</option>
                <option>Flexibilidad</option>
                <option>Fuerza</option>
              </select>
            </div>
          </div>
  
          <!-- Columna 2 -->
          <div class="space-y-4">
            <div>
              <label for="estatus" class="block text-sm font-medium text-gray-700">Estatus</label>
              <select id="estatus" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50" required>
                <option>Selecciona Estatus</option>
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>
            <div>
              <label for="dificultad" class="block text-sm font-medium text-gray-700">Dificultad</label>
              <select id="dificultad" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50" required>
                <option>Selecciona Dificultad</option>
                <option>Básico</option>
                <option>Intermedio</option>
                <option>Avanzado</option>
              </select>
            </div>
            <div>
              <label for="fechar" class="block text-sm font-medium text-gray-700">Fecha de Registro</label>
              <input type="date" name="fechar" id="fechar" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50">
            </div>
            <div>
              <label for="fechaa" class="block text-sm font-medium text-gray-700">Fecha de Actualización</label>
              <input type="date" name="fechaa" id="fechaa" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50">
            </div>
            <div>
              <label for="recomendaciones" class="block text-sm font-medium text-gray-700">Recomendaciones</label>
              <input type="text" name="recomendaciones" id="recomendaciones" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50" placeholder="Recomendaciones" required>
            </div>
            <div>
              <label for="restricciones" class="block text-sm font-medium text-gray-700">Restricciones</label>
              <input type="text" name="restricciones" id="restricciones" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50" placeholder="Restricciones" required>
            </div>
          </div>
        </form>
      </div>
  
      <!-- Lista de ejercicios -->
      <div class="mt-4">
        <TableEjercicios />
      </div>
    </div>
  </template>
  
  <script>
  import TableEjercicios from '../../components/TableEjercicios.vue';
  export default {
    components: {
      TableEjercicios,
    },
    data() {
      return {
        mostrarFormulario: false,  // Estado que controla la visibilidad del formulario
      };
    },
  };
  </script>
  