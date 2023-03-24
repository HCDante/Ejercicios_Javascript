let dia = document.getElementById("txtDia");
let hora = document.getElementById("txtHora");
let btnCalcular = document.getElementById("btnCalcular");
let resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function(event){
    event.preventDefault();
    let day = parseInt(dia.value);
    let hour = parseInt(hora.value);
    let message;

    if (dat==0) {
        message="Es fin de semana";
    }  else if(day==6) {
        message ="Es fin de semana";
    }  else {
        message="Es un día hábil";
    }

    if (day==0) {
        message="Es fin de semana";
    }  else if (day ==6) {
        message="Es fin de semana";
    }  else {
        message="Es un día hábil";
    }

    resultado.innerHTML=message;

})

function businessHours(dayNumber, hourNumber){
    let res;e
    if (day==0) {
        res=false;
    } else if (day==6) {
        res=false;
    } else {
        res=true;
    }

    if (hour<9) {
        res=false;
    } else if (hour>18) {
        res=false;
    } else {
        res=true;
    }
}

