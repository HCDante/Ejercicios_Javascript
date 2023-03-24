// Imprime un mensaje en la consola
console.log("Calculadora de edad");

// Obtiene el elemento HTML con el id "txtData" y lo guarda en la variable data
let data = document.getElementById("txtData");

// Obtiene el elemento HTML con el id "btnCalcular" y lo guarda en la variable btnCalcular
let btnCalcular = document.getElementById("btnCalcular");

// Obtiene el elemento HTML con el id "resultado" y lo guarda en la variable resultado
let resultado = document.getElementById("resultado");

// Agrega un "escuchador" de eventos al botón "btnCalcular"
btnCalcular.addEventListener("click", function(event){
    // Previene el comportamiento predeterminado del botón (enviar el formulario)
    event.preventDefault();
    // Imprime la fecha de nacimiento en la consola
    console.log(data.value);
    // Muestra el resultado de la edad en la página web
    let msg="";
    if (calculateAge(data.value)>18) {
        msg="<strong>¡Bienvenide!</strong>"
    }   else {
        msg="<strong>Gracias por participar... :c</strong>"
    } //Condicional
    resultado.innerHTML = msg;
});

// Define la función "calculateAge" que toma como argumento el año de nacimiento
function calculateAge (yearOfBirth){
    // Crea una nueva instancia de la clase "Date"
    let d = new Date();
    // Obtiene el año actual
    let currentYear = d.getFullYear();
    // Calcula la edad restando el año de nacimiento del año actual
    return currentYear-yearOfBirth;
}

// Define la función "calculateAge1" que toma como argumentos el año, mes y día de nacimiento
function calculateAge1 (yearOfBirth, month, day){
    // Crea una nueva instancia de la clase "Date" y la guarda en la variable "d"
    let d = new Date();
    // Crea una nueva instancia de la clase "Date" con la fecha de nacimiento y la guarda en la variable "birth"
    let birth= new Date(yearOfBirth, month-1, day);
    // Crea una nueva instancia de la clase "Date" y la guarda en la variable "age"
    let age= new Date();
    // Calcula la edad restando la fecha de nacimiento de la fecha actual
    age-SVGFEDistantLightElement(d.getTime()-birth.getTime());
    // Devuelve la edad
    return age;
}
