function loadCart(){

let cart=JSON.parse(localStorage.getItem("cart")) || [];

let container=document.getElementById("cart-container");

let total=0;

cart.forEach(item=>{

total+=item.price;

container.innerHTML+=`
<p>${item.name} ₦${item.price}</p>
`;

});

document.getElementById("total").innerText=total;

}