/*
// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultPrice = document.getElementById("resultPrice");
  resultPrice.textContent = `El precio cond escuento es: $${precioConDescuento}`;
}

// usar console.log con objeto.
// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

// Realizar Descuento y Cupon de Descuento.
*/

/*
const coupons = [
  "JuanDC_es_Batman",
  "pero_no_le_digas_a_nadie",
  "es_un_secreto",
];



  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}



const coupons = [
  {
      name: "JuanDC_es_Batman",
      discount: 15,
  },
  {
      name: "pero_no_le_digas_a_nadie",
      discount: 30,
  },
  {
      name: "es_un_secreto",
      discount: 25,
  },
];

const isCouponValueValid = function (coupon) {
  return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
  alert("El cupón " + userCouponValue + "no es válido");
}

if (!userCoupon) {
  alert("El cupón " + userCouponValue + "no es válido");
} else {
  const descuento = userCoupon.discount;
  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
*/

// function sumPorcentage(discount = 0, coupon = 0) {
//   const sumaDiscountCoupon = discount + coupon;
//   const porcentageDiscountCoupon = (100 - sumaDiscountCoupon) / 100;

//   return porcentageDiscountCoupon;
// }

// function arrayCoupon(descuento) {
//   const inputCoupon = document.getElementById("InputCoupon");
//   const couponValue = inputCoupon.value;

//   let descuento;

//   switch (couponValue) {
//     case coupons[0]: // "JuanDC_es_Batman"
//       descuento = 15;
//       break;
//     case coupons[1]: // "pero_no_le_digas_a_nadie"
//       descuento = 30;
//       break;
//     case coupons[2]: // "es_un_secreto"
//       descuento = 25;
//       break;
//   }
// }

/*
function arrayCoupon(descuentoCupon) {
  const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
  ];

  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  let descuentoCupon = 1;

  switch (couponValue) {
    case coupons[0]: // "JuanDC_es_Batman"
      descuentoCupon = (100 - 15) / 100; // 15%
      break;
    case coupons[1]: // "pero_no_le_digas_a_nadie"
      descuentoCupon = (100 - 30) / 100; // 30%
      break;
    case coupons[2]: // "es_un_secreto"
      descuentoCupon = (100 - 25) / 100; // 25%
      break;
    // default:
    //   descuentoCupon = 0;
    //   break;
  }
}
*/

function arrayCoupon() {
  const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
  ];

  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  let descuentoCupon; // modificar en vista

  switch (couponValue) {
    case coupons[0]: // "JuanDC_es_Batman"
      descuentoCupon = 15; // 15%
      break;
    case coupons[1]: // "pero_no_le_digas_a_nadie"
      descuentoCupon = 30; // 30%
      break;
    case coupons[2]: // "es_un_secreto"
      descuentoCupon = 25; // 25%
      break;
  }

  return descuentoCupon;
}

function sumPorcentage(discount = 0, coupon = 0) {
  const sumaDiscountCoupon = discount + coupon;
  const porcentageDiscountCoupon = (100 - sumaDiscountCoupon) / 100;

  return porcentageDiscountCoupon;
}

function onClickButtonPriceDiscountCoupon() {
  const resultPrice = document.getElementById("resultPrice");

  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = parseFloat(inputDiscount.value);

  // const inputCoupon = document.getElementById("inputCoupon");
  // const couponValue = inputCoupon.value;

  // let descuentoCupon; // modificar en vista

  // switch (couponValue) {
  //   case coupons[0]: // "JuanDC_es_Batman"
  //     descuentoCupon = 15; // 15%
  //     break;
  //   case coupons[1]: // "pero_no_le_digas_a_nadie"
  //     descuentoCupon = 30; // 30%
  //     break;
  //   case coupons[2]: // "es_un_secreto"
  //     descuentoCupon = 25; // 25%
  //     break;
  //   // default:
  //   //   descuentoCupon = 0;
  //   //   break;
  // }

  if (inputDiscount.value.length === 0 && inputCoupon.value.length === 0) {
    const resultPriceTotal = priceValue;
    return (resultPrice.textContent = "Precio Neto " + resultPriceTotal);
  } else if (inputDiscount.value.length === 0) {
    const resultPriceCouponValue = priceValue * sumPorcentage(arrayCoupon());
    return (resultPrice.textContent = "Cupon " + resultPriceCouponValue);
  } else if (inputCoupon.value.length === 0) {
    const resultPriceDiscountValue = priceValue * sumPorcentage(discountValue);
    return (resultPrice.textContent = "Descuento " + resultPriceDiscountValue);
  }

  const priceDiscount =
    priceValue * sumPorcentage(discountValue, arrayCoupon());

  resultPrice.textContent = "TOTAL CON TODO " + priceDiscount;
}
