<template>
  <div>
    <h1 class="text-2xl xl:text-3xl font-extrabold mb-6">Preguntas de Clientes</h1>

    <!-- Formulario para añadir una nueva pregunta -->
    <form @submit.prevent="addQuestion">
      <input
        v-model="newQuestion.Pregunta"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="text" placeholder="Pregunta" required
      />
      <input
        v-model="newQuestion.Respuesta"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="text" placeholder="Respuesta" required
      />
      <input
        v-model="newQuestion.Categoria"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="text" placeholder="Categoria" required
      />
      <input
        v-model="newQuestion.Persona"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="text" placeholder="Persona" required
      />
      <select v-model="newQuestion.Estatus"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"> 
        <option value="" disabled selected hidden>Estatus</option>
        <option value="Cancelada">Cancelada</option>
        <option value="Registrada">Registrada</option>
        <option value="Pendiente">Pendiente</option>
        <option value="Atendida">Atendida</option>
      </select>
      <div class="relative mt-5">
  <input
    v-model="newQuestion.FechaCreacion"
    id="fecha-creacion"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
    type="date"
    required
  />
  <label for="fecha-creacion" class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs">
    Fecha Creación
  </label>
</div>

<div class="relative mt-5">
  <input
    v-model="newQuestion.FechaActualizacion"
    id="fecha-actualizacion"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
    type="date"
    required
  />
  <label for="fecha-actualizacion" class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs">
    Fecha Actualización
  </label>
</div>

      <button
        class="mt-5 tracking-wide font-semibold bg-red-700 text-red-100 w-full py-4 rounded-lg hover:bg-red-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none col-span-2"
        type="submit"
      >
        Registrar
      </button>
    </form>

    <!-- Listado de preguntas -->
    <h2 class="text-xl font-bold mt-10">Lista de Preguntas de Clientes</h2>
    <table class="min-w-full bg-white mt-5">
      <thead>
        <tr>
          <th class="py-2">ID</th>
          <th class="py-2">Pregunta</th>
          <th class="py-2">Respuesta</th>
          <th class="py-2">Categoria</th>
          <th class="py-2">Persona</th>
          <th class="py-2">Estatus</th>
          <th class="py-2">Fecha Creacion</th>
          <th class="py-2">Fecha Actualizacion</th>
          <th class="py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="question in questions" :key="question.id">
          <td class="border px-4 py-2">{{ question.id }}</td>
          <td class="border px-4 py-2">{{ question.Pregunta }}</td>
          <td class="border px-4 py-2">{{ question.Respuesta }}</td>
          <td class="border px-4 py-2">{{ question.Categoria }}</td>
          <td class="border px-4 py-2">{{ question.Persona }}</td>
          <td class="border px-4 py-2">{{ question.Estatus }}</td>
          <td class="border px-4 py-2">{{ question.FechaCreacion }}</td>
          <td class="border px-4 py-2">{{ question.FechaActualizacion }}</td>
          <td class="border px-4 py-2 text-center">
            <div class="flex justify-center gap-2">
              <button @click="editQuestion(question.id)" class="bg-yellow-500 text-white px-4 py-2 rounded-lg w-24">
                Editar
              </button>
              <button @click="deleteQuestion(question.id)" class="bg-red-500 text-white px-4 py-2 rounded-lg w-24">
                Eliminar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Formulario para editar una pregunta -->
    <div v-if="editingQuestion">
      <h2 class="text-xl font-bold mt-10">Editar Pregunta</h2>
      <form @submit.prevent="updateQuestion">
        <input
          v-model="currentQuestion.Pregunta"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="text" placeholder="Pregunta" required
        />
        <input
          v-model="currentQuestion.Respuesta"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="text" placeholder="Respuesta" required
        />
        <input
          v-model="currentQuestion.Categoria"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="text" placeholder="Categoria" required
        />
        <input
          v-model="currentQuestion.Persona"
          class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="text" placeholder="Persona" required
        />
        <select v-model="currentQuestion.Estatus"
           class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"> 
         <option value="" disabled selected hidden>Estatus</option>
         <option value="Cancelada">Cancelada</option>
         <option value="Registrada">Registrada</option>
         <option value="Pendiente">Pendiente</option>
         <option value="Atendida">Atendida</option>
      </select>
      <div class="relative mt-5">
  <input
    v-model="currentQuestion.FechaCreacion"
    id="fecha-creacion"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
    type="date"
    required
  />
  <label for="fecha-creacion" class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs">
    Fecha Creación
  </label>
</div>

<div class="relative mt-5">
  <input
    v-model="currentQuestion.FechaActualizacion"
    id="fecha-actualizacion"
    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
    type="date"
    required
  />
  <label for="fecha-actualizacion" class="absolute left-3 top-0 -translate-y-1/2 transform bg-white px-1 text-gray-500 text-xs">
    Fecha Actualización
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
      questions: [
        { id: 1, Pregunta: "¿Cuál es su producto más popular?", Respuesta: "Nuestro producto más popular es el X.", Categoria: "Producto", Persona: "Juan Pérez", Estatus: "Respondida", FechaCreacion: "2024-01-20", FechaActualizacion: "2024-08-15" },
        { id: 2, Pregunta: "¿Cómo puedo realizar una devolución?", Respuesta: "Puede realizar una devolución siguiendo estos pasos...", Categoria: "Devolución", Persona: "Ana López", Estatus: "Pendiente", FechaCreacion: "2024-02-10", FechaActualizacion: "2024-07-30" },
        { id: 3, Pregunta: "¿Ofrecen descuentos para clientes frecuentes?", Respuesta: "Sí, ofrecemos descuentos para clientes frecuentes.", Categoria: "Descuentos", Persona: "Carlos Rodríguez", Estatus: "Respondida", FechaCreacion: "2024-03-05", FechaActualizacion: "2024-08-05" }
      ],
      newQuestion: {
        Pregunta: "",
        Respuesta: "",
        Categoria: "",
        Persona: "",
        Estatus: "",
        FechaCreacion: "",
        FechaActualizacion: ""
      },
      currentQuestion: null,
      editingQuestion: false
    };
  },
  methods: {
    addQuestion() {
      if (this.newQuestion.Pregunta && this.newQuestion.Respuesta && this.newQuestion.Categoria && this.newQuestion.Persona && this.newQuestion.Estatus && this.newQuestion.FechaCreacion && this.newQuestion.FechaActualizacion) {
        const newId = this.questions.length ? Math.max(...this.questions.map(q => q.id)) + 1 : 1;
        this.questions.push({ ...this.newQuestion, id: newId });
        this.newQuestion = { Pregunta: "", Respuesta: "", Categoria: "", Persona: "", Estatus: "", FechaCreacion: "", FechaActualizacion: "" };
      }
    },
    editQuestion(id) {
      this.currentQuestion = { ...this.questions.find(q => q.id === id) };
      this.editingQuestion = true;
    },
    updateQuestion() {
      const index = this.questions.findIndex(q => q.id === this.currentQuestion.id);
      if (index !== -1) {
        this.questions.splice(index, 1, this.currentQuestion);
      }
      this.currentQuestion = null;
      this.editingQuestion = false;
    },
    deleteQuestion(id) {
      this.questions = this.questions.filter(q => q.id !== id);
    }
  }
};
</script>
