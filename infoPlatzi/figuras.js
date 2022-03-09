// Código del cuadrado
// console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
//console.log("El perimetro cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
//console.groupEnd();
/*
// Código del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//   `Lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`
// );

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El área del triangulo es: " + areaTriangulo + "cm2");
console.groupEnd();
/*
// Código del Circulo
console.group("Circulo");
// const radio = 4;
function diametroCirculo(radio) {
  return radio * 2;
}
// const PI = Math.PI;

// console.log(
//   `Radio y Diametro del Circulo miden: ${radio}cm, ${diametro}cm, ${PI}cm`
// );

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * Math.PI;
}
// console.log("El perimetro del Circulo es: " + perimetroCirculo + "cm");

function areaCirculo(radio) {
  return Math.PI * (radio * radio);
}
// console.log("El área del triangulo es: " + areaCirculo + "cm2");
console.groupEnd();
*/
// Integrar JS con el HTML

// function perimetroCuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

// function areaCuadrado

function areaCuadrado(lado) {
  return lado * lado;
}

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);

  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);

  alert(area);
}

/*
Durante este taller aprendimos a calcular el área y perímetro de un triángulo conociendo la longitud de sus 3 lados y también su altura.

En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

- La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.

- La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.

- La función debe retornar la altura del triángulo.

Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.

/*
function alturaTrianguloIsosceles(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 !== base) {
    return Math.sqrt(lado1 * lado2 - (base * base) / 4);
  } else {
    return "No es un triangulo Isósceles";
  }
}

console.log(alturaTrianguloIsosceles(3, 3, 2)); // Triangulo Isosceles
console.log(alturaTrianguloIsosceles(3, 5, 2)); // No es un Triangulo Isoscels

/* La altura (h) del triángulo isósceles se puede calcular a partir del teorema de Pitágoras. */

/* Definicion de un Triangulo Isósceles: En geometría, un triángulo isósceles es un tipo de triángulo que tiene, al menos, dos lados de igual longitud. Al ángulo formado por los lados de igual longitud se le denomina ángulo en el vértice y al lado opuesto a él, ángulo base.​*/
