//let cont=0;
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