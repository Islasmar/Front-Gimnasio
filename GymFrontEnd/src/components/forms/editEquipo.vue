<template>
    <div class="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4 py-12">
        <!-- Partículas -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <div class="particle"></div>
            <div class="particle delay-1"></div>
            <div class="particle delay-2"></div>
        </div>

        <!-- Contenido principal -->
        <div class="relative z-10 bg-white rounded-2xl shadow-2xl flex flex-col w-full max-w-5xl animate-fade-in">
            <!-- Formulario -->
            <form @submit.prevent="submitEditForm" class="w-full p-8 space-y-5 text-black">
                <h2 class="text-3xl font-bold text-center text-red-600 flex items-center justify-center gap-2">
                    <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Editar Equipo
                </h2>

                <input v-model="equipo.nombre" type="text" placeholder="Nombre del Equipo"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
                <input v-model="equipo.marca" type="text" placeholder="Marca"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
                <input v-model="equipo.modelo" type="text" placeholder="Modelo"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
                <input v-model="equipo.fotografia" type="text" placeholder="URL de Fotografía"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" />
                <select v-model="equipo.estatus" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>
                <input v-model="equipo.total_existencias" type="number" placeholder="Existencias"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
                <input v-model="equipo.fecha_registro" type="date"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />

                <!-- Botones -->
                <div class="flex flex-col md:flex-row gap-2 justify-center mt-4">
                    <button type="submit"
                        class="flex-1 bg-red-700 hover:bg-red-800 text-white font-medium text-sm py-2 rounded transition-all duration-300 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Guardar Cambios
                    </button>

                    <button type="button" @click="$router.push('/Menu/equipamiento')"
                        class="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2 rounded flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22V12h6v10" />
                        </svg>
                        Volver
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            equipo: {
                nombre: '',
                marca: '',
                modelo: '',
                fotografia: '',
                estatus: 'Activo',
                total_existencias: '',
                fecha_registro: ''
            }
        };
    },
    methods: {
        async fetchEquipmentData(id) {
            try {
                const response = await fetch(`http://localhost:5000/equipos/${id}`);
                const data = await response.json();
                this.equipo = data;
            } catch (error) {
                console.error('Error fetching equipo data:', error);
            }
        },
        async submitEditForm() {
            const id = this.$route.params.id;
            try {
                const response = await fetch(`http://localhost:5000/equipos/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.equipo)
                });
                if (response.ok) {
                    alert('Equipo actualizado correctamente');
                    this.$router.push({ name: 'editEquipo', params: { id } });
                } else {
                    alert('Error al actualizar equipo');
                }
            } catch (error) {
                console.error('Error en la actualización:', error);
                alert('Ocurrió un error');
            }
        },
        goBack() {
            this.$router.push({ name: 'equipos' });
        }
    },
    mounted() {
        const id = this.$route.params.id;
        console.log(id);
        this.fetchEquipmentData(id);
    }
};
</script>

<style scoped>
/* Animaciones */
@keyframes fade-in {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fade-in 1s ease-out forwards;
}

/* Partículas */
.particle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: red;
    border-radius: 50%;
    animation: move 4s infinite ease-in-out;
    opacity: 0.6;
}
.particle.delay-1 {
    animation-delay: 1s;
}
.particle.delay-2 {
    animation-delay: 2s;
}
@keyframes move {
    0% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(100px, -100px) scale(1.5); opacity: 0.3; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
}
</style>