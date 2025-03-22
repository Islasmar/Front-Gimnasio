<template>
  <div>
    <!-- Paso del Indicador -->
    <div class="flex mb-4">
      <div v-for="(step, index) in steps" :key="index" class="flex items-center">
        <div :class="['w-8 h-8 flex items-center justify-center rounded-full', { 'bg-blue-500 text-white': currentStep === index, 'bg-gray-300': currentStep !== index }]">
          {{ index + 1 }}
        </div>
        <div v-if="index < steps.length - 1" class="flex-1 border-t-2" :class="{'border-blue-500': currentStep > index, 'border-gray-300': currentStep <= index}"></div>
      </div>
    </div>
    
    <!-- Contenido del Paso -->
    <div>
      <slot :currentStep="currentStep"></slot>
    </div>
    
    <!-- Botones de Navegación -->
    <div class="flex justify-between mt-4">
      <button v-if="currentStep > 0" @click="prevStep" class="bg-gray-300 px-4 py-2 rounded">Anterior</button>
      <button v-if="currentStep < steps.length - 1" @click="nextStep" class="bg-blue-500 text-white px-4 py-2 rounded">Siguiente</button>
      <button v-if="currentStep === steps.length - 1" @click="submitForm" class="bg-green-500 text-white px-4 py-2 rounded">Registrar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      required: true
    },
    initialStep: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentStep: this.initialStep
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    submitForm() {
      this.$emit('submit');
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales para el Stepper */
</style>
