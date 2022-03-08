function formulaIngresos(salario, ingresosExtras) {
  const ingresos = salario + ingresosExtras;
  return ingresos;
}

function formulaEgresos(arriendo, servicios, mercado, hobbie) {
  const egresos = arriendo + servicios + mercado + hobbie;
  return egresos;
}

function calcularIngresosEgresos() {
  const salarioMensual = document.getElementById("salarioMensual");
  const inputSalario = parseFloat(salarioMensual.value);

  const ingresosExtras = document.getElementById("ingresosExtras");
  const inputExtras = parseFloat(ingresosExtras.value);

  const arriendo = document.getElementById("arriendo");
  const inputArriendo = parseFloat(arriendo.value);

  const servicios = document.getElementById("servicios");
  const inputServicios = parseFloat(servicios.value);

  const mercado = document.getElementById("mercado");
  const inputMercado = parseFloat(mercado.value);

  const otros = document.getElementById("otros");
  const inputOtros = parseFloat(otros.value);

  const introducirIngresos = formulaIngresos(inputSalario, inputExtras);

  const introducirEgresos = formulaEgresos(
    inputArriendo,
    inputServicios,
    inputMercado,
    inputOtros
  );

  const calculoIngresosEgresos = introducirIngresos - introducirEgresos;

  box.innerHTML = `
  Tienes un Ingreso mensual de: $${introducirIngresos}<br/>
  Tienes un Egreso mensual de: $${introducirEgresos}<br/>
  Saldo Total es: $${calculoIngresosEgresos}`;
}
