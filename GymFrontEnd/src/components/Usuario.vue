<template>
    <div class="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style="background-image: url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
        <div class="w-full max-w-lg p-8 rounded-lg shadow-lg backdrop-blur-md bg-white/10 border border-white/20">
            <h1 class="text-3xl font-bold text-white text-center mb-6">Iniciar Sesión</h1>

            <div class="flex flex-col space-y-4">
                <button
                    class="w-full font-bold shadow-sm rounded-lg py-3 bg-gray-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div class="bg-white p-2 rounded-full">
                        <svg class="w-4" viewBox="0 0 533.5 544.3">
                            <path
                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                fill="#4285f4" />
                            <path
                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                fill="#34a853" />
                        </svg>
                    </div>
                    <span class="ml-4">Sign Up with Google</span>
                </button>

                <button
                    class="w-full font-bold shadow-sm rounded-lg py-3 bg-gray-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div class="bg-white p-1 rounded-full">
                        <svg class="w-6" viewBox="0 0 32 32">
                            <path fill-rule="evenodd"
                                d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                        </svg>
                    </div>
                    <span class="ml-4">Sign Up with GitHub</span>
                </button>
            </div>

            <label for="email" class="block text-white mt-6 mb-2">Correo Electrónico</label>
            <input type="email" id="email"
                class="w-full border-gray-300 bg-white/20 text-white rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">

            <label for="password" class="block text-white mt-4 mb-2">Contraseña</label>
            <input type="password" id="password"
                class="w-full border-gray-300 bg-white/20 text-white rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">

            <router-link to="/Menu">
                <button
                    class="mt-5 w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300">
                    Iniciar Sesión
                </button>
            </router-link>


            <p class="mt-4 text-center text-sm text-white">
                ¿No tienes cuenta? <a href="/signUp" class="text-blue-300 hover:text-blue-500">Regístrate</a>
            </p>
        </div>
    </div>
</template>
