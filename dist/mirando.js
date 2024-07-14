 // Datos de ejemplo para tarjetas de anime
 var animeCards = [
    {
        imageSrc: "../src/paginas/img/2016/rezero-kara-hajimeru-isekai-seikatsu.jpg",
        title: "Re:Zero kara Hajimeru Isekai Seikatsu",
        description: "En la historia, Subaru Natsuki es un estudiante corriente de instituto que se pierde en un mundo alternativo, donde una preciosa chica de pelo plateado lo rescata. Para devolverle el favor decide quedarse con ella, pero el destino con el que carga la muchacha es mucho más pesado de lo que Subaru puede imaginar. Los enemigos atacan sin descanso, uno tras otro, hasta que finalmente mueren tanto él como la chica. Es entonces cuando Subaru descubre que tiene el poder de dar marcha atrás en el tiempo y volver al inicio de la historia, al punto en el que llegó al mundo desconocido. El problema es que él es el único que recuerda lo ocurrido.",
        estado: "mirando",
        inicio: "01/04/24",
        link: "../src/paginas/todos-los-animes/2024/informacion/code11.html"
    },

    // Puedes agregar más tarjetas de anime según sea necesario
];
// Función para crear elementos de tarjeta de anime
function createAnimeCard(anime) {
  var animeCard = document.createElement("div");
  animeCard.className = "long-card";
  animeCard.innerHTML = `
    <div class="long-card">
        <a href="${anime.link}"><img src="${anime.imageSrc}" alt="${anime.title}"></a>
        <div class="long-card-details">
            <h3 class="text-xl font-bold">${anime.title}</h3>
            <p class="text-gray-600">Sinopsis: ${anime.description}</p>
            <p class="text-red-600">Estado: ${anime.estado}</p>
            <p class="text-green-600">Inicio: ${anime.inicio}</p>
            <a href="${anime.link}" class="text-blue-500">Ver más</a>
        </div>
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
        imageSrc: "../src/paginas/img/2016/rezero-kara-hajimeru-isekai-seikatsu.jpg",
        title: "Re:Zero kara Hajimeru Isekai Seikatsu",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html" /*"ruta local del nombre del anime"*/
    },
    {
        imageSrc: "../src/paginas/img/2023/buta-no-liver-wa-kanetsu-shiro.jpg",
        title: "Buta no Liver wa Kanetsu Shiro",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html" /*"ruta local del nombre del anime"*/
    },
    {
        imageSrc: "../src/paginas/img/2023/horimiya-piece.jpg",
        title: "Horimiya: Piece",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code1.html" /*"ruta local del nombre del anime"*/
    },
    {
        imageSrc: "../src/paginas/img/2021/horimiya.jpg",
        title: "Horimiya",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code2.html" /*"ruta local del nombre del anime"*/
    },
    {
        imageSrc: "../src/paginas/img/2023/hikikomari-kyuuketsuki-no-monmon.jpg",
        title: "Hikikomari kyuuketsuki no monmon",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html" /*"ruta local del nombre del anime"*/
    },
    {
        imageSrc: "../src/paginas/img/2023/keikenzumi-na-kimi-to-keiken-zero-na-ore-ga-otsukiai-suru-hanashi.jpg",
        title: "Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi..",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html" /*"ruta local del nombre del anime"*/
    },
    {
        imageSrc: "../src/paginas/img/2023/kimi-no-koto-ga-daidaidaidaidaisuki-na-100-nin-no-kanojo.jpg",
        title: "Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "#"
    },
    {
    imageSrc: "../src/paginas/img/2023/seiken-gakuin-no-makentsukai.jpg",
        title: "Seiken Gakuin no Makentsukai",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2023/shy.jpg",
        title: "shy",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    // Puedes agregar más últimas tarjetas de anime según sea necesario
];
// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";
    latestAnimeCard.innerHTML = `
    <a href="${anime.link}"> <img src="${anime.imageSrc}" alt="${anime.title}"></a>
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
    imageSrc: "../src/paginas/img/2024/shuumatsu-train-doko-e-iku.jpg",
    title: "Shuumatsu Train Doko e Iku",
    /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
    link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/kami-wa-game-ni-ueteiru.jpg",
    title: "Kami wa Game ni Ueteire",
    /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
    link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/lv2-kara-cheat-datta-motoyuusha-kouho-no-mattari-isekai-life.jpg",
    title: "Lv2 kara Cheat datta Motoyuusha Kouho no Mattari Isekai Life", 
    /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
    link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    }, 
    {
    imageSrc: "../src/paginas/img/2024/tsuki-ga-michibiku-isekai-douchuu-2nd-season.jpg",
    title: "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
    /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
    link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/remonster.jpg",
    title: "Re:Monster",
    /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
    link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/tadaima-okaeri.jpg",
    title: "Tadaima, Okaeri",
    /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
    link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/tensei-shitara-dainana-ouji-datta-node-kimama-ni-majutsu-wo-kiwamemasu.jpg",
    title: "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu",
    /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
    link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/ookami-to-koushinryou-merchant-meets-the-wise-wolf.jpg",
    title: "Ookami to Koushinryou: Merchant Meets the Wise Wolf",
    /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
    link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/dekisokonai-to-yobareta-motoeiyuu-wa-jikka-kara-tsuihou-sareta-node-sukikatte-ni-ikiru-koto-ni-shita.jpg",
    title: "Dekisokonai to Yobareta Motoeiyuu wa Jikka kara Tsuihou sareta node Sukikatte ni Ikiru Koto ni Shita",
    /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
    link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    // Puedes agregar más tarjetas de anime según sea necesario
];
// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard1(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";
    latestAnimeCard.innerHTML = `
    <a href="${anime.link}"><img src="${anime.imageSrc}" alt="${anime.title}"></a>
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
        imageSrc: "../src/paginas/img/2024/unnamed-memory.jpg",
        title: "Unnamed Memory",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
        imageSrc: "../src/paginas/img/2024/touken-ranbu-kai-kyoden-moyuru-honnouji.jpg",
        title: "Touken Ranbu Kai Kyoden Moyuru Honnouji",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
        imageSrc: "../src/paginas/img/2024/boukyaku-battery-tv.jpg",
        title: "Boukyaku Battery (TV)",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
        imageSrc: "../src/paginas/img/2024/rinkai.jpg",
        title: "Rinkai!",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    // Puedes agregar más tarjetas de anime según sea necesario
];
// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard2(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";
    latestAnimeCard.innerHTML = `
    <a href="${anime.link}"><img src="${anime.imageSrc}" alt="${anime.title}"></a>
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
        imageSrc: "../src/paginas/img/2024/seiyuu-radio-no-uraomote.jpg",
        title: "Seiyuu Radio no Uraomote",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
        imageSrc: "../src/paginas/img/2024/kaii-to-otome-to-kamikakushi.jpg",
        title: "Kaii to Otome to Kamikakushi",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
        imageSrc: "../src/paginas/img/2024/date-a-live-v.jpg",
        title: "Date A Live V",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/kono-subarashii-sekai-ni-shukufuku-wo-3.jpg",
        title: "Kono Subarashii Sekai ni Shukufuku wo! 3",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/bartender-kami-no-glass.jpg",
        title: "Bartender: Kami no Glass",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/kenka-dokugaku.jpg",
        title: "Kenka Dokugaku",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    // Puedes agregar más tarjetas de anime según sea necesario
];
// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard3(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";
    latestAnimeCard.innerHTML = `
    <a href="${anime.link}"><img src="${anime.imageSrc}" alt="${anime.title}"></a>
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
        imageSrc: "../src/paginas/img/2024/dungeon-meshi.jpg",
        title: "Dungeon Meshi",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    }, 
    {
        imageSrc: "../src/paginas/img/2024/yuru-camp-season-3.jpg",
        title: "Yuru Camp△ Season 3",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii.jpg",
        title: "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/hananoi-kun-to-koi-no-yamai.jpg",
        title: "Hananoi-kun to Koi no Yamai",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/wind-breaker.jpg",
        title: "Wind Breaker",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/henjin-no-salad-bowl.jpg",
        title: "Henjin no Salad Bowl",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/urusei-yatsura-2022-2nd-season.jpg",
        title: "Urusei Yatsura (2022) 2nd Season",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },  
    // Puedes agregar más tarjetas de anime según sea necesario
];
// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard4(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";
    latestAnimeCard.innerHTML = `
    <a href="${anime.link}"><img src="${anime.imageSrc}" alt="${anime.title}"></a>
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
        imageSrc: "../src/paginas/img/2024/nijiyon-animation-2.jpg",
        title: "Nijiyon Animation 2",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    }, 
    {
        imageSrc: "../src/paginas/img/2024/astro-note.jpg",
        title: "Astro Note",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/mahouka-koukou-no-rettousei-3rd-season.jpg",
        title: "Mahouka Koukou no Rettousei 3rd Season",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/tensei-shitara-slime-datta-ken-3rd-season.jpg",
        title: "Tensei shitara Slime Datta Ken 3rd Season",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
        imageSrc: "../src/paginas/img/2024/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii-part-2.jpg",
        title: "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II Part 2",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
        imageSrc: "../src/paginas/img/2024/the-idolmster-shiny-colors.jpg",
        title: "The iDOLM@STER Shiny Colors",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/highspeed-etoile.jpg",
        title: "Highspeed Etoile",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/girls-band-cry.jpg",
        title: "Girls Band Cry",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
        imageSrc: "../src/paginas/img/2024/ooi-tonbo.jpg",
        title: "Ooi! Tonbo",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
        imageSrc: "../src/paginas/img/2023/pokemon-shinsaku-anime.jpg",
        title: "Pokemon (Shinsaku Anime)",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
        imageSrc: "../src/paginas/img/2024/shadowverse-flame-arc-hen.jpg",
        title: "Shadowverse Flame: Arc-hen",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    }, 
    {
        imageSrc: "../src/paginas/img/2024/cardfight-vanguard-divinez.jpg",
        title: "Cardfight!! Vanguard: Divinez",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },               
    // Puedes agregar más tarjetas de anime según sea necesario
];
// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard5(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";
    latestAnimeCard.innerHTML = `
    <a href="${anime.link}"><img src="${anime.imageSrc}" alt="${anime.title}"></a>
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
        imageSrc: "../src/paginas/img/2024/boku-no-hero-academia-7th-season.jpg",
        title: "Boku no Hero Academia 7th Season",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },   
    {
        imageSrc: "../src/paginas/img/2024/one-room-hiatari-futsuu-tenshi-tsuki.jpg",
        title: "One Room, Hiatari Futsuu, Tenshi-tsuki",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/kaijuu-8-gou.jpg",
        title: "Kaijuu 8-gou",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/kuroshitsuji-kishuku-gakkou-hen.jpg",
        title: "Kuroshitsuji: Kishuku Gakkou-hen",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/long-zu.jpg",
        title: "Long Zu",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/the-fable.jpg",
        title: "The Fable",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/the-new-gate.jpg",
        title: "The New Gate",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/yoru-no-kurage-wa-oyogenai.jpg",
        title: "Yoru no Kurage wa Oyogenai",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/karasu-wa-aruji-wo-erabanai.jpg",
        title: "Karasu wa Aruji wo Erabanai",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/tonari-no-youkai-san.jpg",
        title: "Tonari no Youkai-san",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/sasayaku-you-ni-koi-wo-utau.jpg",
        title: "Sasayaku You ni Koi wo Utau",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/wonderful-precure.jpg",
        title: "Wonderful Precure!",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/1999/one-piece.jpg",
        title: "One Piece",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    // Puedes agregar más tarjetas de anime según sea necesario
];
// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard6(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";
    latestAnimeCard.innerHTML = `
    <a href="${anime.link}"><img src="${anime.imageSrc}" alt="${anime.title}"></a>
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
        imageSrc: "../src/paginas/img/2024/ninja-kamui.jpg",
        title: "Ninja Kamui",
        /*description: "Un chico callado y con pocas habilidades sociales pierde una apuesta e invita salir a su completa opuesta, la chica más popular y admirada por todas. Curiosamente, la chica no solo acepta, sino que le propone lugar y sitio para comer. Allí, el muchacho descubre que está llevándolo como una excusa para evitar que la inviten a salir otros chicos, y se pregunta por qué. Comienzan una relación basada en sus diferencias, que los llevará a descubrir sus puntos en común.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
        imageSrc: "../src/paginas/img/2023/captain-tsubasa-season-2-junior-youth-hen.jpg",
        title: "Captain Tsubasa Season 2: Junior Youth-hen",
         /*description: "Tras graduarse de la secundaria, Rentarou Aijou confiesa sus sentimientos y es rechazado por enésima vez. Visita un santuario de emparejamiento y el dios promete cien almas gemelas en la preparatoria. Dos de ellas, Hakari Hanazono y Karane Inda, confiesan su amor el mismo día. Pero Rentarou descubre que si alguna alma gemela no logra establecer una relación con él, morirá. Ahora, en una situación de vida o muerte, decide salir con todas ellas, haciendo crecer su peculiar familia.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/hibike-euphonium-3.jpg",
        title: "Hibike! Euphonium 3",
        /*description: "Las batallas en el aula superan a las de los reinos antiguos. Tras mil años en estasis mágica, el Señor Oscuro Leonis despierta en el cuerpo de un niño de diez años. Junto a Riselia, que combate a los Vacíos, criaturas mortales, Leonis se une a la Academia Excalibur para enfrentarlos. ¿Tendrán los Vacíos alguna conexión con su pasado?",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/shinigami-bocchan-to-kuro-maid-3rd-season.jpg",
        title: "Shinigami Bocchan to Kuro Maid 3rd Season",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/sentai-daishikkaku.jpg",
        title: "Sentai Daishikkaku",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/vampire-dormitory.jpg",
        title: "Vampire Dormitory",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/jiisan-baasan-wakagaeru.jpg",
        title: "Jiisan Baasan Wakagaeru",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/yozakura-san-chi-no-daisakusen.jpg",
        title: "Yozakura-san Chi no Daisakusen",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/tensei-kizoku-kantei-skill-de-nariagaru.jpg",
        title: "Tensei Kizoku, Kantei Skill de Nariagaru",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2.jpg",
        title: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    {
    imageSrc: "../src/paginas/img/2024/blue-archive-the-animation.jpg",
        title: "Blue Archive the Animation",
        /*description: "Mientras el planeta se acercaba a su tercera Guerra Mundial, personas con superpoderes surgieron de todo el mundo para mantener la paz. Estos individuos se convirtieron en símbolos de sus naciones respectivas, luchando para reducir el crimen y llevar a los villanos ante la justicia. Teru 'Shy' Momijiyama, una heroína adolescente, representa a Japón en el mundo de los héroes. Cuando surge una amenaza misteriosa llamada Amalareiks, Shy debe colaborar con sus compañeros héroes para detenerla a cualquier costo.",*/
        link: "../src/paginas/todos-los-animes/2024/informacion/code.html"
    },
    // Puedes agregar más tarjetas de anime según sea necesario
];
// Función para crear elementos de última tarjeta de anime
function createLatestAnimeCard7(anime) {
    var latestAnimeCard = document.createElement("div");
    latestAnimeCard.className = "latest-anime";
    latestAnimeCard.innerHTML = `
    <a href="${anime.link}"><img src="${anime.imageSrc}" alt="${anime.title}"></a>
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