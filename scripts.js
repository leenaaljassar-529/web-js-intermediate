let number = 0;
function cartnumber() {
  number++;
  let number = (document.getElementById("cartnumber").innerText = number);
}
let price = "0.75 KD";
function addtocart() {
  let cart1 = document.getElementById("addcart1").innerHTML;

  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart1 + "</li>" + price;
}
function addtocart2() {
  let cart2 = document.getElementById("addcart2").innerHTML;
  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart2 + "</li>" + price;
}
function addtocart3() {
  let cart3 = document.getElementById("addcart3").innerHTML;
  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart3 + "</li>" + price;
}
function addtocart4() {
  let cart4 = document.getElementById("addcart4").innerHTML;
  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart4 + "</li>" + price;
}
function addtocart5() {
  let cart5 = document.getElementById("addcart5").innerHTML;
  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart5 + "</li>" + price;
}
function addtocart6() {
  let cart6 = document.getElementById("addcart6").innerHTML;

  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart6 + "</li>" + price;
}

let price2 = "0.5 KD";
function addtocart7() {
  let cart7 = document.getElementById("addcart7").innerHTML;

  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart1 + "</li>" + price2;
}
function addtocart8() {
  let cart8 = document.getElementById("addcart8").innerHTML;
  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart8 + "</li>" + price2;
}
function addtocart9() {
  let cart9 = document.getElementById("addcart9").innerHTML;
  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart9 + "</li>" + price2;
}
function addtocart10() {
  let cart10 = document.getElementById("addcart10").innerHTML;
  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart10 + "</li>" + price2;
}
function addtocart11() {
  let cart11 = document.getElementById("addcart11").innerHTML;
  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart11 + "</li>" + price2;
}
function addtocart12() {
  let cart12 = document.getElementById("addcart12").innerHTML;

  document.getElementById("itemslist").innerHTML +=
    "<li>" + cart12 + "</li>" + price2;
}

// let counter = 1;

// function totalprice() {
//   document.getElementById("total").innerHTML = "Total = " + price * counter;
// }
// totalprice();

// let shopitems = [
//   "Blue thread",
//   "Brown thread",
//   "Green thread",
//   "Yellow thread",
//   "Purple thread",
//   "Orange thread",
// ];

// let price = "0.75 KD";

// function testingcart() {}
