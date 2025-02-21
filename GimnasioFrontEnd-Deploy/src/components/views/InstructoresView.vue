<template>
  <div class="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
    <div>
      <h1 class="text-gray-800 text-3xl font-extrabold">Registro de Instructores</h1>
      <p class="text-sm text-gray-500 mt-4">Complete el formulario para registrar un nuevo instructor en el sistema.</p>

      <div class="mt-8">
        <img src="https://c8.alamy.com/comp/DRRP55/young-fitness-instructor-gym-people-spinning-DRRP55.jpg" alt="Imagen del Instructor"
          class="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>

    <Stepper :steps="['Datos Básicos', 'Experiencia y Contratación', 'Detalles del Instructor']" @submit="handleSubmit">
      <!-- Datos Básicos -->
      <template v-slot="{ currentStep }">
        <div v-if="currentStep === 0">
          <input type="text" placeholder="Título de Cortesía"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <input type="text" placeholder="Nombre"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <input type="text" placeholder="Primer Apellido"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <input type="text" placeholder="Segundo Apellido"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <input type="date" placeholder="Fecha de Nacimiento"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <input type="file" placeholder="Fotografía"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <select placeholder="Género"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent">
            <option value="">Selecciona Género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
          <select placeholder="Tipo de Sangre"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent">
            <option value="">Selecciona Tipo de Sangre</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <select placeholder="Estatus"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent">
            <option value="">Selecciona Estatus</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        <!-- Experiencia y Contratación -->
        <div v-if="currentStep === 1">
          <input type='number' placeholder='Área ID'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <input type='date' placeholder='Fecha de Contratación'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <input type='text' placeholder='Puesto ID'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <input type='text' placeholder='Número de Empleado'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <select placeholder='Estatus'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent">
            <option value="">Selecciona Estatus</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        <!-- Detalles del Instructor -->
        <div v-if="currentStep === 2">
          <input type='text' placeholder='Persona ID'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <input type='number' placeholder='Total Años de Experiencia'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <input type='text' placeholder='Especialidad'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <input type='number' placeholder='Total Clientes Atendidos'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
          <select placeholder='Estatus'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent">
            <option value="">Selecciona Estatus</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
          <input type='number' placeholder='Calificación' max="5" min="0" step="0.1"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
        </div>
      </template>
    </Stepper>
  </div>

  <div class="mt-12 w-full mb-8">
    <TableInstructores></TableInstructores>
  </div>
</template>

<script>
import Stepper from '../../components/Stepper.vue';
import TableInstructores from '../../components/TableInstructores.vue';

export default {
  components: {
    Stepper,
    TableInstructores,
  },
  methods: {
    handleSubmit() {
      // Aquí puedes manejar el envío del formulario
      console.log('Formulario enviado');
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales para el FormularioInstructores */
</style>
