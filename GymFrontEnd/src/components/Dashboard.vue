<template>
    <div class="bg-black min-h-screen flex flex-col items-center p-6">
      <!-- Título en la parte superior -->
      <h1 class="text-4xl font-bold text-white mb-6 z-20">Dashboard</h1>
  
      <!-- Fondo de imagen detrás de las cartas -->
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/src/assets/img/pexels-leonardho-1552242.jpg'); opacity: 0.8;"></div>
      
      <div class="grid grid-cols-3 gap-6 w-full max-w-6xl relative z-10">
        <!-- Tarjetas de la primera fila -->
        <div v-for="card in firstRowCards" :key="card.title" class="card">
          <component :is="card.icon" class="text-4xl mb-2" />
          <h2 class="text-xl font-bold">{{ card.title }}</h2>
          <p class="text-sm text-gray-700">{{ card.description }}</p>
          <div class="flex gap-4 mt-3 justify-center">
            <button v-if="card.button1" :class="card.button1.class">{{ card.button1.text }}</button>
            <button v-if="card.button2" :class="card.button2.class">{{ card.button2.text }}</button>
          </div>
        </div>
      </div>
  
      <!-- Segunda fila -->
      <div class="grid grid-cols-3 gap-6 w-full max-w-6xl mt-6 relative z-10">
        <div v-for="card in secondRowCards" :key="card.title" class="card">
          <component :is="card.icon" class="text-4xl mb-2" />
          <h2 class="text-xl font-bold">{{ card.title }}</h2>
          <p class="text-sm text-gray-700">{{ card.description }}</p>
          <div class="flex gap-4 mt-3 justify-center">
            <button v-if="card.button1" :class="card.button1.class">{{ card.button1.text }}</button>
            <button v-if="card.button2" :class="card.button2.class">{{ card.button2.text }}</button>
          </div>
        </div>
      </div>
  
      <!-- Evaluaciones e Instalaciones -->
      <div class="grid grid-cols-2 gap-6 w-full max-w-6xl mt-6 relative z-10">
        <div class="card">
          <h2 class="text-xl font-bold">Evaluaciones de Servicio</h2>
          <p class="text-sm text-gray-700">Comentarios de los clientes.</p>
        </div>
        <div class="card">
          <h2 class="text-xl font-bold">Instalaciones</h2>
          <p class="text-sm text-gray-700">Estado actual del gimnasio.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Dumbbell, ClipboardList, Wrench, DollarSign, ShoppingCart } from 'lucide-vue-next';
  
  export default {
    data() {
      return {
        firstRowCards: [
          {
            title: 'Total de Equipos',
            description: 'Inventario completo de equipos.',
            icon: Dumbbell,
            button1: { text: 'Ver lista', class: 'btn-green' },
            button2: { text: 'Agregar equipo', class: 'btn-red' }
          },
          {
            title: 'Equipos Disponibles',
            description: 'Equipos listos para su uso.',
            icon: ClipboardList,
            button1: { text: 'Ver lista', class: 'btn-green' }
          },
          {
            title: 'Equipos Ocupados',
            description: 'Actualmente en uso.',
            icon: ClipboardList,
            button1: { text: 'Ver lista', class: 'btn-green' }
          }
        ],
        secondRowCards: [
          {
            title: 'Equipos en Mantenimiento',
            description: 'Equipos fuera de servicio.',
            icon: Wrench,
            button1: { text: 'Ver lista', class: 'btn-green' },
            button2: { text: 'Agregar equipo', class: 'btn-red' }
          },
          {
            title: 'Pagos Pendientes',
            description: 'Pagos por procesar.',
            icon: DollarSign,
            button1: { text: 'Información', class: 'btn-green' }
          },
          {
            title: 'Pedidos Realizados',
            description: 'Historial de compras.',
            icon: ShoppingCart,
            button1: { text: 'Información', class: 'btn-green' },
            button2: { text: 'Agregar pedido', class: 'btn-red' }
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  .card {
    background: rgba(255, 255, 255, 0.6); /* Reducir opacidad de las cartas */
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.2);
  }
  
  .btn-green {
    background-color: #4CAF50; /* Botón verde */
    color: white;
    padding: 12px;
    border-radius: 5px;
    font-size: 16px;
    width: 100%; /* Botones del mismo tamaño */
    max-width: 200px;
    height: 45px;
    text-align: center;
    border: none;
    transition: transform 0.3s, background-color 0.3s;
  }
  
  .btn-red {
    background-color: #FF5733; /* Botón rojo */
    color: white;
    padding: 12px;
    border-radius: 5px;
    font-size: 16px;
    width: 100%; /* Botones del mismo tamaño */
    max-width: 200px;
    height: 45px;
    text-align: center;
    border: none;
    transition: transform 0.3s, background-color 0.3s;
  }
  
  .btn-green:hover, .btn-red:hover {
    transform: scale(1.05);
    opacity: 0.9; /* Cambiar opacidad al pasar el mouse */
  }
  
  .flex {
    display: flex;
  }
  
  .gap-4 {
    gap: 1rem;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
  
  .bg-cover {
    background-size: cover;
  }
  
  .bg-center {
    background-position: center;
  }
  </style>   