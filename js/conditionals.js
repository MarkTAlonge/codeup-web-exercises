"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


    var blue = "blue is the color of the sky";
    var red =  "Strawberries are red";
    var cyan = "I dont know anything about cyan";
    var color = color;

function analyzeColor (color) {
    if (color === blue) {
        return blue
    } else if (color === red) {
        return red
    } else if (color === cyan)
        return cyan;
    else {
        return false
    }
}

    // console.log(analyzeColor(blue));
    // console.log(analyzeColor(red));
    // console.log(analyzeColor(cyan));
    // console.log(analyzeColor("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// var randomColor = analyzeColor();
// console.log(randomColor);
console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function caseAlert(color) {
    var switchColor = "";
    switch (color) {
        case "red" :
            alert (switchColor = "WOW! that's my favorite color")
            break;
        case "orange" :
            alert(switchColor = "WOW! that's not my favorite color")
            break;
        case "blue" :
            alert(switchColor = "WOW! that's not it's favorite color")
            break;
        case "yellow"  :
            alert(switchColor = "WOW! that's not there favorite color")
            break;
        case "green" :
            alert(switchColor = "WOW! that's not her favorite color")
            break;
        case "indigo" :
            alert(switchColor = "WOW! that's not his favorite color")
            break;
        case "violet" :
            alert(switchColor = "WOW! that's not anyone's favorite color")
            break;
        default :
            return switchColor;
    }
}


    console.log(caseAlert(randomColor));

/**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
var favColor = prompt ("What is your favorite color?");
analyzeColor( alert("your favorite color is " + favColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function luckyNumber(min) {
    return Math.floor(Math.random() * Math.floor(min));
    if (luckyNumber === "0") {
        return ("no discount");
    } else if (luckyNumber === "1") {
        return ("10% Discount");
    } else if (luckyNumber === "2") {
        return ("25% discount")
    } else if (luckyNumber === "3") {
        return ("35% discount");
    }else if (luckyNumber === "4") {
        return ("50% discount");
    } else if (luckyNumber === '5') {
        return ("its free!");
    }
}
// console.log(luckyNumber ("1"));
// console.log(luckyNumber ("2"));
// console.log(luckyNumber ("3"));
// console.log(luckyNumber ("4"));
// console.log(luckyNumber ("5"));





/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
parseFloat(prompt ("what is your Bill total?"));
function calculateTotal() {

}
    alert ("your lucky number was " + luckyNumber);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var pickANumber = confirm ("would you like to enter a number");
    if (pickANumber === true) {
        var number = parseInt(prompt("Please pick a number"));
    }
     if (number%2 === 0) alert ("that number is Even");
    else
        alert(" that number is odd");
    alert (parseInt("that number plus 100 is" + (number + 100)));
    if(number > 0)
        alert ("that number is positive");
    else
    alert("that number is negative");

    if  (number(!isNaN));
    alert("That is not a number");
    {

}




