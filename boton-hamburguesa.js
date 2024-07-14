// Obtén referencias a los elementos necesarios
var menuButton = document.getElementById("menuButton");
var navContent = document.getElementById("navContent");

// Agrega un evento de clic al botón de hamburguesa para alternar la visibilidad del menú
menuButton.addEventListener("click", function () {
  navContent.classList.toggle("hidden");
});