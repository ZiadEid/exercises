// let familyMember = "Abeen";

// switch (familyMember) {
//   case "Aya":
//     console.log("Wife");
//     break;
//   case "Salma":
//     console.log("Second Child");
//     break;
//   case "Farha":
//     console.log("Third Child");
//     break;
//   case "Huda":
//     console.log("Forth Child");
//     break;
//   case "Yathreb":
//     console.log("Fifth Child");
//     break;
//   case "Yaseen":
//     console.log("Sixth Child");
//     break;
//   case "Neamat":
//     console.log("Mother");
//     break;
//   case "Abdeen":
//     console.log("Father");
//     break;
//   default:
//     console.log("Not From Our Family")
// }

// let familyRank = 11;
// switch (familyRank) {
//   case 55:
//     console.log("Father")
//     break;
//   case 45:
//     console.log("Mother")
//     break;
//   case 24:
//     console.log("Elder Child")
//     break;
//   case 21:
//     console.log("Second Child")
//     break;
//   case 14:
//     console.log("Third Child")
//     break;
//   case 11:
//     console.log("Littel One")
//     break;
//   default:
//     console.log("Mn3rfo4")
// }

// let theGang = "";
// for (let i = 0; i < 8; i += 1) {
//   theGang += "4bab Tanta  "
// }
// console.log(theGang);

// let headers = "";
// for (let i = 0; i < 10; i += 1) {
//   headers = headers +
//     `
//       <div class="col-md-3">
//             <img class="w-100" src="imgs/one.jpg" alt="personal photo" />
//             <h4 class="pt-2 fw-bold">Ahmed Ali</h4>
//             <button class="btn btn-info">hello</button>
//           </div>
//     `
// }
// document.getElementById("demo").innerHTML = headers;


// function orgSystem(price, profit, adds, discount) {
//   let result = price + profit;
//   result += adds;
//   result += (result * 0.1);
//   result -= discount;
//   console.log(result);
// }
// orgSystem(100, 20, 10, 50);

// function dude(x, y) {
//   let result = x + y;
//   result /= 2;
//   return result ;
// }
// let x = dude(10, 20)
// console.log(x);

var firstNameInput = document.getElementById("awelName");
var lastNameInput = document.getElementById("a5erName");
function sayHello() {
  var fullName = firstNameInput.value + " " + lastNameInput.value;
  document.getElementById("demoo").innerHTML = fullName;
}



var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productDescription = document.getElementById('productDescription');
var products;
if (localStorage.getItem("allProducts") === null) {
  products = [];
}
else {
  products = JSON.parse(localStorage.getItem('allProducts'));
  displayProduct(products);
}
function addProduct() {
  // if (document.getElementById("submitInput").value === "Add Product") {
  var product = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    description: productDescription.value
  }
  products.push(product);
  localStorage.setItem("allProducts", JSON.stringify(products));
  displayProduct(products);
  clearInput();

  // else {
  //   localStorage.getItem("allProducts", JSON.parse(products));
  //   var product = {
  //     name: productName.value,
  //     price: productPrice.value,
  //     category: productCategory.value,
  //     description: productDescription.value
  //   }
  // }

}
function displayProduct(anyArray) {
  var productsContainer = "";
  for (var i = 0; i < anyArray.length; i++) {
    productsContainer += `<tr>
      <td>${i + 1}</td>
      <td>${anyArray[i].name}</td>
      <td>${anyArray[i].price}</td>
      <td>${anyArray[i].category}</td>
      <td>${anyArray[i].description}</td>
      <td><button 
      class="btn btn-warning"
      onclick="updateProduct(${i},${i});"
      >update</button></td>
      <td><button
      class="btn btn-danger"
      onclick="deletProduct(${i});"
      >delet</button></td>
    </tr>`
  }
  document.getElementById('tableBody').innerHTML = productsContainer;
}
function clearInput() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
}
function deletProduct(productIndex) {
  products.splice(productIndex, 1);
  localStorage.setItem("allProducts", JSON.stringify(products));
  displayProduct(products);
}
function userSearch(trem) {
  var searchProducts = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(trem.toLowerCase()) == true) {
      searchProducts.push(products[i]);
    }
  }
  displayProduct(searchProducts);
}
function updateProduct(index, productIndex) {
  productName.value = products[index].name;
  productPrice.value = products[index].price;
  productCategory.value = products[index].category;
  productDescription.value = products[index].description;
  document.getElementById("submitInput").value = "Update Product";
}

// var x = /^/;


document.body.addEventListener('click', function () {
  var r = Math.floor(Math.random() * 225);
  var g = Math.floor(Math.random() * 225);
  var b = Math.floor(Math.random() * 225);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})

// document.body.style.cursor = "none";
// document.addEventListener("mousemove", function(e) {
//   document.getElementById("demoo").style.left = `${e.clientX}px`;
//   document.getElementById("demoo").style.top = `${e.clientY}px`;
// })