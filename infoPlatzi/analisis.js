// Helpers Function
function isPar(num) {
  return num % 2 === 0;
}

function promedio(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioList = sumaLista / lista.length;

  return promedioList;
}

// Calculadora de mediana
function medianaSalaryCol(list) {
  const mid = parseInt(list.length / 2);

  if (isPar(list.length)) {
    const personMidOne = list[mid - 1];
    const personMidTwo = list[mid];

    const mediana = promedio([personMidOne, personMidTwo]);
    return mediana;
  } else {
    const personMid = list[mid];
    return personMid;
  }
}

// Mid General
const salaryCol = colombia.map(function (persona) {
  return persona.salary;
});

const salaryColSorted = salaryCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const midGeneralCol = medianaSalaryCol(salaryColSorted);

// =============== Calcular Top 10% Salarios ===========

// Mediana del TOP 10%
const spliceStart = (salaryColSorted.length * (100 - 10)) / 100;
const spliceCount = salaryColSorted.length - spliceStart;

// .splice(valor1,valor2): el valor uno es desde que posicion se coloca en el array y el segundo valor es apartir de donde este posicionado en el array cuantas posiciones toma de ahi en adelante.
const salaryColTop10 = salaryColSorted.splice(spliceStart, spliceCount);

const midTop10Col = medianaSalaryCol(salaryColTop10);

console.log({
  midGeneralCol,
  midTop10Col,
});
