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
