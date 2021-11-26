/*
Problem No 1: Seer to Mon Problem
*/
function seerToMon(seerInput) {
//error on wrong input
if (typeof seerInput != 'number') {
return 'Please enter a Number'
}
else if (seerInput < 0) {
return 'Please enter a positive number'
}
//calculation variable
let monScale = seerInput / 40;
return monScale;
}
let inputMon = seerToMon(200);
console.log(inputMon);
/*
Problem No 2: TShirt Problem
*/
function totalSales(totalShirt, totalPant, totalShoe) {
//error on wrong input
if (typeof totalShirt != 'number' || typeof totalPant != 'number' || typeof totalShoe != 'number') {
return 'Please enter a Number'
}
else if (totalShirt < 0 || totalPant < 0 || totalShoe < 0) {
return 'Please enter a positive number'
}
//calculation variable
var costOfShirt = totalShirt * 100;
var costOfPant = totalPant * 200;
var costOfShoe = totalShoe * 500;
var total = costOfShirt + costOfPant + costOfShoe;
return total;
}
let shirtQuantity = 2;
let pantQuantity = 2;
let shoeQuantity = 2;
let totalResult = totalSales(shirtQuantity, pantQuantity, shoeQuantity);
console.log(totalResult);
/*
Problem 3 : Delivery Cost
*/
//Function
function deliveryCost(quantity) {
//error on wrong input
if (typeof quantity != 'number') {
return 'Please enter a Number'
}
else if (quantity < 0) {
return 'Please enter a positive number'
}
//price for different quantity
const first100Price = 100;
const second100Price = 80;
const up200Price = 50;
//condition start's
// Price under 100
if (quantity <= 100) {
let totalUnder100 = quantity * first100Price;
return totalUnder100;
}
// Price under 200
else if (quantity <= 200) {
let first100total = first100Price * 100;
let restOf200 = quantity - 100;
let restTotalPrice = restOf200 * second100Price;
let totalOfUnder200 = first100total + restTotalPrice;
return totalOfUnder200;
}
// Price up 200
else if (quantity > 200) {
let first100total = first100Price * 100;
let second100total = second100Price * 100;
let rest = quantity - 200;
let restTotal = rest * up200Price;
let totalOfMoreThen200 = first100total + second100total + restTotal;
return totalOfMoreThen200;
}
}
//function is calling here
let todaysDelivery = 300;
let todaysDeliveryPayment = deliveryCost(todaysDelivery);
console.log(todaysDeliveryPayment);
// Problem 4 : Perfect Friend
function perfectFriend(names) {
for (const name of names) {
// Check String
if (typeof (name) == "string") {
// Find Perfect friend
if (name.length == 5) {
return name;
}
}
// when names is not string
else {
return "Please Enter A Name"
}
}
}
let friendsName = ['Shofiq', 'Rokib', 'Hasibul', 'Rafi', 'Sofikul', 'Safiul'];
// Calling function
let perfect = perfectFriend(friendsName);
console.log(perfect);