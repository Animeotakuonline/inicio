/* algunas imagenes las puedo sacar de https://ww3.animeonline.ninja/ */
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    // Datos de las tarjetas
    const cardData = [
        {
            imageSrc: "../src/paginas/estoy-viendo/img/hbqlrbgWzoPUS2ORqkX0q3sbmib.jpg",
            title: "Re:Zero kara Hajimeru Isekai Seikatsu",
            description: "Ep 9",
            link: "google.com",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/2fZascNnf6RbEI9Knxqxm7V5TiC.jpg",
            title: "Kami wa Game ni Ueteiru",
            description: "Ep 3",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/ipI1VOiP4pRO1YdSUtmECF6Kcr1.jpg",
            title: "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
            description: "Ep 15",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/u9UarMgNxLTiygTF4FButdpDRul.jpg",
            title: "Date A Live V",
            description: "Ep2",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/84gdj4owO2PLuB09EqP6Zgm2BL4.jpg",
            title: "Yuru Camp△ Season 3",
            description: "Ep 2",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/5q20WPIdCi3TfvXEtMZZsFQVnV1.jpg",
            title: "Hananoi-kun to Koi no Yamai",
            description: "Ep 2",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/AaDVIYlWJGCiFNKWvezIsE3DC8z.jpg",
            title: "Mahouka Koukou no Rettousei 3rd Season",
            description: "Ep 2",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/gnkxMRfTMvM4MINia242eUwC2BC.jpg",
            title: "Tensei shitara Slime Datta Ken 3rd Season",
            description: "Ep 2",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/y6f2oHu8UPZcDwEMwESD7CKiFfY.jpg",
            title: "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II Part 2",
            description: "Ep 1",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/x2Iji29M2eAFm2YC5UH8zPHVcMT.jpg",
            title: "Boku no Hero Academia: Memories",
            description: "Ep 2",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/ab9SdJQxxbilDGprMwUu3YWBH0F.jpg",
            title: "One Room, Hiatari Futsuu, Tenshi-tsuki.",
            description: "Ep 3",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/ar2IhVfN0YXmJaBJwnVyOetJHSK.jpg",
            title: "Hibike! Euphonium 3",
            description: "Ep 2",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/t9goEAxsd8LudOnzgHJHMwIFzJB.jpg",
            title: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
            description: "Ep 2",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/zjyeHvnMeTG8Rl57gE31RCpt6bE.jpg",
            title: "Kimetsu no Yaiba",
            description: "Ep 1",
        },
        {
            imageSrc: "../src/paginas/estoy-viendo/img/c93ohIPep6Pd2ltcixMM49zf09I.jpg",
            title: "Kono Subarashii Sekai ni Shukufuku wo!",
            description: "Ep 1",
            width: 310,
            height: 175,

        },

        // Agrega más objetos de datos para cada tarjeta aquí
    ];

    // Función para crear las tarjetas y agregarlas al carrusel
  function renderCarousel() {
    carousel.innerHTML = ''; // Limpiar el contenido actual del carrusel
    cardData.forEach(data => {
      const card = createCarouselCard(data);
      carousel.appendChild(card);
    });
  }

  // Función para crear una tarjeta del carrusel
  function createCarouselCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    const link = document.createElement('a');
    link.href = data.link;

    const image = document.createElement('img');
    image.src = data.imageSrc;
    image.alt = data.title;
    image.style.width = `${data.width}px`; // Establecer el ancho personalizado
    image.style.height = `${data.height}px`; // Establecer el alto personalizado

    // Wrap the image in the link element to create the hyperlink
    link.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = data.title;
    title.style.wordWrap = 'break-word'; // Permitir que el texto se divida automáticamente
    title.style.width = '310px'; // Establecer un ancho fijo para el título
    title.style.display = 'block'; // Forzar el título a ser un bloque para que se ajuste al ancho máximo

    const description = document.createElement('p');
    description.textContent = data.description;

    card.appendChild(link); // Add the link element containing the image first
    card.appendChild(title);
    card.appendChild(description);

    return card;
  }

  // Inicializar el carrusel
  renderCarousel();

  // Agregar el evento 'click' al botón previo
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Agregar el evento 'click' al botón siguiente
  nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Función para actualizar la posición del carrusel
  function updateCarousel() {
    const cardWidth = document.querySelector('.card').offsetWidth + 20;
    const offset = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  // Verificar si el dispositivo es un móvil (opcional, ajuste la condición según sea necesario)
  if (window.matchMedia("(max-width: 768px)").matches) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < carousel.children.length - 9) {
        currentIndex++;
        updateCarousel();
      }
    });
  }
});