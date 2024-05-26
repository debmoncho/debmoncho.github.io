var imagenes = ['Img/sli1.jpg', 'Img/sli2.jpg', 'Img/sli3.jpg', 'Img/sli4.jpg', 'Img/sli5.jpg'];

document.addEventListener("DOMContentLoaded", (event) => {
    let cont = 0;
    const atras = document.querySelector('.atrasBotones img');
    const siguiente = document.querySelector('.siguienteBotones img');
    const img = document.querySelector('#imagenes');
    const indicadores = document.querySelector('.indicadores');

    // Crear los indicadores
    imagenes.forEach((_, index) => {
        const circulo = document.createElement('div');
        circulo.classList.add('circulo');
        if (index === 0) {
            circulo.classList.add('activo');
        }
        circulo.addEventListener('click', () => {
            cont = index;
            actualizarCarrusel();
        });
        indicadores.appendChild(circulo);
    });

    const actualizarCarrusel = () => {
        img.src = imagenes[cont];
        document.querySelector('.indicadores .activo').classList.remove('activo');
        indicadores.children[cont].classList.add('activo');
    };

    atras.addEventListener('click', () => {
        if (cont > 0) {
            cont--;
        } else {
            cont = imagenes.length - 1;
        }
        actualizarCarrusel();
    });

    siguiente.addEventListener('click', () => {
        if (cont < imagenes.length - 1) {
            cont++;
        } else {
            cont = 0;
        }
        actualizarCarrusel();
    });

    // Desplazamiento automático del carrusel
    setInterval(() => {
        cont = (cont + 1) % imagenes.length;
        actualizarCarrusel();
    }, 3000); // tiempo de actualizacion del carrousel
});