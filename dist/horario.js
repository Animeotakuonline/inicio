// Función para crear un elemento de acordeón con su respectivo contenido
function createAccordionItem(day, index) {
    // Crear el elemento de acordeón
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    // Crear el botón del encabezado del acordeón
    const accordionHeader = document.createElement("button");
    accordionHeader.id = `toggleSection${index}`;
    accordionHeader.classList.add("accordion-header");
    accordionHeader.textContent = day;

    // Crear el contenedor del contenido del acordeón
    const accordionContent = document.createElement("div");
    accordionContent.id = `section${index}Content`;
    accordionContent.classList.add("accordion-content", "hidden", "grid", "grid-cols-1", "md:grid-cols-4", "gap-4");

    // Crear la sección para los últimos animes
    const latestAnimesSection = document.createElement("section");
    latestAnimesSection.id = `latestAnimesSection${index}`;
    latestAnimesSection.classList.add("latest-animes");
    latestAnimesSection.innerHTML = "<!-- Contenido de Últimos Animes se agregará dinámicamente aquí -->";

    // Agregar la sección de últimos animes al contenido del acordeón
    accordionContent.appendChild(latestAnimesSection);

    // Agregar el botón y el contenido al elemento de acordeón
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionContent);

    return accordionItem;
}

// Función para generar el contenido del horario
function generateHorarioContent() {
    const dias = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"];
    const accordion = document.createElement("div");
    accordion.classList.add("accordion");

    // Crear elementos de acordeón para cada día de la semana
    dias.forEach((dia, index) => {
        const accordionItem = createAccordionItem(dia, index + 1);
        accordion.appendChild(accordionItem);
    });

    // Obtener el contenedor principal y agregar el acordeón
    const mainContainer = document.querySelector(".max-w-screen-lg");
    mainContainer.appendChild(accordion);
}

// Llamar a la función para generar el contenido del horario al cargar la página
window.addEventListener("load", generateHorarioContent);