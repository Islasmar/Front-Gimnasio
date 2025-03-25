<template>
   <aside id="sidebar-multi-level-sidebar"
          :class="{'translate-x-0': menuVisible, '-translate-x-full': !menuVisible}"
          class="fixed top-0 left-0 z-40 w-64 h-screen overflow-y-auto transition-transform bg-black">
     <div class="px-3 py-4 overflow-y-auto">
       <ul class="space-y-2 font-medium text-white text-gray-100">
         <li>
           <RouterLink to="/home/dashboard" class="flex items-center p-2 rounded-lg hover:bg-gray-700">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                  class="w-5 h-5 text-white transition duration-75 group-hover:text-gray-300" aria-hidden="true">
               <path
                 d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z" />
             </svg>
             <span class="ms-3">Dashboard</span>
           </RouterLink>
         </li>
            <li>
               <RouterLink to="/home/equipamiento" class="flex items-center p-2 rounded-lg hover:bg-gray-700">
               <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example7" data-collapse-toggle="dropdown-example7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true">
                     <path
                        d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Equipamiento</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
               </button>
               <ul id="dropdown-example7" class="hidden py-2 space-y-2">
                  <li>
                     <RouterLink to="/equipamiento">
                        <a href="#"
                           class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Equipamiento</a>
                     </RouterLink>
                  </li>
                  <li>
                     <RouterLink to="/prestamos">
                        <a href="#"
                           class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Prestamo</a>
                     </RouterLink>
                  </li>
               </ul>
            </RouterLink>
            </li>
            <li>
               <RouterLink to="/home/sucursal">
                  <a href="#"
                     class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true" viewBox="0 0 384 512">
                        <path
                           d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
                     </svg>
                     <span class="ms-3">Sucursal</span>
                  </a>
               </RouterLink>
            </li>
            <li>
               <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example3" data-collapse-toggle="dropdown-example3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true">
                     <path
                        d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H176zM288 204c28.7 0 52 23.3 52 52v96c0 28.7-23.3 52-52 52s-52-23.3-52-52V256c0-28.7 23.3-52 52-52zm-12 52v96c0 6.6 5.4 12 12 12s12-5.4 12-12V256c0-6.6-5.4-12-12-12s-12 5.4-12 12zM159.5 244c-5.4 0-10.2 3.5-11.9 8.6l-.6 1.7c-3.5 10.5-14.8 16.1-25.3 12.6s-16.1-14.8-12.6-25.3l.6-1.7c7.2-21.5 27.2-35.9 49.8-35.9c29 0 52.5 23.5 52.5 52.5v2.2c0 13.4-4.9 26.4-13.8 36.4l-39 43.9c-6.2 7-10 15.7-10.9 24.9H192c11 0 20 9 20 20s-9 20-20 20H128c-11 0-20-9-20-20V368.3c0-20.6 7.5-40.4 21.2-55.8l39-43.9c2.4-2.7 3.7-6.2 3.7-9.8v-2.2c0-6.9-5.6-12.5-12.5-12.5z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Mantenimiento</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
               </button>
            </li>
            <li>
               <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example4" data-collapse-toggle="dropdown-example4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true">
                     <path
                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Instalaciones</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
               </button>
               <ul id="dropdown-example4" class="hidden py-2 space-y-2">
                  <li>
                     <RouterLink to="/membresias">
                        <a href="#"
                           class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Membresias</a>
                     </RouterLink>
                  </li>
                  <li>
                     <RouterLink to="/miembros">
                        <a href="#"
                           class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Miembros</a>
                     </RouterLink>
                  </li>
               </ul>
            </li>
            <li>
               <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example3" data-collapse-toggle="dropdown-example3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true">
                     <path
                        d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H176zM288 204c28.7 0 52 23.3 52 52v96c0 28.7-23.3 52-52 52s-52-23.3-52-52V256c0-28.7 23.3-52 52-52zm-12 52v96c0 6.6 5.4 12 12 12s12-5.4 12-12V256c0-6.6-5.4-12-12-12s-12 5.4-12 12zM159.5 244c-5.4 0-10.2 3.5-11.9 8.6l-.6 1.7c-3.5 10.5-14.8 16.1-25.3 12.6s-16.1-14.8-12.6-25.3l.6-1.7c7.2-21.5 27.2-35.9 49.8-35.9c29 0 52.5 23.5 52.5 52.5v2.2c0 13.4-4.9 26.4-13.8 36.4l-39 43.9c-6.2 7-10 15.7-10.9 24.9H192c11 0 20 9 20 20s-9 20-20 20H128c-11 0-20-9-20-20V368.3c0-20.6 7.5-40.4 21.2-55.8l39-43.9c2.4-2.7 3.7-6.2 3.7-9.8v-2.2c0-6.9-5.6-12.5-12.5-12.5z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Personas</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
               </button>
            </li>
            <li>
               <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example6" data-collapse-toggle="dropdown-example6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true">
                     <path
                        d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Transacciones</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
               </button>
            </li>
            <li>
               <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example6" data-collapse-toggle="dropdown-example6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true">
                     <path
                        d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Adeudos</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
               </button>
            </li>
            <li>
               <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example8" data-collapse-toggle="dropdown-example8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true">
                     <path
                        d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Productos</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
               </button>
            </li>
            <li>
               <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example2" data-collapse-toggle="dropdown-example2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true">
                     <path
                        d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Pedidos</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
               </button>
            </li>
            <li>
               <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example3" data-collapse-toggle="dropdown-example3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true">
                     <path
                        d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H176zM288 204c28.7 0 52 23.3 52 52v96c0 28.7-23.3 52-52 52s-52-23.3-52-52V256c0-28.7 23.3-52 52-52zm-12 52v96c0 6.6 5.4 12 12 12s12-5.4 12-12V256c0-6.6-5.4-12-12-12s-12 5.4-12 12zM159.5 244c-5.4 0-10.2 3.5-11.9 8.6l-.6 1.7c-3.5 10.5-14.8 16.1-25.3 12.6s-16.1-14.8-12.6-25.3l.6-1.7c7.2-21.5 27.2-35.9 49.8-35.9c29 0 52.5 23.5 52.5 52.5v2.2c0 13.4-4.9 26.4-13.8 36.4l-39 43.9c-6.2 7-10 15.7-10.9 24.9H192c11 0 20 9 20 20s-9 20-20 20H128c-11 0-20-9-20-20V368.3c0-20.6 7.5-40.4 21.2-55.8l39-43.9c2.4-2.7 3.7-6.2 3.7-9.8v-2.2c0-6.9-5.6-12.5-12.5-12.5z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Servicio al cliente</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
               </button>
            </li>
            <li>
               <button type="button"
                  class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example11" data-collapse-toggle="dropdown-example11">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true">
                     <path
                        d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Evaluaciones de Servicio</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>

               </button>
            </li>
            <li>
               <a href="/"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true">
                     <path
                        d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
               </a>
            </li>
            <li>
               <!-- Agregar el chatbot aquí -->
               <div id="chatbase-container"></div>
            </li>
         </ul>
      </div>
   </aside>
   <div :class="{'ml-64': menuVisible, 'ml-0': !menuVisible}" class="bg-black min-h-screen flex flex-col items-center p-6 transition-all">
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
        <div class="flex gap-4 mt-3 justify-center text-sm">
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

  <div class="p-4 ml-64 h-[100vh] w-[86%]">
    <router-view />
  </div>

  <!-- Botón de toggle para el menú con una imagen -->
  <button 
      @click="toggleMenu" 
      :class="{'fixed top-5 left-5': !menuVisible, 'fixed top-5 right-5': menuVisible}" 
      class="text-white z-50 transition-all duration-300"
    >
      <img src="/src/assets/img/gymbulls-removebg-preview.png" alt="Toggle Menu" class="w-12 h-12" />
    </button>
</template>
<script>
import { onMounted, ref } from 'vue';
import Home from '../components/Home.vue';
import Footer from './Footer.vue';
import { Dumbbell, ClipboardList, Wrench, DollarSign, ShoppingCart } from 'lucide-vue-next';

export default {
   components: {
      Home,
      Footer
   },
   setup() {
      const menuVisible = ref(false);  // Estado para controlar la visibilidad del menú

      const toggleMenu = () => {
         menuVisible.value = !menuVisible.value;  // Cambiar el estado al hacer clic
      };

      onMounted(() => {
         // Agregar el script del chatbot de forma dinámica
         const script = document.createElement("script");
         script.src = "https://www.chatbase.co/embed.min.js";
         script.id = "rzHbaScVBj212v3mdZWZl";
         script.domain = "www.chatbase.co";
         document.body.appendChild(script);

         // Inicializar el chatbot si es necesario
         script.onload = () => {
            if (!window.chatbase || window.chatbase("getState") !== "initialized") {
               window.chatbase = (...params) => {  // Cambié 'arguments' a 'params'
                  if (!window.chatbase.q) {
                     window.chatbase.q = [];
                  }
                  window.chatbase.q.push(params);  // Cambié 'arguments' a 'params'
               };
               window.chatbase = new Proxy(window.chatbase, {
                  get(target, prop) {
                     if (prop === "q") {
                        return target.q;
                     }
                     return (...args) => target(prop, ...args);
                  }
               });
            }
         };
      });

      return {
         menuVisible,  // Exponer la variable para que sea accesible en el template
         toggleMenu,   // Exponer la función para que sea accesible en el template
         firstRowCards: [
            {
               title: 'Total de Equipos',
               description: 'Inventario completo de equipos.',
               icon: Dumbbell,
               button1: { text: 'Ver lista', class: 'btn-green' },
               button2: { text: 'Agregar', class: 'btn-red' }
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
               button2: { text: 'Agregar', class: 'btn-red' }
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
               button2: { text: 'Agregar', class: 'btn-red' }
            }
         ]
      };
   }
};
</script>


<style>
.card {
  background: rgba(255, 255, 255, 0.7); /* Reducir opacidad de las cartas */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.2);
}

/* Botón de plegar y desplegar */
button {
  background-color: #ffffff;
  border-radius: 50%;
  padding: 10px;
  color: white;
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