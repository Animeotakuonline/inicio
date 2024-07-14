document.addEventListener('DOMContentLoaded', function () {
    // Función para configurar una lista desplegable
    function setupDropdown(buttonId, contentId) {
        const dropdownButton = document.getElementById(buttonId);
        const dropdownContent = document.getElementById(contentId);

        // Verifica si los elementos existen antes de intentar agregar oyentes de eventos
        if (dropdownButton && dropdownContent) {
            dropdownButton.addEventListener('click', () => {
                dropdownContent.classList.toggle('hidden');
            });

            // Cerrar la lista desplegable si se hace clic fuera de ella
            document.addEventListener('click', (event) => {
                if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
                    dropdownContent.classList.add('hidden');
                }
            });
        }
    }

    // Configurar todas las listas desplegables
    for (let i = 1; i <= 7; i++) {
        const buttonId = `dropdownButton${i}`;
        const contentId = `dropdownContent${i}`;
        setupDropdown(buttonId, contentId);
    }
  
    // Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
    const cardsData = [
      {
        imageSrc: "https://cdn.jkdesu.com/assets/images/animes/image/hoshikuzu-telepath.jpg",
        dateAdded: "2023",
        dateOfRelease: "Fecha de emisión",
        name: "Nombre del anime",
        status: "Estado",
        availability: "Disponible X capitulos",
      },
      // Agrega más objetos según sea necesario
    ];
  
    // Función para agregar una tarjeta al contenedor
    function addCard(cardData) {
      const cardsContainer = document.getElementById("cardsContainer");
  
      const cardHTML = `
        <div class="p-4 sm:w-1/2 lg:w-1/4">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-72 md:h-48 w-full object-cover object-center" src="${cardData.imageSrc}" alt="blog">
            <div class="p-6">
              <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateAdded}</h2>
              <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateOfRelease}</h2>
              <h1 class="text-2xl font-semibold mb-3">${cardData.name}</h1>
              <h3 class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">${cardData.status}</h3>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-3">
                  <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    ${cardData.availability}
                  </span>
                </div>
              </li>
              <div class="flex items-center flex-wrap">
                <a href="#" class="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0">Read More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
  
      cardsContainer.innerHTML += cardHTML;
    }
  
    // Agrega las tarjetas iniciales
    cardsData.forEach(addCard);
  
    // Evento para agregar una nueva tarjeta al hacer clic en el botón
    document.getElementById("addCardBtn").addEventListener("click", () => {
      const newCardData = {
        // Datos para la nueva tarjeta
      };
      addCard(newCardData);
    });
  });
