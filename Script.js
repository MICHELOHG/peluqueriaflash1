console.log('Script.js está cargado');

const containers = [
    "container1-cuerpo1",
    "container2-cuerpo1",
    "container3-cuerpo1"
];

let currentIndex = 0;

function rotateDivs() {
    console.log('Rotating divs');

    // Obtener el contenedor actual y el siguiente
    const currentContainer = document.getElementById(containers[currentIndex]);
    const nextIndex = (currentIndex + 1) % containers.length;
    const nextContainer = document.getElementById(containers[nextIndex]);

    // Hacer desaparecer el contenedor actual
    currentContainer.classList.remove('visible');

    // Hacer aparecer el siguiente contenedor
    nextContainer.classList.add('visible');

    // Actualizar el índice actual
    currentIndex = nextIndex;
}

// Inicializar todos los contenedores con la clase container-cuerpo
containers.forEach((id, index) => {
    const element = document.getElementById(id);
    element.classList.add('container-cuerpo');
    if (index === 0) {
        element.classList.add('visible');
    }
});

// Rotar los divs cada 3 segundos (3000 ms)
setInterval(rotateDivs, 3000);




const nextButton = document.querySelector('.carousel-control-next');

function clickNext() {
  nextButton.click();
}

setInterval(clickNext, 2000); // Cambia el intervalo a 2000 ms (2 segundos)










document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('c8-contenedor1');
    const servicios = document.querySelectorAll('#c8-servicio');
    const puntos = document.querySelectorAll('#c8-puntos');

    contenedor.addEventListener('mouseover', function() {
        contenedor.classList.add('background-white');
        servicios.forEach(function(servicio) {
            servicio.classList.add('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.add('c8-puntos-blancos');
        });
    });

    contenedor.addEventListener('mouseout', function() {
        contenedor.classList.remove('background-white');
        servicios.forEach(function(servicio) {
            servicio.classList.remove('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.remove('c8-puntos-blancos');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('c8-contenedor2');
    const servicios = document.querySelectorAll('#c82-servicio');
    const puntos = document.querySelectorAll('#c82-puntos');

    contenedor.addEventListener('mouseover', function() {
        contenedor.classList.add('background-white2');
        servicios.forEach(function(servicio) {
            servicio.classList.add('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.add('c82-puntos-blancos');
        });
    });

    contenedor.addEventListener('mouseout', function() {
        contenedor.classList.remove('background-white2');
        servicios.forEach(function(servicio) {
            servicio.classList.remove('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.remove('c82-puntos-blancos');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('c8-contenedor3');
    const servicios = document.querySelectorAll('#c83-servicio');
    const puntos = document.querySelectorAll('#c83-puntos');

    contenedor.addEventListener('mouseover', function() {
        contenedor.classList.add('background-white3');
        servicios.forEach(function(servicio) {
            servicio.classList.add('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.add('c83-puntos-blancos');
        });
    });

    contenedor.addEventListener('mouseout', function() {
        contenedor.classList.remove('background-white3');
        servicios.forEach(function(servicio) {
            servicio.classList.remove('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.remove('c83-puntos-blancos');
        });
    });
});