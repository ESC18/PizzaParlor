# Pizza Parlor

#### By Elijah Shawn Cartwright
## Technologies used:
* HTML
* CSS
* GIT
* JS
* Adobe XD
* Chrome & Firefox Web developer tools

## Description of Application:
This web application is a small website where the user can construct and create their own pizzas and generate their own complete order. It can produce as many pizzas as the user wants and allows you to choose from a variety of toppings.

## Setup and installation requirements/guide:
1. First download the repository _"PizzaParlor"_ to your device.
2. Proceed to navigate to the highest level of your directory.
3. Open index.html.

## Known Bugs:
* Site is not fully responsive and may struggle with mobile devices.  For Best Results - use a monitor with a 1080x1920 resolution.
* 'Order Now' button isn't always responsive - to fix try hovering away from it and clicking elsewhere on the screen and then trying to click on the button.

## Github Pages:
https://esc18.github.io/PizzaParlor/

## Licensing:
MIT
Copyright (c) 2023 _Elijah Shawn Cartwright_


## Tests:

Describe: priceTester()

Test: If user selects a small, medium, or large size, it will add the proper amount to the total price.
Code: 
priceTester("small","None","None","None","None","price");
console.log(totalPrice);
Expected Output: Price will be 8.

Test:  If user selects a mozzerella, cheddar, or no cheese, it will add the proper amount to the total price.
Code: 
priceTester("small","Mozzerella","None","None","None","price");
console.log(totalPrice);
Expected Output: Price will be 9.

Test if user selects Pepperroni, Sausage, or no meat, it will add the proper amount to the total price.
Code:
priceTester("small","Mozzerella","Pepperroni","None","None","price");
console.log(totalPrice);
Expected Output: Price will be 11.

Test if user selects Pineapple, Tomato, or no first topping, it will add the proper amount to the total price.
Code:
priceTester("small","Mozzerella","Pepperroni","Pineapple","None","price");
console.log(totalPrice);
Expected Output: Price will be 12.

Test if user selects Olive, Pepper, or no second topping, it will add the proper amount to the total price.
Code:
priceTester("small","Mozzerella","Pepperroni","Pineapple","Olive","price");
console.log(totalPrice);
Expected Output: Price will be 14.