"use strict";

console.log("Hello from external javaScript");


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day,
// you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
//     Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var rentalPerDayDollars = prompt("What is the daily rental rate in dollars?");
var littleMermaidDays = prompt("How many days will the Little Mermaid be rented?");
var brotherBearDays = prompt("How many days will Brother Bear be rented?");
var herculesDays = prompt("How many days will Hercules be rented");

var totalRentalCost = (parseInt(littleMermaidDays) + parseInt(brotherBearDays) + parseInt(herculesDays)) * parseInt(rentalPerDayDollars);

alert("The total will be $" + totalRentalCost.toFixed(2));

