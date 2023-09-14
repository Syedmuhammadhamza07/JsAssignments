// Question no 1
var userInput = prompt("Enter Any Positive Integer");
for (var i = 0; i <= userInput.length; i++) {
    if (userInput >= 0) {
        console.log("Number: " + userInput);
        console.log("Round off value of the Number: " + Math.round(userInput));
        console.log("Floor value of the Number: " + Math.floor(userInput));
        console.log("Ceil value of the Number: " + Math.ceil(userInput));
    }
    else {
        alert("Enter A Positive Integer")
    }
    break;
}

// Question no 2
var userInput = prompt("Enter Any Positive Integer");
for (var i = 0; i <= userInput.length; i++) {
    if (userInput <= 0) {
        console.log("Number: " + userInput);
        console.log("Round off value of the Number: " + Math.round(userInput));
        console.log("Floor value of the Number: " + Math.floor(userInput));
        console.log("Ceil value of the Number: " + Math.ceil(userInput));
    }
    else {
        alert("Enter A Negative Integer")
    }
    break;
}

// Question no 3
var userInput = prompt("Enter Any Positive Floating Point");
for (var i = 0; i <= userInput.length; i++) {
    if (userInput >= 0) {
        console.log("Number: " + userInput);
        console.log("Round off value of the Number: " + Math.round(userInput));
        console.log("Floor value of the Number: " + Math.floor(userInput));
        console.log("Ceil value of the Number: " + Math.ceil(userInput));
    }
    else {
        alert("Enter Any Positive Floating Point")
    }
    break;
}

// Question no 4
var userInput = prompt("Enter Any Negetive Floating Point");
for (var i = 0; i <= userInput.length; i++) {
    if (userInput <= 0) {
        console.log("Number: " + userInput);
        console.log("Round off value of the Number: " + Math.round(userInput));
        console.log("Floor value of the Number: " + Math.floor(userInput));
        console.log("Ceil value of the Number: " + Math.ceil(userInput));
    }
    else {
        alert("Enter Any Negetive Floating Point")
    }
    break;
}

// Question no 5
var userInput = prompt("Enter Any Number");
var absolute = Math.abs(userInput);
console.log("The Absolute value of " + userInput + " is " + absolute);

// Question no 6
var dice1 = Math.ceil(Math.random()*6);
var dice2 = Math.ceil(Math.random()*6);
console.log("Random Dice Value: " + dice1);
console.log("Random Dice Value: " + dice2);

// Question no 7
var Random = Math.ceil(Math.random() * 2)
if (Random===1) {
    console.log('Random coin value : Heads')
}
else{
    console.log('Random coin value : Tails')
}

// Question no 8
console.log("Random Number between 1 and 100: " + Math.ceil((Math.random() * 100) + 1))

// Question no 9
var weight = prompt("What's Your Body Weight");
for (var i =0; i < weight.length; i++) {
    var word = weight.slice(i , i + 4)
    if (word === 'kg') {
        weight = "The Weight Of the user is " + weight + weight.slice(i + 4)
    }
}
console.log("The Weight Of the user is " + weight + "Kilogram");

// Queston no 10
var random = Math.random()*10;
var userInput = prompt('Enter Any Number from 1 to 10');
if (userInput === random) {
    console.log("Congratulation");
}

else {
    console.log("Try Again!");
}

// Question no 11
var today = new Date();
var day = today.getDay();
console.log(today);

// Question no 12
var today = new Date();
var month = today.getMonth();
var monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log("Current Month: " + monthlist[month]);

// Question no 13
var today = new Date();
var day = today.getDay();
var daylist = ["Sun","Mon","Tues","Wed ","Thurs","Fri","Sat"];
console.log("Today is " + daylist[day]);

// Question no 14
var today = new Date();
var day = today.getDay();
var daylist = ["Sun","Mon","Tues","Wed ","Thurs","Fri","Sat"];
if (day === 'Sun' && 'Sat') {
    console.log("It's a Fun Day");
}
else {
    console.log("It's a Working Day");
}

// Question no 15
var today = new Date();
var date = today.getDate();
if (date <= 15) {
    console.log("First Fifteen Days of the Month")
}
else {
    console.log("Last Fifteen Days of the Month")
}

// Qustion no 16


// Question no 17
var today = new Date();
var hour = today.getHours();
if (hour <= 12) {
    console.log("It's AM")
}
else {
    console.log("It's PM")
}

// Question no 18
// Question no 19
// Question no 20
// Question no 21
// Question no 22

// Question no 23
var today = new Date();
var year = today.getFullYear()
var age = prompt("Enter Your Age");
var birthYear = year - age;
console.log("Your Age is " + age);
console.log("Your Birth Year is " + birthYear);

// Question no 24
var customerName = prompt("Enter Your Name");
var today = new Date();
var month = today.getMonth();
var monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var numberOfUnits = prompt("Enter, How many Units did you Consume");
var chargesPerUnit = 27;
var latePaymentSurcharge = 500;
var netAmountPayable = numberOfUnits * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

console.log("K-Elecctric Bill");
console.log("Customer Name: " + customerName);
console.log("Month: " + monthlist[month]);
console.log("Number of Units: " + numberOfUnits);
console.log("Charges per Units: " + chargesPerUnit);
console.log("Net Amount Payable (within Due Date): " + netAmountPayable);
console.log("Late Payment Surcharges: " + latePaymentSurcharge)
console.log("Gross Amount Payable (after Due Date): " + grossAmountPayable);
