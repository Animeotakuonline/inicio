// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
      id:"bang-dream-movie-poppin-dream",
      imageSrc: "../../img/2021/bang-dream-movie-poppin-dream.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "BanG Dream! Movie: Poppin' Dream!",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"245",
    },
    {
      id:"sorairo-utility",
      imageSrc: "../../img/2021/sorairo-utility.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Sorairo Utility",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"244",
    },
    {
      id:"yami-shibai-10",
      imageSrc: "../../img/2021/yami-shibai-10.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Yami Shibai 10",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"243",
    },
    {
      id:"mahouka-koukou-no-rettousei-tsuioku-hen",
      imageSrc: "../../img/2021/mahouka-koukou-no-rettousei-tsuioku-hen.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Mahouka Koukou no Rettousei: Tsuioku-hen",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"242",
    },
    {
      id:"getsuyoubi-no-tawawa-2-special",
      imageSrc: "../../img/2021/getsuyoubi-no-tawawa-2-special.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Getsuyoubi no Tawawa 2 Special",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"241",
    },
    {
      id:"jujutsu-kaisen-0-movie",
      imageSrc: "../../img/2021/jujutsu-kaisen-0-movie.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Jujutsu Kaisen 0 Movie",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"240",
    },
    {
      id:"kanashiki-debu-neko-chan",
      imageSrc: "../../img/2021/kanashiki-debu-neko-chan.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Kanashiki Debu Neko-chan",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"239",
    },
    {
      id:"kimetsu-no-yaiba-yuukaku-hen",
      imageSrc: "../../img/2021/kimetsu-no-yaiba-yuukaku-hen.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Kimetsu no Yaiba: Yuukaku-hen",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"238",
    },
    {
      id:"hula-fulla-dance",
      imageSrc: "../../img/2021/hula-fulla-dance.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Hula Fulla Dance",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"237",
    },
    {
      id:"jojo-no-kimyou-na-bouken-part-6-stone-ocean",
      imageSrc: "../../img/2021/jojo-no-kimyou-na-bouken-part-6-stone-ocean.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "JoJo no Kimyou na Bouken Part 6: Stone Ocean",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"236",
    },
    {
      id:"given-uragawa-no-sonzai",
      imageSrc: "../../img/2021/given-uragawa-no-sonzai.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Given: Uragawa no Sonzai",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"235",
    },
    {
      id:"the-daily-life-of-the-inmortal-king-2nd-season",
      imageSrc: "../../img/2021/the-daily-life-of-the-inmortal-king-2nd-season.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "The Daily Life of the Immortal King 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"234",
    },
    {
      id:"sword-art-online-progressive-movie-hoshi-naki-yoru-no-aria",
      imageSrc: "../../img/2021/sword-art-online-progressive-movie-hoshi-naki-yoru-no-aria.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Sword Art Online: Progressive Movie - Hoshi Naki Yoru no Aria",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"233",
    },
    {
      id:"gundam-breaker-battlogue",
      imageSrc: "../../img/2021/gundam-breaker-battlogue.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Gundam Breaker: Battlogue",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"232",
    },
    {
      id:"lupin-iii-part-6",
      imageSrc: "../../img/2021/lupin-iii-part-6.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Lupin III: Part 6",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"231",
    },
    {
      id:"ousama-ranking",
      imageSrc: "../../img/2021/ousama-ranking.jpg",
      readMoreLink: "../2021/informacion/",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Ousama Ranking",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"230",
    },
    {
      id:"180-byou-de-kimi-no-mimi-wo-shiawase-ni-dekiru-ka",
      imageSrc: "../../img/2021/180-byou-de-kimi-no-mimi-wo-shiawase-ni-dekiru-ka.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "180 Byou de Kimi no Mimi wo Shiawase ni Dekiru ka?",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"229",
    },
    {
      id:"deep-insanity-the-lost-child",
      imageSrc: "../../img/2021/deep-insanity-the-lost-child.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Deep Insanity: The Lost Child",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"228",
    },
    {
      id:"kaginado",
      imageSrc: "../../img/2021/kaginado.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Kaginado",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      por_ver:true,
      num:"227",
    },
    {
      id:"gyakuten-sekai-no-denchi-shoujo",
      imageSrc: "../../img/2021/gyakuten-sekai-no-denchi-shoujo.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Gyakuten Sekai no Denchi Shoujo",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"226",
    },
    {
      id:"dou-shen-ji",
      imageSrc: "../../img/2021/dou-shen-ji.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Dou Shen Ji",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"225",
    },
    {
      id:"build-divide-code-black",
      imageSrc: "../../img/2021/build-divide-code-black.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Build Divide: Code Black",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      visto:true,
      num:"224",
    },
    {
      id:"senpai-ga-uzai-kouhai-no-hanashi",
      imageSrc: "../../img/2021/senpai-ga-uzai-kouhai-no-hanashi.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "Senpai ga Uzai Kouhai no Hanashi",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      por_ver:true,
      num:"223",
    },
    {
      id:"world-trigger-3rd-season",
      imageSrc: "../../img/2021/world-trigger-3rd-season.jpg",
      dateAdded: "2021",
      dateOfRelease: "Fecha de emisión",
      name: "World Trigger 3rd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2021/informacion/",
      num:"222",
    },
    // Agrega más objetos según sea necesario
  ];

 
 // Función para agregar una tarjeta al contenedor
function addCard(cardData) {
    const container = document.getElementById('cardsContainer');
    if (!container) return;
  
    const visto = cardData.visto || false;
    const por_ver = cardData.por_ver || false;
    const mirando = cardData.mirando || false;
  
    const cardHTML = `
      <div id="${cardData.id}" class="p-4 w-full  border-red-100 border-opacity-60 rounded-lg">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'}">
          <a href="${cardData.readMoreLink || '#'}">
            <img class="h-72 w-full object-cover object-center" src="${cardData.imageSrc}" alt="blog">
          </a>
          <div class="p-6">
            <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateAdded}</h2>
            <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateOfRelease}</h2>
            <h1 class="text-2xl font-semibold mb-3 sm:text-xl sm:card-title">${cardData.name}</h1>
            <h3 class="text-black hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm mr-2 mb-2">${cardData.status}</h3>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-3">
                <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  ${cardData.availability}
                </span>
              </div>
            </li>
            <div class="flex items-center flex-wrap">
              <a href="${cardData.readMoreLink || '#'}" class="${visto ? 'text-orange-400' : por_ver ? 'text-orange-400' : mirando ? 'text-orange-400' : 'text-blue-600'} inline-flex items-center md:mb-2 lg:mb-0">Leer Más
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
  
    container.innerHTML += cardHTML;
  
    
  }
  

function displaySeenCards() {
  const seenCards = cardsData.filter(card => card.visto);
  seenCards.forEach(addCard);
}

document.addEventListener('DOMContentLoaded', function () {
  // Llamada a la función para mostrar solo las tarjetas vistas
  displaySeenCards();
});




  function displayCardsByIds(ids) {
    ids.forEach(id => {
      const cardData = cardsData.find(card => card.id === id);
      if (cardData) addCard(cardData);
    });
  }




  
  
  document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('cardsContainer');
    const cardIds = container.getAttribute('data-card-ids').split(',');
  
    // Llamada a la función para mostrar las tarjetas específicas
    displayCardsByIds(cardIds);
  });

  