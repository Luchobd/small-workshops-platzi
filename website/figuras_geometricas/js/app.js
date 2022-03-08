const areaPerimetro1 = document.getElementById("areaPerimetro1");
const areaPerimetro2 = document.getElementById("areaPerimetro2");
const areaPerimetro3 = document.getElementById("areaPerimetro3");
const areaPerimetro4 = document.getElementById("areaPerimetro4");
const areaPerimetro5 = document.getElementById("areaPerimetro5");

// Calculo de Perimetro y Area del Cuadrado y Rectangulo
function perimetroRectangulo(lado1, lado2) {
  return lado1 + lado2 + lado1 + lado2;
}

function areaRectangulo(lado1, lado2) {
  return lado1 * lado2;
}

function calcularPerimetroRectangulo() {
  const inputBase = document.getElementById("inputBaseRectangulo");
  const inputAltura = document.getElementById("inputAlturaRectangulo");

  const base = parseInt(inputBase.value);
  const altura = parseInt(inputAltura.value);

  const perimetro = perimetroRectangulo(base, altura);

  areaPerimetro1.textContent = `El Périmetro es: ${perimetro}cm`;
}

function calcularAreaRectangulo() {
  const inputBase = document.getElementById("inputBaseRectangulo");
  const inputAltura = document.getElementById("inputAlturaRectangulo");

  const base = parseFloat(inputBase.value);
  const altura = parseFloat(inputAltura.value);

  const area = areaRectangulo(base, altura);

  areaPerimetro1.textContent = `El Área es: ${area}cm²`;
}

// Calculo de Perimetro y Area del Circulo
function perimetroCirculo(radio) {
  const perimetoCalc = 2 * Math.PI * radio;
  return perimetoCalc.toFixed(3);
}

function areaCirculo(radio) {
  const radioCalc = Math.PI * (radio * radio);
  return radioCalc.toFixed(3);
}

function calcularPerimetroCirculo() {
  const inputRadioCirculo = document.getElementById("inputRadioCirculo");

  const radioCirculo = parseFloat(inputRadioCirculo.value);

  const perimetro = perimetroCirculo(radioCirculo);

  areaPerimetro2.textContent = `El Périmetro es: ${perimetro}cm`;
}

function calcularAreaCirculo() {
  const inputRadioCirculo = document.getElementById("inputRadioCirculo");

  const radioCirculo = parseFloat(inputRadioCirculo.value);

  const area = areaCirculo(radioCirculo);

  areaPerimetro2.textContent = `El Área es: ${area}cm²`;
}

// Calculo de Perimetro del Triangulo
function perimetroTriangulo(lado, base) {
  return lado * 2 + base;
}

function calcularPerimetroTriangulo() {
  const inputBaseTrianguloPerimetro = document.getElementById(
    "inputBaseTrianguloPerimetro"
  );
  const inputPataTriangulo = document.getElementById("inputPataTriangulo");

  const inputBase = parseFloat(inputBaseTrianguloPerimetro.value);
  const inputPata = parseFloat(inputPataTriangulo.value);

  const perimetro = perimetroTriangulo(inputBase, inputPata);

  areaPerimetro3.textContent = `El Périmetro es: ${perimetro}cm`;
}

// Calculo del Area del Triangulo
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaTriangulo() {
  const inputBaseTriangulo = document.getElementById("inputBaseTriangulo");
  const inputAlturaTriangulo = document.getElementById("inputAlturaTriangulo");

  const inputBase = parseFloat(inputBaseTriangulo.value);
  const inputAltura = parseFloat(inputAlturaTriangulo.value);

  const area = areaTriangulo(inputBase, inputAltura);

  areaPerimetro4.textContent = `El Área es: ${area}cm²`;
}

// Calculo Altura del Triangulo
function alturaTriangulo(base, lado) {
  const alturaCalc = Math.sqrt(lado * lado - (base * base) / 4);
  return alturaCalc.toFixed(3);
}

function calcularAlturaTriangulo() {
  const inputBaseTriangle = document.getElementById("inputBaseTriangle");
  const inputPataTriangle = document.getElementById("inputPataTriangle");

  const inputBase = parseFloat(inputBaseTriangle.value);
  const inputPata = parseFloat(inputPataTriangle.value);

  const altura = alturaTriangulo(inputBase, inputPata);

  areaPerimetro5.textContent = `La Altura es: ${altura}cm`;
}
