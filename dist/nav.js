// Crea la barra de navegación
function createNavbar() {
  const navbarContainer = document.getElementById('navbar-container');

  const navbarHTML = `
  <nav class="bg-gray-800 p-3">
    <div class="container mx-auto flex items-center justify-between flex-wrap">
      <div>
        <a href="index.html" class="text-white text-lg font-bold">ANIMES</a>
      </div>
      <!-- Botón para desplegar en pantallas pequeñas -->
      <button class="text-white inline-block p-2 hover:bg-gray-700 focus:outline-none md:hidden" id="menuButton">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <!-- Lista desplegable para pantallas pequeñas -->
      <div class="hidden md:inline-block md:flex md:items-center md:w-auto" id="navContent">
        <!-- Lista desplegable 1 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="index.html" class="block md:inline-block w-full md:w-auto">
            <button id="dropdownButton1" class="text-white bg-blue-500 hover:bg-blue-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto">
              <span class="underline">INICIO</span>
            </button>
          </a>
        </div>

        <!-- Lista desplegable 2 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/vistos/1.html">
            <button id="dropdownButton2" class="text-white bg-yellow-500 hover:bg-yellow-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1">
              <span>VISTOS</span>
            </button>
          </a>
        </div>

        <!-- Lista desplegable 3 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/por-ver/1.html">
            <button id="dropdownButton3" class="text-white bg-red-500 hover:bg-red-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1">
              <span>POR VER</span>
            </button>
          </a>
        </div>

        <!-- Lista desplegable 4 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/estoy-viendo/1.html">
            <button id="dropdownButton4" class="text-white bg-green-500 hover:bg-green-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1">
              <span>ESTOY VIENDO</span>
            </button>
          </a>
        </div>

        <!-- Lista desplegable 5 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/todos-los-animes/2024/1.html">
            <button id="dropdownButton5" class="text-white bg-pink-500 hover:bg-pink-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1">
              <span>TODOS LOS ANIMES</span>
            </button>
          </a>
        </div>

        <!-- Lista desplegable 6 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/por-genero/1.html">
            <button id="dropdownButton6" class="text-white bg-purple-500 hover:bg-purple-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1">
              <span>POR GENERO</span>
            </button>
          </a>
        </div>

        <!-- Lista desplegable 7 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/por-tipo/1.html">
            <button id="dropdownButton7" class="text-white bg-purple-500 hover:bg-purple-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1">
              <span>POR TIPO</span>
            </button>
          </a>
        </div>

        <!-- Lista desplegable 7 -->
        <div class="relative inline-block text-left md:ml-4">
          <button class="text-white bg-gray-500 hover:bg-gray-600 hover:text-white hover:underline px-3 py-2 rounded" id="searchButton">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div id="searchContainer" class="hidden absolute top-0 left-0 mt-12 w-full flex justify-center">
    <input type="text" id="searchInput" class="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Search...">
  </div>
  <div id="searchResultsContainer" class="hidden absolute top-16 left-0 mt-3 w-full flex justify-center">
    <div id="searchResults" class="w-2/3 bg-white border border-gray-300 rounded-md shadow-md p-3">
      <!-- Aquí se mostrarán los resultados de búsqueda -->
    </div>
  </div>
  `;

  navbarContainer.innerHTML = navbarHTML;

  const searchButton = document.getElementById('searchButton');
  const searchContainer = document.getElementById('searchContainer');
  const searchInput = document.getElementById('searchInput');
  const searchResultsContainer = document.getElementById('searchResultsContainer');
  const searchResults = document.getElementById('searchResults');

  searchButton.addEventListener('click', function() {
    searchContainer.classList.toggle('hidden');
    searchInput.focus(); // Enfoca el campo de búsqueda cuando se hace clic en el botón de búsqueda
  });

  // Función para manejar la búsqueda
  function handleSearch() {
    const searchTerm = searchInput.value.trim(); // Obtener el término de búsqueda y eliminar espacios en blanco al principio y al final

    // Aquí puedes agregar la lógica para buscar y mostrar los resultados
    // Por ahora, solo mostraremos un mensaje de ejemplo
    const searchResultsHTML = `
    <style>
      #searchResults ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      #searchResults ul li {
        margin-bottom: 0.5rem; /* Ajusta el espaciado entre los elementos de la lista según sea necesario */
      }
    </style>
    <p>Mostrando resultados para: ${searchTerm}</p>
    <ul>
    </ul>
    `;
    searchResults.innerHTML = searchResultsHTML;
    searchResultsContainer.classList.remove('hidden'); // Mostrar contenedor de resultados
  }

  // Agregar un event listener al campo de búsqueda para manejar la búsqueda
  searchInput.addEventListener('input', handleSearch);
}

// Llama a la función para crear la barra de navegación
createNavbar();
