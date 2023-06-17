class pizza {
    constructor(cheese,meat,topOne,topTwo) {
        this.cheese = cheese;
        this.meat = meat;
        this.topOne = topOne;
        this.topTwo = topTwo;
    }
}


function priceTester(cheese, meat, topOne, topTwo) {
    let price = 10;
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
    let newPizza = new pizza(cheese,meat,topOne,topTwo);
}

function uiDivGenerator (newPizza) {
    let div = document.createElement("div") 
}






























function grabValue (event) {
    event.preventDefault();
    let cheese = document.getElementById("cheese").value;
    let meat = document.getElementById("meat").value;
    let topOne = document.getElementById("topOne").value;
    let topTwo = document.getElementById("topTwo").value;
    priceTester(cheese,meat,topOne,topTwo);
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