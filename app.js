/* Elementos del HTML */
const inputNumber = document.getElementById("numeroFactorial");
const containerFactorial = document.getElementById("factorial");
const contenedorRespuesta = document.querySelector(".contenedor-respuesta");

const respuesta = document.createElement("h2");
contenedorRespuesta.appendChild(respuesta)

/* Función para calcular el factorial */
const factorial = (numero) => {
    if (numero === 0) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
};

/* Función para validar el valor ingresado */
const validarFactorial = () => {
    let numeroToFactorial = inputNumber.value;
    let numeroParseado = parseFloat(numeroToFactorial);

    if (isNaN(numeroParseado)) {
        containerFactorial.textContent = "Por favor ingrese un número válido";
        console.error("Por favor ingrese un número válido");
    } else if (!Number.isInteger(numeroParseado)) {
        containerFactorial.textContent = "Por favor ingrese un número entero, no se permiten decimales";
        console.error("Por favor ingrese un número entero, no se permiten decimales");
    } else {
        let resultado = factorial(numeroParseado);
        respuesta.textContent = `El factorial de ${numeroParseado} es:`
        containerFactorial.textContent =  `${resultado}`;
        console.log(`El factorial de ${numeroParseado} es: ${resultado}`);
    }
};

/* Añadir event listener para que cada vez que se ingrese un número, la función se actualice */
inputNumber.addEventListener("input", validarFactorial);

/* Inicialización */
validarFactorial();
