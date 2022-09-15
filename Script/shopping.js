let cart = document.querySelectorAll(".cart-check");

let products = [
    {
        name: "transmition",
        tag: "geartransmition",
        price: 80,
        inCart: 0
    },
    {
        name: "sapr",
        tag: "gearspar",
        price: 90,
        inCart: 0
    },
    {
        name: "bavel",
        tag: "gearbavel",
        price: 50,
        inCart: 0
    },
];

for(let i=0; i<cart.length; i++){
    cart[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart-icon span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    
    let productNumbers = localStorage.getItem('cartNumbers');
    

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-icon span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-icon span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else{
        products.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    //console.log("the product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else{
        localStorage.setItem("totalCost", product.price);
    }
     
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");

    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img class="cross-img" src="cross.png">
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}M/span>
            </div>
            <div class="list-price">${item.price}</div>
            <div class="list-quantity">
            `
        });
    }
}

onLoadCartNumbers();
displayCart();