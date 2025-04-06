<template>
    <div class="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4 py-12">
        <!-- Partículas -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <div class="particle"></div>
            <div class="particle delay-1"></div>
            <div class="particle delay-2"></div>
        </div>

        <!-- Contenido principal -->
        <div
            class="relative z-10 bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden w-full max-w-5xl animate-fade-in">
            <!-- Formulario -->
            <form @submit.prevent="submitForm" class="w-full lg:w-1/2 p-8 space-y-5 text-black">
                <h2 class="text-3xl font-bold text-center text-red-600 flex items-center justify-center gap-2">
                    <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    {{ sucursalId ? 'Editar' : 'Agregar' }} Sucursal
                </h2>

                <input v-model="sucursal.Nombre" type="text" placeholder="Nombre"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    required />
                <input v-model="sucursal.Direccion" type="text" placeholder="Dirección"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    required />
                <input v-model="sucursal.Responsable_Id" type="text" placeholder="ID Responsable"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    required />
                <input v-model="sucursal.Total_Clientes_Atendidos" type="number" placeholder="Clientes atendidos"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    required />
                <input v-model="sucursal.Promedio_Clientes_X_Dia" type="number" placeholder="Promedio clientes/día"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    required />
                <input v-model="sucursal.Capacidad_Maxima" type="number" placeholder="Capacidad máxima"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    required />
                <input v-model="sucursal.Total_Empleados" type="number" placeholder="Empleados"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    required />
                <input v-model="sucursal.Horario_Disponibilidad" type="text" placeholder="Horario disponibilidad"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    required />

                <label class="block">Estatus:</label>
                <input v-model="sucursal.Estatus" type="checkbox" class="p-2 border border-gray-300 rounded" />

                <div class="flex flex-col md:flex-row gap-2 justify-center mt-4">
                    <!-- Botón Guardar -->
                    <button type="submit"
                        class="flex-1 bg-red-700 hover:bg-red-800 text-white font-medium text-sm py-2 rounded transition-all duration-300 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {{ sucursalId ? 'Actualizar' : 'Agregar' }} Sucursal
                    </button>

                    <!-- Botón Volver -->
                    <button type="button" @click="$router.push('/Menu/sucursales')"
                        class="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2 rounded flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22V12h6v10" />
                        </svg>
                        Volver al inicio
                    </button>
                </div>

                <!-- Barra de carga -->
                <transition name="fade">
                    <div v-if="cargando"
                        class="relative w-full max-w-xs mx-auto h-2 bg-gray-200 rounded overflow-hidden mt-4">
                        <div class="absolute top-0 left-0 h-full bg-red-600 animate-progress"></div>
                    </div>
                </transition>

                <!-- Mensaje de éxito -->
                <transition name="fade">
                    <div v-if="exito" class="flex items-center justify-center gap-3 text-green-600 mt-4 animate-bounce">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Sucursal guardada exitosamente</span>
                    </div>
                </transition>
            </form>

            <!-- Imagen lateral -->
            <div class="hidden lg:block lg:w-1/2 bg-cover bg-center"
                :style="{ backgroundImage: 'url(/src/assets/img/sucursal.jpg)' }">
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/api.js'; // Asegúrate de importar la instancia de Axios

export default {
    data() {
        return {
            sucursalId: this.$route.params.id,  // Capturamos el id de la URL para editar
            sucursal: {
                Nombre: '',
                Direccion: '',
                Responsable_Id: '',
                Total_Clientes_Atendidos: 0,
                Promedio_Clientes_X_Dia: 0,
                Capacidad_Maxima: 0,
                Total_Empleados: 0,
                Horario_Disponibilidad: '',
                Estatus: true,  // Por defecto lo dejamos como 'true'
                Fecha_Registro: '',
                Fecha_Actualizacion: ''
            },
            exito: false,
            cargando: false
        };
    },
    mounted() {
        if (this.sucursalId) {
            this.fetchSucursal(); // Si tenemos un id, cargamos los datos de la sucursal
        }
    },
    methods: {
        async fetchSucursal() {
            try {
                const response = await api.get(`/sucursales/${this.sucursalId}`);
                this.sucursal = response.data;
            } catch (error) {
                console.error('Error al cargar sucursal:', error);
            }
        },
        async submitForm() {
            try {
                this.cargando = true;
                const fecha = new Date().toISOString();

                const sucursalData = {
                    Nombre: this.sucursal.Nombre,
                    Direccion: this.sucursal.Direccion,
                    Responsable_Id: this.sucursal.Responsable_Id,
                    Total_Clientes_Atendidos: this.sucursal.Total_Clientes_Atendidos,
                    Promedio_Clientes_X_Dia: this.sucursal.Promedio_Clientes_X_Dia,
                    Capacidad_Maxima: this.sucursal.Capacidad_Maxima,
                    Total_Empleados: this.sucursal.Total_Empleados,
                    Horario_Disponibilidad: this.sucursal.Horario_Disponibilidad,
                    Estatus: this.sucursal.Estatus,
                    Fecha_Registro: this.sucursalId ? this.sucursal.Fecha_Registro : fecha,
                    Fecha_Actualizacion: fecha
                };

                if (this.sucursalId) {
                    // Si es edición, actualizamos la sucursal
                    const response = await api.put(`/sucursales/${this.sucursalId}`, sucursalData);
                    console.log('Sucursal actualizada:', response.data);
                } else {
                    // Si es creación, agregamos una nueva sucursal
                    const response = await api.post('/sucursales/', sucursalData);
                    console.log('Nueva sucursal creada:', response.data);
                }

                this.cargando = false;
                this.exito = true;

                setTimeout(() => {
                    this.exito = false;
                    this.$router.push('/Menu/sucursales'); // Volver al listado
                }, 1500);
            } catch (error) {
                console.error('Error al guardar sucursal:', error);
                this.cargando = false;
            }
        }
    }
};
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.7s ease-out;
}

/* partículas estilo humo */
.particle {
    position: absolute;
    width: 150px;
    height: 150px;
    background: radial-gradient(rgba(255, 0, 0, 0.2), transparent 70%);
    animation: float 10s infinite ease-in-out alternate;
    top: 20%;
    left: 30%;
    border-radius: 50%;
    filter: blur(30px);
    z-index: 0;
}

.particle.delay-1 {
    top: 60%;
    left: 20%;
    animation-delay: 3s;
}

.particle.delay-2 {
    top: 40%;
    left: 70%;
    animation-delay: 6s;
}

@keyframes float {
    0% {
        transform: translateY(0) scale(1);
    }

    100% {
        transform: translateY(-40px) scale(1.3);
    }
}

/* Animación mensaje éxito */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
</style>