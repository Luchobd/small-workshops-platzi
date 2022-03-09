/* Calcular la Mediana */

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function promedio(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioList = sumaLista / lista.length;

  return promedioList;
}

function calcularMediana() {
  const lista1 = [10, 2000, 50, 4];
  // Utilizando esta funcion podemos ordenar los numeros de menor a mayor de forma correcta
  lista1.sort(function (a, b) {
    return a - b;
  });
  console.log(lista1);

  const mitadLista1 = parseInt(lista1.length / 2);

  let mediana;

  if (esPar(lista1.length)) {
    // Necesitamos dos elementos
    // 1. El promedio
    // 2. Mediana
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = promedio([elemento1, elemento2]);

    mediana = promedioElemento1y2;
  } else {
    // posicion mitadLista1 dentro de lista1
    // mediana
    mediana = lista1[mitadLista1];
  }
  return mediana;
}

// realizar function calcular mediana
// ordenar la lista de array "utilizando el metodo sort"

// const lista1 = [10, 2000, 50, 4];
// lista1.sort();
// document.write(lista1);
