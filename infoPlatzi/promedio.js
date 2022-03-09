/* Calcular el Promedio o la Media Aritmetica */

// const lista1 = [100, 200, 300, 500];

// let sumaList1 = 0;

// for (let i = 0; (let = i < lista1.length); i++) {
//   sumaList1 = sumaList1 + lista1[i];
//   console.log(sumaList1);
// }

// const primedioList1 = sumaList1 / lista1.length;
// console.log(primedioList1);

function promedio(lista) {
  // Alternativas al ciclo for
  // Ciclo for normal.
  //   let sumaLista = 0;

  //   for (let i = 0; (let = i < lista.length); i++) {
  //     sumaLista = sumaLista + lista[i];
  //   }

  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioList = sumaLista / lista.length;

  return promedioList;
}

// Alternativas de ciclo for
