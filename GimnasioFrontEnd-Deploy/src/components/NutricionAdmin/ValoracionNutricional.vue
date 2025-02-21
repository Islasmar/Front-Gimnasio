<template>
    <h1 class="title-gym">BULL'S GYM</h1>
    <main class="w-[100%] h-auto min-h-[85%] flex justify-center">
        <section class="w-[50%] flex flex-col items-center">
            <table class="w-[86%] bg-white text-left text-sm text-gray-900 rounded ">
                <thead class="bg-gray-50 text-center">
                    <tr>
                        <th scope="col" class="px-6 py-4 bg-gray-900 font-medium text-gray-100 rounded-l-md">Nombre de usuario</th>
                        <th scope="col" class="px-6 py-4 bg-gray-900 font-medium text-gray-100">Correo electronico</th>
                        <th scope="col" class="px-6 py-4 bg-gray-900 font-medium text-gray-100">Fecha de creacion</th>
                        <th scope="col" class="px-6 py-4 bg-gray-900 font-medium text-gray-100"></th>
                    </tr>
                </thead>
                <tbody class="bg-gray-200">
                    <tr class="hover:bg-gray-500 ">
                        <th class="h-[50px] text-center">
                            <span>adalid_26</span>
                        </th>
                        <th class="text-center">
                            <span>adalid_iq@gmail.com</span>
                        </th>
                        <th class="text-center">
                            <span>03-Agosto-2024</span>
                        </th>
                        <th class="flex justify-center">
                            <button  @click="mostrarTabla('tabla1')" type="button" id="mostrar" class="px-2 mt-1 py-2 rounded-md bg-red-600 text-white hover:bg-gray-600">
                                Ver evaluación
                            </button>
                        </th>
                    </tr>

                    <tr class="hover:bg-gray-500">
                        <th class="h-[50px] text-center">
                            <span>emilio_MC</span>
                        </th>
                        <th class="text-center">
                            <span>emilio_mc@gmail.com</span>
                        </th>
                        <th class="text-center">
                            <span>04-Agosto-2024</span>
                        </th>
                        <th class="flex justify-center">
                            <button  @click="mostrarTabla('tabla2')" type="button" id="dieta" class="px-2 mt-1 py-2 rounded-md bg-red-600 text-white hover:bg-gray-600">
                                Ver evaluación
                            </button>
                        </th>
                    </tr>

                    <tr class="hover:bg-gray-500">
                        <th class="h-[50px] text-center">
                            <span>aldair-NPM</span>
                        </th>
                        <th class="text-center">
                            <span>aldair_ai@gmail.com</span>
                        </th>
                        <th class="text-center">
                            <span>05-Agosto-2024</span>
                        </th>
                        <th class="flex justify-center">
                            <button type="button" id="dieta" class="px-2 mt-1 py-2 rounded-md bg-red-600 text-white hover:bg-gray-600">
                                Ver evaluación
                            </button>
                        </th>
                    </tr>

                    <tr class="hover:bg-gray-500">
                        <th class="h-[50px] text-center">
                            <span>ameli_PG</span>
                        </th>
                        <th class="text-center">
                            <span>ameli_pg@gmail.com</span>
                        </th>
                        <th class="text-center">
                            <span>06-Agosto-2024</span>
                        </th>
                        <th class="flex justify-center">
                            <button type="button" id="dieta" class="px-2 mt-1 py-2 rounded-md bg-red-600 text-white hover:bg-gray-600">
                                Ver evaluación
                            </button>
                        </th>
                    </tr>

                    <tr class="hover:bg-gray-500">
                        <th class="h-[50px] text-center">
                            <span>adalid_26</span>
                        </th>
                        <th class="text-center">
                            <span>adalid_iq@gmail.com</span>
                        </th>
                        <th class="text-center">
                            <span>03-Agosto-2024</span>
                        </th>
                        <th class="flex justify-center">
                            <button type="button" id="dieta" class="px-2 mt-1 py-2 rounded-md bg-red-600 text-white hover:bg-gray-600">
                                Ver evaluación
                            </button>
                        </th>
                    </tr>

                    <tr class="hover:bg-gray-500">
                        <th class="h-[50px] text-center">
                            <span>emilio_MC</span>
                        </th>
                        <th class="text-center">
                            <span>emilio_mc@gmail.com</span>
                        </th>
                        <th class="text-center">
                            <span>04-Agosto-2024</span>
                        </th>
                        <th class="flex justify-center">
                            <button type="button" id="dieta" class="px-2 mt-1 py-2 rounded-md bg-red-600 text-white hover:bg-gray-600">
                                Ver evaluación
                            </button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </section>
        <section class="w-[50%] flex flex-col h-auto mr-8">
            <div class="w-full rounded-tl-md rounded-tr-md bg-gray-900 flex flex-col items-center">
                <span class="text-white">Evaluación nutricional</span>
            </div>
            <div class="bg-gray-300 w-full rounded-b-md mb-4">
                <table class="w-full evaluacion" v-if="tablaVisible === 'tabla1'">
                    <thead>
                        <tr>
                        <th scope="col" class="px-6 py-1 bg-gray-400 font-medium text-gray-100">Pregunta</th>
                        <th scope="col" class="px-6 py-1 bg-gray-400 font-medium text-gray-100">Respuesta</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-500 ">
                            <th class="h-[50px] text-center border">
                                <span>¿Cuantas comidas realiza al dia?</span>
                            </th>
                            <th class="text-center">
                                <span>De 2 a 3 comidas</span>
                            </th>
                        </tr>
                        <tr class="hover:bg-gray-500">
                            <th class="h-[50px] text-center border">
                                <span>¿Cuantos dias realiza ejercicio a la semana?</span>
                            </th>
                            <th class="text-center">
                                <span>De 1 a 2 dias</span>
                            </th>
                        </tr>
                        
                        <tr class="hover:bg-gray-500 ">
                            <th class="h-[50px] text-center border">
                                <span>¿Es alergico a algun alimento?</span>
                            </th>
                            <th class="text-center">
                                <span>No, no tengo alergia a ningun alimento</span>
                            </th>
                        </tr>
                        <tr class="hover:bg-gray-500 ">
                            <th class="h-[50px] text-center border">
                                <span>¿Tiene alguna enfermedad?</span>
                            </th>
                            <th class="text-center">
                                <span>No, no tengo enfermedades</span>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <RouterLink to="/dietas">
                    <button v-if="tablaVisible === 'tabla1'" class="bg-red-600 hover:bg-gray-600 w-full font-medium text-gray-100 rounded-md py-2 mt-2">
                        Generar Dieta
                    </button>
                </RouterLink>

                <table class="w-full evaluacion" v-if="tablaVisible === 'tabla2'">
                    <thead>
                        <tr>
                        <th scope="col" class="px-6 py-1 bg-gray-400 font-medium text-gray-100">Pregunta</th>
                        <th scope="col" class="px-6 py-1 bg-gray-400 font-medium text-gray-100">Respuesta</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-500 ">
                            <th class="h-[50px] text-center border">
                                <span>Peso actual</span>
                            </th>
                            <th class="text-center">
                                <span>72 kg</span>
                            </th>
                        </tr>
                        <tr class="hover:bg-gray-500">
                            <th class="h-[50px] text-center border">
                                <span>Altura</span>
                            </th>
                            <th class="text-center">
                                <span>175 cm</span>
                            </th>
                        </tr>
                        <tr class="hover:bg-gray-500 ">
                            <th class="h-[50px] text-center border">
                                <span>¿Tiene alguna condicion fisica especial?</span>
                            </th>
                            <th class="text-center">
                                <span>No, no tengo nincuna condicion fisica especial</span>
                            </th>
                        </tr>
                        <tr class="hover:bg-gray-500 ">
                            <th class="h-[50px] text-center border">
                                <span>¿Tiene alguna enfermedad?</span>
                            </th>
                            <th class="text-center">
                                <span>No, no tengo enfermedades</span>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <RouterLink to="/dietas">
                    <button v-if="tablaVisible === 'tabla2'" class="bg-red-600 hover:bg-gray-600 w-full font-medium text-gray-100 rounded-md py-2 mt-2">
                        Generar Dieta
                    </button>
                </RouterLink>
            </div>
        </section>
    </main>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      tablaVisible: null
    };
  },
  methods: {
    mostrarTabla(tabla) {
      this.tablaVisible = tabla;
    }
  }
};
</script>
