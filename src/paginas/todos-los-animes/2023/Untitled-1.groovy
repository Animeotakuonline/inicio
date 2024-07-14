<script>



document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item, index) {
        const header = item.querySelector(".accordion-header");
        const cardsContainer = item.querySelector(".container");

        header.addEventListener("click", function () {
            // Alternar la clase 'active' para expandir/colapsar el contenido
            item.classList.toggle("active");

            // Cargar tarjetas solo si el item se está abriendo
            if (item.classList.contains("active")) {
                // Datos de ejemplo para las tarjetas (puedes adaptar esto según tus necesidades)
                let cardsData = [];

                // Llenar cardsData según el día de la semana
                switch (index) {
                    case 0:  // Lunes
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2024/high-card-season-2.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2024/tsuki-ga-michibiku-isekai-douchuu-2nd-season.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2024/himesama-goumon-no-jikan-desu.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2024/himesama-goumon-no-jikan-desu.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2024/himesama-goumon-no-jikan-desu.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2024/himesama-goumon-no-jikan-desu.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2024/himesama-goumon-no-jikan-desu.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                    case 1:  // Martes
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                        case 2:  // Miercoles
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                        case 3:  // Jueves
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                        case 4:  // Viernes
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                        case 5:  // Sabado
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                        case 6:  // Domingo
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                    // ... (otros días de la semana)
                    default:
                        break;
                        
                }

                // Limpiar el contenedor antes de agregar nuevas tarjetas
                cardsContainer.innerHTML = "";

                // Función para agregar una tarjeta al contenedor
                function addCard(cardData) {
                    const cardHTML = `
                    <div class="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
        <img src="${cardData.imageSrc}" alt="${cardData.title}" class="w-full object-cover object-center">
        <div class="p-4 flex-grow">
            <h3 class="text-xl font-semibold mb-2">${cardData.title}</h3>
            <p class="text-gray-600 mb-4">${cardData.description}</p>
            <a href="#" class="text-blue-500 hover:underline">Leer más</a>
        </div>
    </div>
</div>

                    `;

                    cardsContainer.innerHTML += cardHTML;
                }

                // Agregar las tarjetas al contenedor
                cardsData.forEach(addCard);
            }
        });
    });
});

</script>






























<script>
  document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item, index) {
        const header = item.querySelector(".accordion-header");
        const cardsContainer = item.querySelector(".container"); // Asegúrate de que ".container" sea el contenedor correcto

        header.addEventListener("click", function () {
            item.classList.toggle("active");

            if (item.classList.contains("active")) {
                let cardsData = [];  // Tu arreglo de datos para las cards
                switch (index) {
                    case 0:  // Lunes
                        cardsData = [
                       
                            {
                                imageSrc: "paginas/img/2024/high-card-season-2.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2024/tsuki-ga-michibiku-isekai-douchuu-2nd-season.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2024/himesama-goumon-no-jikan-desu.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2024/dosanko-gal-wa-namara-menkoi.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2024/oroka-na-tenshi-wa-akuma-to-odoru.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2024/synduality-noir-part-2.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },                            
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                    case 1:  // Martes
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                        case 2:  // Miercoles
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                        case 3:  // Jueves
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                        case 4:  // Viernes
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                        case 5:  // Sabado
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                        break;
                        case 6:  // Domingo
                        cardsData = [
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            {
                                imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
                                title: "Nombre del Anime 1",
                                description: "Descripción del Anime 1",
                            },
                            // Agrega más objetos según sea necesario
                        ];
                    // ... (otros días de la semana)
                    default:
                        break;
                        
                }
                // ... (código para llenar cardsData)

                cardsContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas

                function addCard(cardData) {
                    const cardHTML = `
                    <div class="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 mt-2">
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col ">
        <img src="${cardData.imageSrc}" alt="${cardData.title}" class="w-full object-cover object-center ">
        <div class="p-4 flex-grow">
            <h3 class="text-xl font-semibold mb-2">${cardData.title}</h3>
            <p class="text-gray-600 mb-4">${cardData.description}</p>
            <a href="#" class="text-blue-500 hover:underline">Leer más</a>
        </div>
    </div>
</div>
                    `;

                    cardsContainer.innerHTML += cardHTML;
                }

                cardsData.forEach(addCard);
            }
        });
    });
});

</script>



<div class="accordion">
    <p class="font-bold">En emision</p>
    <!-- Lunes -->
    <div class="accordion-item">
      <div class="accordion-header ">
        Lunes
        <i class="fas fa-chevron-down "></i>
      </div>
      <div class="accordion-content" id="lunes">
        <section class="md:h-full flex items-center text-gray-600 mt-15">
          <div class="container mx-auto flex flex-wrap mt-10" id="cardsContainerLunes">
            <!-- Las tarjetas se insertarán aquí dinámicamente -->
          </div>
        </section>
      </div>
    </div>

    <!-- Martes -->
    <div class="accordion-item">
      <div class="accordion-header">
        Martes
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-content" id="martes">
        <section class="md:h-full flex items-center text-gray-600">
          <div class="container mx-auto flex flex-wrap -m-4" id="cardsContainerMartes">
            <!-- Las tarjetas se insertarán aquí dinámicamente -->
          </div>
        </section>
      </div>
    </div>

    <!-- Miércoles -->
    <div class="accordion-item">
      <div class="accordion-header">
        Miércoles
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-content" id="miercoles">
        <section class="md:h-full flex items-center text-gray-600">
          <div class="container mx-auto flex flex-wrap -m-4" id="cardsContainerMiercoles">
            <!-- Las tarjetas se insertarán aquí dinámicamente -->
          </div>
        </section>
      </div>
    </div>

    <!-- Jueves -->
    <div class="accordion-item">
      <div class="accordion-header">
        Jueves
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-content" id="jueves">
        <section class="md:h-full flex items-center text-gray-600">
          <div class="container mx-auto flex flex-wrap -m-4" id="cardsContainerJueves">
            <!-- Las tarjetas se insertarán aquí dinámicamente -->
          </div>
        </section>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-header">
        Viernes
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-content" id="viernes">
        <section class="md:h-full flex items-center text-gray-600">
          <div class="container mx-auto flex flex-wrap -m-4" id="cardsContainerViernes">
            <!-- Las tarjetas se insertarán aquí dinámicamente -->
          </div>
        </section>
      </div>
    </div>

   

    <!-- Sábado -->
    <div class="accordion-item">
      <div class="accordion-header">
        Sábado
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-content" id="sabado">
        <section class="md:h-full flex items-center text-gray-600">
          <div class="container mx-auto flex flex-wrap -m-4" id="cardsContainerSabado">
            <!-- Las tarjetas se insertarán aquí dinámicamente -->
          </div>
        </section>
      </div>
    </div>

    <!-- Domingo -->
    <div class="accordion-item">
      <div class="accordion-header">
        Domingo
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-content" id="domingo">
        <section class="md:h-full flex items-center text-gray-600">
          <div class="container mx-auto flex flex-wrap -m-4" id="cardsContainerDomingo">
            <!-- Las tarjetas se insertarán aquí dinámicamente -->
          </div>
        </section>
      </div>
    </div>

    <!-- Otros elementos del acordeón... -->

  </div>



  <script>
  document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      // Alternar la clase 'active' para expandir/colapsar el contenido
      item.classList.toggle("active");
    });
  });
});
</script>


<script>
  document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item) {
      const header = item.querySelector(".accordion-header");

      header.addEventListener("click", function () {
        // Alternar la clase 'active' para expandir/colapsar el contenido
        item.classList.toggle("active");
      });
    });

    // Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
    const cardsData = [
      {
        imageSrc: "paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
        dateAdded: "2024",
        dateOfRelease: "Fecha de emisión",
        name: "Nombre del anime",
        status: "Ultimo episodio: 1",
        availability: "Disponible X capitulos",
      },
      // Agrega más objetos según sea necesario
    ];

    // Función para agregar una tarjeta al contenedor
    function addCard(cardData, index) {
      const cardsContainer = document.getElementById("cardsContainer");

      // Modifica la condición para incluir las tarjetas deseadas
      const isSpecialCard = [].includes(index);

      const cardHTML = `
        <div class="p-4 sm:w-1/2 lg:w-1/4 ${isSpecialCard ? 'bg-gradient-to-r from-yellow-500 to-red-500 text-white' : 'bg-white text-black'} mx-auto rounded-lg">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-72 md:h-48 w-full object-cover object-center mb-10" src="${cardData.imageSrc}" alt="blog">
            <div class="p-6">
              <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateAdded}</h2>
              <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateOfRelease}</h2>
              <h1 class="text-2xl font-semibold mb-3">${cardData.name}</h1>
              <h3 class="text-black hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm">${cardData.status}</h3>
              <div class="flex items-center flex-wrap">
                <a href="#" class="${isSpecialCard ? 'text-orange-400' : 'text-blue-600'} inline-flex items-center md:mb-2 lg:mb-0">Read More
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
  });
</script>
