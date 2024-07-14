function createNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
  
    const navbarHTML = `
      <nav class="bg-gray-800 p-3">
        <div
          class="container mx-auto flex items-center justify-between flex-wrap"
        >
          <div>
            <a href="../../../../dist/index.html" class="text-white text-lg font-bold">ANIMES</a>
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
  
          <!-- Botón de búsqueda -->
          <button
            class="text-white inline-block p-2 hover:bg-gray-700 focus:outline-none"
            id="searchButton"
          >
            <i class="fas fa-search"></i>
          </button>
  
          <!-- Input de búsqueda -->
          <input
            type="text"
            id="searchInput"
            placeholder="Buscar..."
            class="hidden w-full md:w-auto"
          >
  
          <!-- Lista desplegable para pantallas pequeñas -->
          <div
            class="hidden md:inline-block md:flex md:items-center md:w-auto"
            id="navContent"
          >
            <!-- ... -->
          </div>
        </div>
      </nav>   
    `;
  
    navbarContainer.innerHTML = navbarHTML;
  
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
  
    searchButton.addEventListener('click', () => {
      searchInput.classList.toggle('hidden');
    });
  
    searchInput.addEventListener('keyup', searchCards);
  }
  
  function searchCards() {
    const searchTerm = searchInput.value.toLowerCase();
    const cardsContainer = document.getElementById('cardsContainer');
    const cards = cardsContainer.children;
  
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const cardName = card.querySelector('h1').textContent.toLowerCase();
      const cardDescription = card.querySelector('p').textContent.toLowerCase();
  
      if (cardName.includes(searchTerm) || cardDescription.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  }