/* Elementos del HTML */
const inputNumber = document.getElementById("numeroSerie");
const containerSerie = document.getElementById("serie");
const contenedorRespuesta = document.querySelector(".contenedor-respuesta");

const respuesta = document.createElement("h2");
contenedorRespuesta.appendChild(respuesta);

let sucesion = ''; // Variable para almacenar la serie

/* Función para calcular la serie */
const serie = (numero) => {
    if (numero === 0||numero===1) {
        return '0';
    }
    else {
        sucesion = '0 1'; // Inicializar la serie con los primeros dos términos
        
        for (let contador = 2; contador < numero; contador++) {
            let term = parseInt(sucesion.split(' ')[contador - 1]) + parseInt(sucesion.split(' ')[contador - 2]);
            sucesion += ' ' + term;
        }
        
        return sucesion;
    }
};

/* Función para validar el valor ingresado */
const validarSerie = () => {
    let numeroToSerie = inputNumber.value;
    let numeroParseado = parseFloat(numeroToSerie);

    if (isNaN(numeroParseado)) {
        containerSerie.textContent = "Por favor ingrese un número válido";
        console.error("Por favor ingrese un número válido");
    } else if (!Number.isInteger(numeroParseado)) {
        containerSerie.textContent = "Por favor ingrese un número entero, no se permiten decimales";
        console.error("Por favor ingrese un número entero, no se permiten decimales");
    } else {
        let resultado = serie(numeroParseado);
        respuesta.textContent = `Los primeros ${numeroParseado} términos de la serie:`
        containerSerie.textContent =  `${resultado}`;
        console.log(`${resultado}`);
    }
};

/* Añadir event listener para que cada vez que se ingrese un número, la función se actualice */
inputNumber.addEventListener("input", validarSerie);

/* Inicialización */
validarSerie();
