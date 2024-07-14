// Crea la barra de navegación
function createNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
  
    const navbarHTML = `
    <nav class="bg-gray-800 p-3">
    <div class="container mx-auto flex items-center justify-between flex-wrap">
      <div>
        <a href="index.html" class="text-white text-lg font-bold">ANIMES</a>
      </div>
      <!-- Lista desplegable para pantallas pequeñas -->
      <div
        class="hidden md:inline-block md:flex md:items-center md:w-auto"
        id="navContent"
      >
        <!-- Lista desplegable 1 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="index.html" class="block md:inline-block w-full md:w-auto">
            <button
              id="dropdownButton1"
              class="text-white bg-blue-500 hover:bg-blue-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto"
            >
              <span class="underline">INICIO</span>
            </button>
          </a>
        </div>
  
        <!-- Lista desplegable 2 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/vistos/1.html"
            ><button
              id="dropdownButton2"
              class="text-white bg-yellow-500 hover:bg-yellow-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span>VISTOS</span>
            </button></a
          >
        </div>
  
        <!-- Lista desplegable 3 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/por-ver/1.html"
            ><button
              id="dropdownButton3"
              class="text-white bg-red-500 hover:bg-red-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span>POR VER</span>
            </button></a
          >
        </div>
  
        <!-- Lista desplegable 4 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/estoy-viendo/1.html"
            ><button
              id="dropdownButton4"
              class="text-white bg-green-500 hover:bg-green-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span>ESTOY VIENDO</span>
            </button></a
          >
        </div>
  
        <!-- Lista desplegable 5 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/todos-los-animes/2024/1.html"
            ><button
              id="dropdownButton5"
              class="text-white bg-pink-500 hover:bg-pink-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span>TODOS LOS ANIMES</span>
            </button></a
          >
        </div>
  
        <!-- Lista desplegable 6 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/por-genero/1.html"
            ><button
              id="dropdownButton6"
              class="text-white bg-purple-500 hover:bg-purple-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span>POR GENERO</span>
            </button></a
          >
        </div>
  
        <!-- Lista desplegable 7 -->
        <div class="relative inline-block text-left md:ml-4 w-full md:w-auto">
          <a href="../src/paginas/por-tipo/1.html"
            ><button
              id="dropdownButton7"
              class="text-white bg-purple-500 hover:bg-purple-600 hover:text-white hover:underline px-3 py-2 rounded w-full md:w-auto mt-1"
            >
              <span>POR TIPO</span>
            </button></a
          >
        </div>
      </div>
      <!-- Botón para desplegar en pantallas pequeñas -->
      <button class="text-white inline-block p-2 hover:bg-gray-700 focus:outline-none md:hidden" id="menuButton">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    </div>
    </nav>

    <div id="searchContainer" class="hidden md:absolute md:top-0 md:right-0 md:mt-3 md:mr-4">
    <input type="text" id="searchInput" class="bg-gray-200 px-3 py-2 rounded-md w-48 focus:outline-none" placeholder="Buscar...">
  </div>
  <div id="searchResultsContainer" class="hidden absolute top-16 left-0 mt-3 w-full flex justify-center">
      <div id="searchResults" class="w-2/3 bg-white border border-gray-300 rounded-md shadow-md p-3">
          <!-- Aquí se mostrarán los resultados de búsqueda -->
      </div>
  </div>
  `;

  navbarContainer.innerHTML = navbarHTML;

  const menuButton = document.getElementById('menuButton');
  const searchContainer = document.getElementById('searchContainer');
  const searchInput = document.getElementById('searchInput');
  const searchResultsContainer = document.getElementById('searchResultsContainer');
  const searchResults = document.getElementById('searchResults');

  // Función para mostrar/ocultar el campo de búsqueda al hacer clic en el botón de menú
  menuButton.addEventListener('click', function() {
    searchContainer.classList.toggle('hidden');
    if (!searchContainer.classList.contains('hidden')) {
      searchInput.focus(); // Enfoca el campo de búsqueda cuando se muestra
    }
  });

  // Función para manejar la búsqueda
  function handleSearch() {
    const searchTerm = searchInput.value.trim(); // Obtener el término de búsqueda y eliminar espacios en blanco al principio y al final

    // Aquí puedes agregar la lógica para buscar y mostrar los resultados
    // Por ahora, solo mostraremos un mensaje de ejemplo
    const searchResultsHTML = `
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