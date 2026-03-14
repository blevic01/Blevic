function addCart(name,price,image){

let cart=JSON.parse(localStorage.getItem("cart")) || [];

cart.push({name,price,image});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}