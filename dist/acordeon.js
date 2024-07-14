document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const accordionItem = this.parentNode;
        const accordionContent =
          accordionItem.querySelector(".accordion-content");

        if (accordionContent.style.display === "block") {
          accordionContent.style.display = "none";
        } else {
          accordionContent.style.display = "block";
        }
      });
    });
  });





   // Obtén referencias a los elementos del DOM
   const toggleSection1Button = document.getElementById("toggleSection1");
   const section1Content = document.getElementById("section!Content");
 
   // Agrega un evento de clic al botón
   toggleSection1Button.addEventListener("click", () => {
     // Alternar la clase 'hidden' en la sección de contenido
     section1Content.classList.toggle("hidden");
   });




    // Obtén referencias a los elementos del DOM
    const toggleSection2Button = document.getElementById("toggleSection2");
    const section2Content = document.getElementById("section2Content");

    // Agrega un evento de clic al botón
    toggleSection2Button.addEventListener("click", () => {
      // Alternar la clase 'hidden' en la sección de contenido
      section2Content.classList.toggle("hidden");
    });




    // Obtén referencias a los elementos del DOM
  const toggleSection3Button = document.getElementById("toggleSection3");
  const section3Content = document.getElementById("section3Content");

  // Agrega un evento de clic al botón
  toggleSection3Button.addEventListener("click", () => {
    // Alternar la clase 'hidden' en la sección de contenido
    section3Content.classList.toggle("hidden");
  });




  // Obtén referencias a los elementos del DOM
  const toggleSection4Button = document.getElementById("toggleSection4");
  const section4Content = document.getElementById("section4Content");

  // Agrega un evento de clic al botón
  toggleSection4Button.addEventListener("click", () => {
    // Alternar la clase 'hidden' en la sección de contenido
    section4Content.classList.toggle("hidden");
  });




  // Obtén referencias a los elementos del DOM
  const toggleSection5Button = document.getElementById("toggleSection5");
  const section5Content = document.getElementById("section5Content");

  // Agrega un evento de clic al botón
  toggleSection5Button.addEventListener("click", () => {
    // Alternar la clase 'hidden' en la sección de contenido
    section5Content.classList.toggle("hidden");
  });




   // Obtén referencias a los elementos del DOM
   const toggleSection6Button = document.getElementById("toggleSection6");
   const section6Content = document.getElementById("section6Content");
 
   // Agrega un evento de clic al botón
   toggleSection6Button.addEventListener("click", () => {
     // Alternar la clase 'hidden' en la sección de contenido
     section6Content.classList.toggle("hidden");
   });




   // Obtén referencias a los elementos del DOM
  const toggleSection7Button = document.getElementById("toggleSection7");
  const section7Content = document.getElementById("section7Content");

  // Agrega un evento de clic al botón
  toggleSection7Button.addEventListener("click", () => {
    // Alternar la clase 'hidden' en la sección de contenido
    section7Content.classList.toggle("hidden");
  });