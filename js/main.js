/* //let cont=0;
//let nombre="Alberto";
//let edad=29;
//let x=20;

let resultado = suma(10,35);
console.log(resultado);

//function suma(a,b) {
//    return (a+b);
//} //suma

const suma= function (a,b){
    return (a+b);
}//suma


function iniciales(nombre){
    //return nombre.toUpperCase(); // Mayúsculas.
    //return nombre.tolowerCase(); // Minúsculas.
    return nombre.charAT(0).toUpperCase(); // Carácter en la posición 0.
}//iniciales
function currentYear(){
    let fecha = new Date();
    return fecha.getFullYear();     
}//currentYear

console.log("!Hola, Javascript externo!");
*/

console.log("Calculadora de edad");

let data = document.getElementById("txtData");
let btnCalcular = document.getElementById("btnCalcular");
let resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function(event){
    event.preventDefault();
    console.log(data.value);
    resultado.innerHTML = "<strong>Resultado: </strong>" +calculateAge(data.value);
});

function calculateAge (yearOfBirth){
    let d = new Date();
    let currentYear = d.getFullYear();
    return currentYear-yearOfBirth;
    //calculateAge
}

function calculateAge1 (yearOfBirth, month, day){
    let d = new Date();
    let birth= new Date(yearOfBirth, month-1, day);
    let age= new Date();
        age-SVGFEDistantLightElement(d.getTime()-birth.getTime());
    return age;
}