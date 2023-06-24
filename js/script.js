// Business Logic
class Pizza {
    constructor(size, cheese, meat, topOne, topTwo) {
        this.size = size;
        this.cheese = cheese;
        this.meat = meat;
        this.topOne = topOne;
        this.topTwo = topTwo;
        this.price = 7;
    }

    priceTester(size, cheese, meat, topOne, topTwo) {
        if (size === "small") {
            this.price += 1;
        } else if (size === "medium") {
            this.price += 3;
        } else {
            this.price += 5;
        }
        if (cheese === "Mozzerella") {
            this.price += 1;
        } else if (cheese === "Cheddar") {
            this.price += 2;
        } else {
            cheese = "None";
            this.price += 0;
        }
        if (meat === "Pepperoni") {
            this.price += 2;
        } else if (meat === "Sausage") {
            this.price += 3;
        } else {
            meat = "None";
            this.price += 0;
        }
        if (topOne === "Pineapple") {
            this.price += 1;
        } else if (topOne === "Tomato") {
            this.price += 1;
        } else {
            topOne = "None";
            this.price += 0;
        }
        if (topTwo === "Olive") {
            this.price += 2;
        } else if (topTwo === "Pepper") {
            this.price += 1;
        } else {
            topTwo = "None";
            this.price += 0;
        }
    }
}

let totalPrice = 0;

function priceTotal(newPizza) {
    totalPrice += newPizza.price;
}

let pizzaCount = 0;

function pizzaCountNumber() {
    pizzaCount += 1;
}

// UI Logic
function uiDivGenerator(newPizza) {
    let body = document.getElementById("pizzas");
    let div = document.createElement("div");
    div.className = "pizzaDiv";
    let sizeP = document.createElement("p");
    sizeP.innerText = "Size: " + newPizza.size;
    sizeP.className = "size";
    div.appendChild(sizeP);
    let cheeseP = document.createElement("p");
    cheeseP.innerText = "Cheese: " + newPizza.cheese;
    cheeseP.className = "cheese";
    div.appendChild(cheeseP);
    let meatP = document.createElement("p");
    meatP.innerText = "Meat: " + newPizza.meat;
    meatP.className = "meat";
    div.appendChild(meatP);
    let toppingOneP = document.createElement("p");
    toppingOneP.innerText = "Topping 1: " + newPizza.topOne;
    div.appendChild(toppingOneP);
    let toppingTwoP = document.createElement("p");
    toppingTwoP.innerText = "Topping 2: " + newPizza.topTwo;
    div.appendChild(toppingTwoP);
    let priceP = document.createElement("p");
    priceP.innerText = "Price: $" + newPizza.price;
    priceP.className = "price";
    div.appendChild(priceP);
    body.appendChild(div);
    priceCountDisplay();
}

function priceCountDisplay() {
    let appearanceP = document.getElementById("appearanceP");
    appearanceP.innerText = "";
    let totalPriceP = document.getElementById("priceP");
    totalPriceP.innerText = "$" + totalPrice;
    let totalPizza = document.getElementById("numberP");
    totalPizza.innerText = pizzaCount;
}

function grabValue(event) {
    event.preventDefault();
    let size = document.getElementById("size").value;
    let cheese = document.getElementById("cheese").value;
    let meat = document.getElementById("meat").value;
    let topOne = document.getElementById("topOne").value;
    let topTwo = document.getElementById("topTwo").value;
    let newPizza = new Pizza(size, cheese, meat, topOne, topTwo);
    newPizza.priceTester(size, cheese, meat, topOne, topTwo);
    priceTotal(newPizza);
    pizzaCountNumber();
    uiDivGenerator(newPizza);
}

function showBuilder() {
    console.log(true);
    let builderBackground = document.getElementById("builder");
    builderBackground.style.top = "10vh";
}

window.onload = function () {
    let form = document.getElementById("pizzaForm");
    form.addEventListener("submit", grabValue);
    let showBuilderButton = document.getElementById("showBuilder");
    showBuilderButton.addEventListener("click", showBuilder);
};