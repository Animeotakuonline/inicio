// Verificar si el contador está almacenado en localStorage
if(localStorage.getItem('visitas')) {
    // Si existe, obtener el valor y convertirlo a entero
    var contador = parseInt(localStorage.getItem('visitas'));
} else {
    // Si no existe, establecer el contador en 0
    var contador = 0;
}

// Incrementar el contador
contador++;

// Mostrar el contador en la página
document.getElementById('contador').innerHTML = 'visitas: ' + contador + ' usuarios visitaron el sitio';

// Almacenar el contador en localStorage
localStorage.setItem('visitas', contador.toString());