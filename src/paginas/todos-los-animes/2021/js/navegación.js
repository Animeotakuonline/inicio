// Añade funcionalidad para mostrar/ocultar menú en pantallas pequeñas
document.getElementById('menuButton').addEventListener('click', function () {
    document.getElementById('navContent').classList.toggle('hidden');
});