// Crea la barra de navegación
function createNavbar() {
    const navbarContainer = document.getElementById('navbar-container');

    const navbarHTML = `
    <nav class="bg-gray-800 p-3">
      <div
        class="container mx-auto flex items-center justify-between flex-wrap"
      >
        <div>
          <a href="../../../dist/index.html" class="text-white text-lg font-bold">ANIMES</a>
        </div>
  
        <!-- Botón para desplegar en pantallas pequeñas -->
        <button
          class="text-white inline-block p-2 hover:bg-gray-700 focus:outline-none md:hidden"
          id="menuButton"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
  
        <!-- Lista desplegable para pantallas pequeñas -->
        <div
          class="hidden md:inline-block md:flex md:items-center md:w-auto"
          id="navContent"
        >
          <!-- Lista desplegable 1 -->
          <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
            <a href="../../../dist/index.html" class="block md:inline-block w-full md:w-auto">
              <button id="dropdownButton1" class="text-white bg-blue-500 hover:bg-blue-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto">
                  <span>INICIO</span>
              </button>
          </a>
          
          </div>
  
          <!-- Lista desplegable 2 -->
          <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
            <a href="../vistos/1.html"><button
              id="dropdownButton2"
              class="text-white bg-yellow-500 hover:bg-yellow-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span>VISTOS</span>
            </button></a>
          </div>
  
          <!-- Lista desplegable 3 -->
          <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
            <a href="../por-ver/1.html"><button
              id="dropdownButton3"
              class="text-white bg-red-500 hover:bg-red-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span>POR VER</span>
            </button></a>
          </div>
  
          <!-- Lista desplegable 4 -->
          <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
            <a href="../estoy-viendo/1.html"><button
              id="dropdownButton4"
              class="text-white bg-green-500 hover:bg-green-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span>ESTOY VIENDO</span>
            </button></a>
          </div>
  
          <!-- Lista desplegable 5 -->
          <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
            <a href="../todos-los-animes/2024/1.html"><button
              id="dropdownButton5"
              class="text-white bg-pink-500 hover:bg-pink-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span>TODOS LOS ANIMES</span>
            </button></a>
          </div>
  
          <!-- Lista desplegable 6 -->
          <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
            <a href="../por-genero/1.html"><button
              id="dropdownButton6"
              class="text-white bg-purple-500 hover:bg-purple-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span>POR GENERO</span>
            </button></a>
          </div>
  
          <!-- Lista desplegable 7 -->
          <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
            <a href="../por-tipo/1.html"><button
              id="dropdownButton7"
              class="text-white bg-purple-500 hover:bg-purple-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span class=" underline">POR TIPO</span>
            </button></a>
          </div>
        </div>
      </div>
    </nav>
    `;

    navbarContainer.innerHTML = navbarHTML;
}

// Llama a la función para crear la barra de navegación
createNavbar();
