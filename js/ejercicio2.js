// Part 1 - Saludo a amigos
const btnGreet = document.getElementById('btnGreet');
btnGreet.addEventListener('click', function() {
  const name1 = document.getElementById('txtName1').value;
  const name2 = document.getElementById('txtName2').value;
  const name3 = document.getElementById('txtName3').value;
  console.log(`Bienvenidos ${name1}, ${name2} y ${name3}!`);
});

// Part 2 - Cálculo de edad
const btnAge = document.getElementById('btnAge');
btnAge.addEventListener('click', function() {
  const year = document.getElementById('txtYear').value;
  const age = new Date().getFullYear() - year;
  const resultado = document.getElementById('resultado');
  resultado.textContent = `Tienes ${age} años.`;
});

// Part 3 - Saludo y edad de amigos
const btnGreetAge = document.getElementById('btnGreetAge');
btnGreetAge.addEventListener('click', function() {
  const name1 = document.getElementById('txtName4').value;
  const age1 = document.getElementById('txtAge1').value;
  const name2 = document.getElementById('txtName5').value;
  const age2 = document.getElementById('txtAge2').value;
  const name3 = document.getElementById('txtName6').value;
  const age3 = document.getElementById('txtAge3').value;
  console.log(`Bienvenido ${name1}, tienes ${age1} años.`);
  console.log(`Bienvenido ${name2}, tienes ${age2} años.`);
  console.log(`Bienvenido ${name3}, tienes ${age3} años.`);
});

// Challenge - Rubrica de calificación
const btnGrade = document.getElementById('btnGrade');
btnGrade.addEventListener('click', function() {
  const score = document.getElementById('txtScore').value;
  const gradeResult = document.getElementById('gradeResult');
  if (score >= 5) {
    let message = 'Aprobado';
    if (score > 8) {
      message = 'Excelente';
    }
    if (score == 11) {
      message = 'Perfecto';
    }
    gradeResult.textContent = `${message} con una puntuación de ${score}/11.`;
  } else {
    gradeResult.textContent = `Reprobado con una puntuación de ${score}/11.`;
  }
});
