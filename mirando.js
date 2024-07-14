 // Datos de ejemplo para tarjetas de anime
 var animeCards = [
    {
        imageSrc: "src/paginas/img/2023/buta-no-liver-wa-kanetsu-shiro.jpg",
        title: "Buta no Liver wa Kanetsu Shiro",
        description: "Después de desmayarse al comer hígado de cerdo crudo, un otaku poco atractivo se despierta en el cuerpo de un cerdo. Ahora en compañía de Jess, una chica con la habilidad de leer mentes, se siente aceptado aceptado a pesar de sus pensamientos groseros... aunque ella planea comerlo. Cuando Jess corre peligro de enfrentar un destino oscuro, ¿podrá el Cerdo salvarla utilizando su agudeza mental, sabiduría y refinado sentido del olfato?",
        estado: "mirando",
        inicio: "01/02/24",
        link: "#"
    },
    
    // Puedes agregar más tarjetas de anime según sea necesario
];

// Función para crear elementos de tarjeta de anime
function createAnimeCard(anime) {
  var animeCard = document.createElement("div");
  animeCard.className = "long-card";

  animeCard.innerHTML = `
      <img src="${anime.imageSrc}" alt="${anime.title}" class="long-card-image">
      <div class="long-card-details">
          <h3 class="text-xl font-bold">${anime.title}</h3>
          <p class="text-gray-600">Sinopsis: ${anime.description}</p>
          <p class="text-red-600">Estado: ${anime.estado}</p>
          <p class="text-green-600">Inicio: ${anime.inicio}</p>
          <a href="${anime.link}" class="text-blue-500">Ver más</a>
      </div>
  `;

  return animeCard;
}

// Agregar tarjetas de anime a la sección "animeCards"
var animeCardsSection = document.getElementById("animeCards");
animeCards.forEach(function (anime) {
    animeCardsSection.appendChild(createAnimeCard(anime));
});

// Datos de ejemplo para últimas tarjetas de anime
var latestAnimes = [
    {
        imageSrc: "src/paginas/img/2023/buta-no-liver-wa-kanetsu-shiro.jpg",
        title: "Buta no Liver wa Kanetsu Shiro",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#" /*"ruta local del nombre del anime"*/
    },
    {
        imageSrc: "src/paginas/img/2023/horimiya-piece.jpg",
        title: "Horimiya: Piece",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#" /*"ruta local del nombre del anime"*/
    },
    {
        imageSrc: "src/paginas/img/2021/horimiya.jpg",
        title: "Horimiya",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#" /*"ruta local del nombre del anime"*/
    },
    
    {
        imageSrc: "src/paginas/img/2023/hikikomari-kyuuketsuki-no-monmon.jpg",
        title: "Hikikomari kyuuketsuki no monmon",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#" /*"ruta local del nombre del anime"*/
    },
    {
        imageSrc: "src/paginas/img/2023/keikenzumi-na-kimi-to-keiken-zero-na-ore-ga-otsukiai-suru-hanashi.jpg",
        title: "Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi..",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#" /*"ruta local del nombre del anime"*/
    },
    
    {
        imageSrc: "src/paginas/img/2023/kimi-no-koto-ga-daidaidaidaidaisuki-na-100-nin-no-kanojo.jpg",
        title: "Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
        title: "Seiken Gakuin no Makentsukai",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2023/shy.jpg",
        title: "shy",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    // Puedes agregar más últimas tarjetas de anime según sea necesario
];

// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";

    latestAnimeCard.innerHTML = `
        <img src="${anime.imageSrc}" alt="${anime.title}">
        <div class="latest-anime-details">
            <h3 class="text-lg font-bold">${anime.title}</h3>
            <!--<p>${anime.description}</p>-->
            <a href="${anime.link}" class="text-blue-500">Ver más</a>
        </div>
    `;

    return latestAnimeCard;
}

// Agregar tarjetas de último anime a la sección "latestAnimesSection"
var latestAnimesSection = document.getElementById("latestAnimesSection");
latestAnimes.forEach(function (anime) {
    latestAnimesSection.appendChild(createLatestAnimeCard(anime));
});
















/**------------------------------------------------------------------------------------------------------------------------------------------------------- */
 // Datos de ejemplo para últimas tarjetas de anime (lunes)
 var latestAnimesSection1 = [
    {
        imageSrc: "src/paginas/img/2024/high-card-season-2.jpg",
        title: "High Card Season 2",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#"
    },
    
    {
        imageSrc: "src/paginas/img/2024/tsuki-ga-michibiku-isekai-douchuu-2nd-season.jpg",
        title: "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/himesama-goumon-no-jikan-desu.jpg",
        title: "Himesama &quot;Goumon&quot; no Jikan desu",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/dosanko-gal-wa-namara-menkoi.jpg",
        title: "Dosanko Gal wa Namara Menkoi",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
     imageSrc: "src/paginas/img/2024/oroka-na-tenshi-wa-akuma-to-odoru.jpg",
        title: "Oroka na Tenshi wa Akuma to Odoru",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/synduality-noir-part-2.jpg",
        title: "Synduality: Noir Part 2",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    
    // Puedes agregar más tarjetas de anime según sea necesario
];

// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard1(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";

    latestAnimeCard.innerHTML = `
        <img src="${anime.imageSrc}" alt="${anime.title}">
        <div class="latest-anime-details">
            <h3 class="text-lg font-bold">${anime.title}</h3>
            <!--<p>${anime.description}</p>-->
            <a href="${anime.link}" class="text-blue-500">Ver más</a>
        </div>
    `;

    return latestAnimeCard;
}

// Agregar tarjetas de último anime a la sección "latestAnimesSection2"
var latestAnimesSection1Element = document.getElementById("latestAnimesSection1");
latestAnimesSection1.forEach(function (anime) {
    latestAnimesSection1Element.appendChild(createLatestAnimeCard1(anime));
});



/**------------------------------------------------------------------------------------------------------------------------------------------------------- */
 // Datos de ejemplo para últimas tarjetas de anime (segunda sección)
var latestAnimesSection2 = [
    {
        imageSrc: "src/paginas/img/2024/akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-dewa-arimasen.jpg",
        title: "Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#"
    },
    
    {
        imageSrc: "src/paginas/img/2024/shaman-king-flowers.jpg",
        title: "Shaman King: Flowers",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "#"
    },
   
    // Puedes agregar más tarjetas de anime según sea necesario
];

// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard2(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";

    latestAnimeCard.innerHTML = `
        <img src="${anime.imageSrc}" alt="${anime.title}">
        <div class="latest-anime-details">
            <h3 class="text-lg font-bold">${anime.title}</h3>
            <!--<p>${anime.description}</p>-->
            <a href="${anime.link}" class="text-blue-500">Ver más</a>
        </div>
    `;

    return latestAnimeCard;
}

// Agregar tarjetas de último anime a la sección "latestAnimesSection2"
var latestAnimesSection2Element = document.getElementById("latestAnimesSection2");
latestAnimesSection2.forEach(function (anime) {
    latestAnimesSection2Element.appendChild(createLatestAnimeCard2(anime));
});


/**------------------------------------------------------------------------------------------------------------------------------------------------------- */
 // Datos de ejemplo para últimas tarjetas de anime (segunda sección)
 var latestAnimesSection3 = [
    {
        imageSrc: "src/paginas/img/2024/jaku-chara-tomozaki-kun-2nd-stage.jpg",
        title: "Jaku-Chara Tomozaki-kun 2nd Stage",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#"
    },
    
    {
        imageSrc: "src/paginas/img/2024/gekai-elise.jpg",
        title: "Gekai Elise",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "#"
    },
    {
        imageSrc: "paginas/img/2024/ishura.jpg",
        title: "Ishura",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-3rd-season.jpg",
        title: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/sengoku-youko.jpg",
        title: "Sengoku Youko",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/mahou-shoujo-ni-akogarete.jpg",
        title: "Mahou Shoujo ni Akogarete",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/30-sai-made-doutei-dato-mahoutsukai-ni-nareru-rashii.jpg",
         title: "30-sai made Doutei dato Mahoutsukai ni Nareru Rashii",
         /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
         link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/metallic-rouge.jpg",
         title: "Metallic Rouge",
         /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
         link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/chou-futsuu-ken-chiba-densetsu.jpg",
         title: "Chou Futsuu Ken Chiba Densetsu",
         /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
         link: "#"
    },
    // Puedes agregar más tarjetas de anime según sea necesario
];

// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard3(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";

    latestAnimeCard.innerHTML = `
        <img src="${anime.imageSrc}" alt="${anime.title}">
        <div class="latest-anime-details">
            <h3 class="text-lg font-bold">${anime.title}</h3>
            <!--<p>${anime.description}</p>-->
            <a href="${anime.link}" class="text-blue-500">Ver más</a>
        </div>
    `;

    return latestAnimeCard;
}

// Agregar tarjetas de último anime a la sección "latestAnimesSection2"
var latestAnimesSection3Element = document.getElementById("latestAnimesSection3");
latestAnimesSection3.forEach(function (anime) {
    latestAnimesSection3Element.appendChild(createLatestAnimeCard3(anime));
});

/**------------------------------------------------------------------------------------------------------------------------------------------------------- */
 // Datos de ejemplo para últimas tarjetas de anime (segunda sección)
 var latestAnimesSection4 = [
    {
        imageSrc: "src/paginas/img/2024/dungeon-meshi.jpg",
        title: "Dungeon Meshi",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#"
    },
    
    {
        imageSrc: "paginas/img/2024/mato-seihei-no-slave.jpg",
        title: "Mato Seihei no Slave",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/gekkan-mousou-kagaku.jpg",
        title: "Gekkan Mousou Kagaku",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/yuuki-bakuhatsu-bang-bravern.jpg",
        title: "Yuuki Bakuhatsu Bang Bravern",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/majo-to-yajuu.jpg",
        title: "Majo to Yajuu",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/sokushi-cheat-ga-saikyou-sugite-isekai-no-yatsura-ga-marude-aite-ni-naranai-n-desu-ga.jpg",
        title: "Sokushi Cheat ga Saikyou sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/urusei-yatsura-2022-2nd-season.jpg",
        title: "Urusei Yatsura (2022) 2nd Season",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },  
    // Puedes agregar más tarjetas de anime según sea necesario
];

// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard4(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";

    latestAnimeCard.innerHTML = `
        <img src="${anime.imageSrc}" alt="${anime.title}">
        <div class="latest-anime-details">
            <h3 class="text-lg font-bold">${anime.title}</h3>
            <!--<p>${anime.description}</p>-->
            <a href="${anime.link}" class="text-blue-500">Ver más</a>
        </div>
    `;

    return latestAnimeCard;
}

// Agregar tarjetas de último anime a la sección "latestAnimesSection2"
var latestAnimesSection4Element = document.getElementById("latestAnimesSection4");
latestAnimesSection4.forEach(function (anime) {
    latestAnimesSection4Element.appendChild(createLatestAnimeCard4(anime));
});


/**------------------------------------------------------------------------------------------------------------------------------------------------------- */
 // Datos de ejemplo para últimas tarjetas de anime (segunda sección)
 var latestAnimesSection5 = [
    {
        imageSrc: "src/paginas/img/2024/sasaki-to-pii-chan.jpg",
        title: "Sasaki to Pii-chan",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#"
    },
    
    {
        imageSrc: "src/paginas/img/2024/nozomanu-fushi-no-boukensha.jpg",
        title: "Nozomanu Fushi no Boukensha",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/saijaku-tamer-wa-gomi-hiroi-no-tabi-wo-hajimemashita.jpg",
        title: "Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2023/sousou-no-frieren.jpg",
        title: "Sousou no Frieren",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
        imageSrc: "src/paginas/img/2024/chiyu-mahou-no-machigatta-tsukaikata.jpg",
        title: "Chiyu Mahou no Machigatta Tsukaikata",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#"
    },
    
    {
        imageSrc: "src/paginas/img/2024/momochi-san-chi-no-ayakashi-ouji.jpg",
        title: "Momochi-san Chi no Ayakashi Ouji",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/snack-basue.jpg",
        title: "Snack Basue",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2023/undead-unluck.jpg",
        title: "Undead Unluck",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
        imageSrc: "src/paginas/img/2024/pon-no-michi.jpg",
        title: "Pon no Michi",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
        imageSrc: "src/paginas/img/2023/pokemon-shinsaku-anime.jpg",
        title: "Pokemon (Shinsaku Anime)",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
        imageSrc: "src/paginas/img/2023/mewkledreamy-mix.jpg",
        title: "Mewkledreamy Mix!",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    }, 
    {
        imageSrc: "src/paginas/img/2024/cardfight-vanguard-divinez.jpg",
        title: "Cardfight!! Vanguard: Divinez",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },               
    // Puedes agregar más tarjetas de anime según sea necesario
];

// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard5(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";

    latestAnimeCard.innerHTML = `
        <img src="${anime.imageSrc}" alt="${anime.title}">
        <div class="latest-anime-details">
            <h3 class="text-lg font-bold">${anime.title}</h3>
            <!--<p>${anime.description}</p>-->
            <a href="${anime.link}" class="text-blue-500">Ver más</a>
        </div>
    `;

    return latestAnimeCard;
}

// Agregar tarjetas de último anime a la sección "latestAnimesSection2"
var latestAnimesSection5Element = document.getElementById("latestAnimesSection5");
latestAnimesSection5.forEach(function (anime) {
    latestAnimesSection5Element.appendChild(createLatestAnimeCard5(anime));
});



/**------------------------------------------------------------------------------------------------------------------------------------------------------- */
 // Datos de ejemplo para últimas tarjetas de anime (segunda sección)
 var latestAnimesSection6 = [
    {
        imageSrc: "src/paginas/img/2023/megumi-no-daigo-kyuukoku-no-orange.jpg",
        title: "Megumi no Daigo: Kyuukoku no Orange",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#"
    },
    
    {
        imageSrc: "src/paginas/img/2024/kekkon-yubiwa-monogatari.jpg",
        title: "Kekkon Yubiwa Monogatari",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/yubisaki-to-renren.jpg",
        title: "Yubisaki to Renren",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/bucchigiri.jpg",
        title: "Bucchigiri?!",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
   
    {
    imageSrc: "src/paginas/img/2023/ragna-crimson.jpg",
        title: "Ragna Crimson",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/mashle-2nd-season.jpg",
        title: "Mashle 2nd Season",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/ore-dake-level-up-na-ken.jpg",
        title: "Ore dake Level Up na Ken",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/ao-no-exorcist-shimane-illuminati-hen.jpg",
        title: "Ao no Exorcist: Shimane Illuminati-hen",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2023/buta-no-liver-wa-kanetsu-shiro.jpg",
        title: "Buta no Liver wa Kanetsu Shiro",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/boku-no-kokoro-no-yabai-yatsu-season-2.jpg",
        title: "Boku no Kokoro no Yabai Yatsu Season 2",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2023/kusuriya-no-hitorigoto.jpg",
        title: "Kusuriya no Hitorigoto",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/saikyou-tank-no-meikyuu-kouryaku-tairyoku-9999-no-rare-skill-mochi-tank-yuusha-party-wo-tsuihou-sareru.jpg",
        title: "Saikyou Tank no Meikyuu Kouryaku: Tairyoku 9999 no Rare Skill-mochi Tank, Yuusha Party wo Tsuihou sareru",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/kingdom-5th-season.jpg",
        title: "Kingdom 5th Season",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/1999/one-piece.jpg",
        title: "One Piece",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    // Puedes agregar más tarjetas de anime según sea necesario
];

// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard6(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";

    latestAnimeCard.innerHTML = `
        <img src="${anime.imageSrc}" alt="${anime.title}">
        <div class="latest-anime-details">
            <h3 class="text-lg font-bold">${anime.title}</h3>
            <!--<p>${anime.description}</p>-->
            <a href="${anime.link}" class="text-blue-500">Ver más</a>
        </div>
    `;

    return latestAnimeCard;
}

// Agregar tarjetas de último anime a la sección "latestAnimesSection2"
var latestAnimesSection6Element = document.getElementById("latestAnimesSection6");
latestAnimesSection6.forEach(function (anime) {
    latestAnimesSection6Element.appendChild(createLatestAnimeCard6(anime));
});



/**------------------------------------------------------------------------------------------------------------------------------------------------------- */
 // Datos de ejemplo para últimas tarjetas de anime (segunda sección)
 var latestAnimesSection7 = [
    {
        imageSrc: "src/paginas/img/2023/nanatsu-no-taizai-mokushiroku-no-yonkishi.jpg",
        title: "Nanatsu no Taizai: Mokushiroku no Yonkishi",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "#"
    },
    
    {
        imageSrc: "src/paginas/img/2023/captain-tsubasa-season-2-junior-youth-hen.jpg",
        title: "Captain Tsubasa Season 2: Junior Youth-hen",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2023/shangri-la-frontier-kusoge-hunter-kamige-ni-idoman-to-su.jpg",
        title: "Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/isekai-de-mofumofu-nadenade-suru-tame-ni-ganbattemasu.jpg",
        title: "Isekai de Mofumofu Nadenade suru Tame ni Ganbattemasu",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/loop-7-kaime-no-akuyaku-reijou-wa-moto-tekikoku-de-jiyuu-kimama-na-hanayome-seikatsu-wo-mankitsu-suru.jpg",
        title: "Loop 7-kaime no Akuyaku Reijou wa, Moto Tekikoku de Jiyuu Kimama na Hanayome Seikatsu wo Mankitsu suru",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita-2nd.jpg",
        title: "Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita 2nd",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/meiji-gekken-1874.jpg",
        title: "Meiji Gekken: 1874",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/hikari-no-ou-2nd-season.jpg",
        title: "Hikari no Ou 2nd Season",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/kyuujitsu-no-warumono-san.jpg",
        title: "Kyuujitsu no Warumono-san",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    {
    imageSrc: "src/paginas/img/2024/yami-shibai-12.jpg",
        title: "Yami Shibai 12",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "#"
    },
    // Puedes agregar más tarjetas de anime según sea necesario
];

// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard7(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";

    latestAnimeCard.innerHTML = `
        <img src="${anime.imageSrc}" alt="${anime.title}">
        <div class="latest-anime-details">
            <h3 class="text-lg font-bold">${anime.title}</h3>
            <!--<p>${anime.description}</p>-->
            <a href="${anime.link}" class="text-blue-500">Ver más</a>
        </div>
    `;

    return latestAnimeCard;
}

// Agregar tarjetas de último anime a la sección "latestAnimesSection2"
var latestAnimesSection7Element = document.getElementById("latestAnimesSection7");
latestAnimesSection7.forEach(function (anime) {
    latestAnimesSection7Element.appendChild(createLatestAnimeCard7(anime));
});




