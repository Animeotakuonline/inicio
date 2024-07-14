// Ejemplo de datos para las tarjetas
const cardsData = [
  {
    imageSrc: "../img/2023/twi-yaba.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión: 10-12-2023",
    name: "Twi-Yaba",
    status: "Finalizado",
    availability: "Disponible 1 capitulo",
    genres: ["Acción", "Fantasía",'x']
  },
  {
    imageSrc: "../img/2023/twi-yaba.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión: 10-12-2023",
    name: "Twi-Yaba",
    status: "Finalizado",
    availability: "Disponible 1 capitulo",
    genres: ["Acción",'x']
  },
  {
    imageSrc: "../img/2023/twi-yaba.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión: 10-12-2023",
    name: "Twi-Yaba",
    status: "Finalizado",
    availability: "Disponible 1 capitulo",
    genres: ["Acción", "Fantasía",'x']
  },
  {
    imageSrc: "../img/2023/twi-yaba.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión: 10-12-2023",
    name: "Twi-Yaba",
    status: "Finalizado",
    availability: "Disponible 1 capitulo",
    genres: ["Acción",'x'],
    readMoreLink: "../2024/informacion/",
    num: "1",
  },
  {
    imageSrc: "../img/2023/twi-yaba.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión: 10-12-2023",
    name: "Twi-Yaba",
    status: "Finalizado",
    availability: "Disponible 1 capitulo",
    genres: ["Fantasía",'x'],
    readMoreLink: "../2024/informacion/",
    num: "1",
  },
  // Agrega más objetos según sea necesario
];
// Función para agregar una tarjeta al contenedor
function addCard(cardData, index) {
  const cardsContainer = document.getElementById("cardsContainer");

  // Condiciones para el estilo de la tarjeta
  const visto = cardData.visto || false;
  const por_ver = cardData.por_ver || false;
  const mirando = cardData.mirando || false;

  // HTML de la tarjeta
  const cardHTML = `
  <div class="p-4 sm:w-1/2 lg:w-1/4 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto">
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <a href="${cardData.readMoreLink}">
        <img class="lg:h-72 md:h-48 w-full object-cover object-center" src="${cardData.imageSrc}" alt="blog">
      </a>
      <div class="p-6">
        <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateAdded}</h2>
        <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateOfRelease}</h2>
        <h1 class="text-2xl font-semibold mb-3">${cardData.name}</h1>
        <h3 class="text-black hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm mr-2 mb-2">${cardData.status}</h3>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-3">
            <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              ${cardData.availability}
            </span>
          </div>
        </li>
        <div class="flex items-center flex-wrap">
          <a href="${cardData.readMoreLink}" class="${visto || por_ver || mirando ? 'text-orange-400' : 'text-blue-600'} inline-flex items-center md:mb-2 lg:mb-0">Leer Más
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="flex items-center flex-wrap">
          <p ${cardData.num} class="${visto || por_ver || mirando ? 'text-white' : 'text-black-600'} inline-flex items-center md:mb-2 lg:mb-0">#${cardData.num}</p>
        </div>
      </div>
    </div>
  </div>
  `;

  cardsContainer.innerHTML += cardHTML; // Agrega la tarjeta al contenedor
}

// Filtrar tarjetas según el género "Acción"
const filteredCards = cardsData.filter(card => card.genres.includes("Acción"));

// Función para agregar tarjetas filtradas al contenedor
function addFilteredCardsToContainer() {
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas
  filteredCards.forEach(card => addCard(card));
}

// Agregar tarjetas filtradas al contenedor
addFilteredCardsToContainer();

// Centrar el contenedor y ocupar el 80% de la pantalla
const centeredContainer = document.getElementById("centeredContainer");
centeredContainer.classList.add("flex", "justify-center", "w-80", "mx-auto");