<template>
    <div class="container mx-auto p-4">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 bg-white dark:bg-gray-800 max-w-screen-lg mx-auto">
          <thead class="bg-gray-900 text-white dark:bg-gray-700">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">#</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Video</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nombre</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Descripción</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Tipo</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Estatus</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Dificultad</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Fecha Registro</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Fecha Actualización</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Recomendaciones</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Restricciones</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Eliminar</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Editar</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">1</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"></td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Peso Muerto</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Consiste esencialmente en extender la cadera y los músculos que la rodean</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Aeróbico</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Activo</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Avanzado</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">31/Enero/2023</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">31/Marzo/2023</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Requiere una importante activación del sistema nervioso central y una gran implicación muscular, por tanto, se recomienda entre 1 y 2 sesiones pesadas a la semana como máximo.</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Deberías hacer peso muerto al final del día de piernas y ponerlos primero el día de espalda.</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600 dark:text-red-400"><a href="#">Eliminar</a></td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400"><a href="#">Editar</a></td>
            </tr>
            <!-- Agrega más filas aquí para mostrar más datos -->
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">2</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"></td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Prensa de Piernas</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Ejercicio que trabaja principalmente los cuádriceps, glúteos y femorales.</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Fuerza</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Activo</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Intermedio</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">15/Febrero/2023</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">15/Abril/2023</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Asegúrate de mantener la espalda recta durante el ejercicio.</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Evita usar un peso excesivo para prevenir lesiones.</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600 dark:text-red-400"><a href="#">Eliminar</a></td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400"><a href="#">Editar</a></td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">3</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"></td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Curl de Bíceps</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Ejercicio para fortalecer los músculos del bíceps.</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Fuerza</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Activo</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Básico</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">01/Marzo/2023</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">01/Mayo/2023</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Para mejores resultados, combina con ejercicios de tríceps.</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">No realices el ejercicio con una forma incorrecta.</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600 dark:text-red-400"><a href="#">Eliminar</a></td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400"><a href="#">Editar</a></td>
            </tr>
            <!-- Agrega más filas según sea necesario -->
          </tbody>
        </table>
      </div>
    </div>
  </template>
  