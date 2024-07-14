 // Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
      imageSrc: "../../../img/2024/sengoku-youko-senma-konton-hen.jpg",
      dateAdded: "2024",
      dateOfRelease: "Agregado el: 01 de 06 del 2024",
      name: "Episodio 1",
      readMoreLink: "../2024/informacion/",
    },
 // Agrega más objetos según sea necesario
];
// Función para agregar una tarjeta al contenedor
function addCard(cardData, index) {
    const cardsContainer = document.getElementById("cardsContainer");
    
    // Modifica la condición para incluir las tarjetas deseadas
    const visto = cardData.visto || false;
    const por_ver = cardData.por_ver || false;
    const mirando = cardData.mirando || false;
    
    const cardHTML = `
    <div class="p-4 sm:w-1/2 lg:w-1/4 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
        <a href="${cardData.readMoreLink}">
          <img class="lg:h-72 md:h-48 w-full object-cover object-center" src="${cardData.imageSrc}" alt="${cardData.name}">
          <div class="overlay">
            <h1 class="text-sm font-bold text-white p-1">${cardData.name}</h1>
          </div>
        </a>
        <div class="p-3">
          <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateAdded}</h2>
          <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateOfRelease}</h2>
          <div class="flex items-center flex-wrap">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  `;
    
    cardsContainer.innerHTML += cardHTML;
}

// Agrega las tarjetas iniciales con índice
cardsData.forEach((data, index) => addCard(data, index));


document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');

    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('hidden');
    });

    // Cerrar la lista desplegable si se hace clic fuera de ella
    document.addEventListener('click', (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.add('hidden');
        }
    });
});