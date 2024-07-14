// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
      link: "../boku-no-hero-academia-7th-season/1.html",
      imageSrc: "../../../img/2024/boku-no-hero-academia-7th-season.jpg",
      cap: "capitulo 1",
      visto:true,
    },
    {
      link: "../boku-no-hero-academia-7th-season/2.html",
      imageSrc: "../../../img/2024/boku-no-hero-academia-7th-season.jpg",
      cap: "capitulo 2",
      visto:true,
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
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <a href="${cardData.link}">
              <img class="lg:h-72 md:h-48 w-full object-cover object-center" src="${cardData.imageSrc}" alt="Imagen del capítulo">
          </a>
          <div class="p-6">
              <h2 class="text-base font-medium text-black mb-1">${cardData.cap}</h2>
              <div class="flex items-center flex-wrap">
              </div>
          </div>
      </div>
  </div>
  `;
  cardsContainer.innerHTML += cardHTML;
}

// Agrega las tarjetas iniciales con índice
cardsData.forEach((data, index) => addCard(data, index));

// Evento para agregar una nueva tarjeta al hacer clic en el botón
document.getElementById("addCardBtn").addEventListener("click", () => {
  const newCardData = {
    // Datos para la nueva tarjeta
  };
  addCard(newCardData);
});

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