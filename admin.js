function loadProducts(){

let products=JSON.parse(localStorage.getItem("products")) || [];

let list=document.getElementById("product-list");

list.innerHTML="";

products.forEach((p,i)=>{

list.innerHTML+=`
<div>

<img src="${p.image}" width="60">

<h3>${p.name}</h3>

<p>₦${p.price}</p>

<button onclick="deleteProduct(${i})">Delete</button>

</div>
`;

});

}

function addProduct(){

let name=document.getElementById("name").value;

let price=document.getElementById("price").value;

let image=document.getElementById("image").value;

let products=JSON.parse(localStorage.getItem("products")) || [];

products.push({name,price,image});

localStorage.setItem("products",JSON.stringify(products));

loadProducts();

}

function deleteProduct(i){

let products=JSON.parse(localStorage.getItem("products"));

products.splice(i,1);

localStorage.setItem("products",JSON.stringify(products));

loadProducts();

}