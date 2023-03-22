// 1. Comprender el propósito de la función.
// La función calcularCostoPagos calcula el costo de los pagos del mes, incluyendo una tarifa fija de $3 y una tarifa de interés del 0,1%.

// 2. Definir los datos que entran en la función desde la persona que llama (en forma de parámetros).
function calcularCostoPagos(montoPagos) {

    // 3. Definir qué variables de datos se necesitan dentro de la función para lograr su objetivo.
    const tarifaFija = 3;
    const tarifaInteres = 0.01;
    let costoTotal = 0;
  
    // 4. Decidir el conjunto de pasos que utilizará el programa para lograr este objetivo (el algoritmo).
    costoTotal = montoPagos * (1 + tarifaInteres) + tarifaFija;
  
    return costoTotal;
  }
  
  // Asignar el botón a una variable
  const btnCalcular = document.getElementById("btnCalcular");
  
  // Agregar un escuchador de eventos clic para el botón
  btnCalcular.addEventListener("click", function () {
    // Obtener el valor del monto de los pagos
    const montoPagos = parseFloat(document.getElementById("montoPagos").value);
  
    // Calcular el costo de los pagos y mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "El costo de los pagos es: $" + calcularCostoPagos(montoPagos);
  });
  