//Business Logic
class pizza {
    constructor(cheese,meat,topOne,topTwo,price) {
        this.cheese = cheese;
        this.meat = meat;
        this.topOne = topOne;
        this.topTwo = topTwo;
        this.price = price;
    }
}


function priceTester(cheese, meat, topOne, topTwo,price) {
    if (cheese === "Mozzerella") {
        price += 1;
    }
    else if (cheese === "Cheddar") {
        price += 2;
    }
    else {
        cheese = "None";
        price += 0;
    }
    if (meat === "Pepperroni") {
        price += 2;
    }
    else if (meat === "Sausage") {
        price += 3;
    }
    else {
        meat = "None";
        price += 0;
    }
    if (topOne === "Pineapple") {
        price += 1;
    }
    else if (topOne === "Tomato") {
        price += 1;
    }
    else {
        topOne = "None";
        price += 0;
    }
    if (topTwo === "Olive") {
        price += 2;
    }
    else if (topTwo === "Pepper") {
        price += 1;
    }
    else {
        topTwo = "None";
        price += 0;
    }
    let newPizza = new pizza(cheese,meat,topOne,topTwo,price);
    priceTotal(newPizza);
    pizzaCountNumber();
    uiDivGenerator(newPizza);
}

let totalPrice = 0;

function priceTotal(newPizza) {
    totalPrice += newPizza.price;
}
let pizzaCount = 0;

function pizzaCountNumber() {
    pizzaCount += 1;
}

//UI Logic
function uiDivGenerator (newPizza) {
    let body = document.getElementById("pizzas");
    let div = document.createElement("div");
    div.className = "pizzaDiv";
    let cheeseP = document.createElement("p");
    cheeseP.innerText = "Cheese: " + newPizza.cheese;
    cheeseP.className = "cheese";
    div.appendChild(cheeseP);
    let meatP = document.createElement("p");
    meatP.innerText = "Meat: " + newPizza.meat;
    meatP.className = "meat"
    div.appendChild(meatP);
    let toppingOneP = document.createElement("p");
    toppingOneP.innerText = "Topping 1: " + newPizza.topOne;
    div.appendChild(toppingOneP);
    let toppingTwoP = document.createElement("p");
    toppingTwoP.innerText = "Topping 2: " + newPizza.topTwo;
    div.appendChild(toppingTwoP);
    let priceP = document.createElement("p");
    priceP.innerText = "Price: $" + newPizza.price;
    priceP.className = "price"
    div.appendChild(priceP);
    let appearanceP = document.getElementById("appearanceP");
    let totalPriceP = document.getElementById("priceP");
    totalPriceP.innerText ="$" + totalPrice;
    let totalPizza = document.getElementById("numberP");
    totalPizza.innerText = pizzaCount;
//---------------------------------------------------------------------------------
    




    appearanceP.innerText = "";
    body.appendChild(div);
}

function grabValue (event) {
    event.preventDefault();
    let cheese = document.getElementById("cheese").value;
    let meat = document.getElementById("meat").value;
    let topOne = document.getElementById("topOne").value;
    let topTwo = document.getElementById("topTwo").value;
    let price = 10;
    priceTester(cheese,meat,topOne,topTwo,price);
}

function showBuilder() {
    console.log(true)
    let builderBackground = document.getElementById("builder");
    builderBackground.style.top = "10vh"; 
}

window.onload = function () {
    let form = document.getElementById("pizzaForm");
    form.addEventListener("submit", grabValue);
    let showBuilderButton = document.getElementById("showBuilder");
    showBuilderButton.addEventListener("click", showBuilder)
}