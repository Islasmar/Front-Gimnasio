<template>
    <div class="min-h-screen flex justify-center items-center bg-cover bg-center" 
         style="background-image: url('/src/assets/img/pexels-leonardho-1552242.jpg');">
      <div class="w-full max-w-2xl p-8 bg-black bg-opacity-80 shadow-lg border border-gray-400 rounded-lg">
        <div class="text-center">
          <h1 class="text-3xl font-extrabold text-white">Sign Up</h1>
        </div>
        <div class="mt-6 grid grid-cols-2 gap-4">
          <input class="w-full px-4 py-3 rounded-lg bg-black bg-opacity-40 border border-gray-300 
                        placeholder-gray-500 text-white text-sm focus:outline-none focus:border-red-500 
                        focus:bg-black focus:bg-opacity-50 col-span-2" 
                 type="text" placeholder="Nombre Completo" />
          <input class="w-full px-4 py-3 rounded-lg bg-black bg-opacity-40 border border-gray-300 
                        placeholder-gray-500 text-white text-sm focus:outline-none focus:border-red-500 
                        focus:bg-black focus:bg-opacity-70" 
                 type="text" placeholder="Primer Apellido" />
          <input class="w-full px-4 py-3 rounded-lg bg-black bg-opacity-40 border border-gray-300 
                        placeholder-gray-500 text-white text-sm focus:outline-none focus:border-red-500 
                        focus:bg-black focus:bg-opacity-70" 
                 type="text" placeholder="Segundo Apellido" />
          <select class="w-full px-4 py-3 rounded-lg bg-black bg-opacity-40 border border-gray-300 
                          text-white text-sm focus:outline-none focus:border-red-500 
                          focus:bg-black focus:bg-opacity-70">
            <option selected>Género</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="NB">No Binario</option>
          </select>
          <select class="w-full px-4 py-3 rounded-lg bg-black bg-opacity-40 border border-gray-300 
                          text-white text-sm focus:outline-none focus:border-red-500 
                          focus:bg-black focus:bg-opacity-70">
            <option selected>Tipo de Sangre</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <input class="w-full px-4 py-3 rounded-lg bg-black bg-opacity-40 border border-gray-300 
                        placeholder-gray-500 text-white text-sm focus:outline-none focus:border-red-500 
                        focus:bg-black focus:bg-opacity-70 col-span-2" 
                 type="email" placeholder="Email" />
          <input class="w-full px-4 py-3 rounded-lg bg-black bg-opacity-40 border border-gray-300 
                        placeholder-gray-500 text-white text-sm focus:outline-none focus:border-red-500 
                        focus:bg-black focus:bg-opacity-70 col-span-2" 
                 type="password" placeholder="Contraseña" />
          
          <!-- Campo de Fecha de Nacimiento con Label -->
          <div class="col-span-2">
            <label class="text-white font-medium">Fecha de Nacimiento</label>
            <input class="w-full px-4 py-3 rounded-lg bg-black bg-opacity-40 border border-gray-300 
                          text-white text-sm focus:outline-none focus:border-red-500 
                          focus:bg-black focus:bg-opacity-70" 
                   type="date" />
          </div>

          <!-- Campo de Fotografía -->
          <div class="col-span-2">
            <label class="text-white font-medium">Fotografía</label>
            <input class="w-full px-4 py-3 rounded-lg bg-black bg-opacity-40 border border-gray-300 
                          text-white text-sm focus:outline-none focus:border-red-500 
                          focus:bg-black focus:bg-opacity-70" 
                   type="file" />
          </div>

          <a href="/home" class="col-span-2">
            <button class="w-full py-3 rounded-lg text-white font-semibold bg-red-600 
                           border border-gray-400 hover:bg-red-800 transition-all duration-300 
                           ease-in-out shadow-md">
              Sign Up
            </button>
          </a>
          <a href="/" class="col-span-2">
            <button class="w-full py-3 rounded-lg text-white font-semibold bg-gray-600 
                           border border-gray-400 hover:bg-gray-800 transition-all duration-300 
                           ease-in-out shadow-md">
              Cancel
            </button>
          </a>
        </div>
      </div>
    </div>
</template>