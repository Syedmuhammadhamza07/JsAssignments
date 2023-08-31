// Assignment 4
// Question no 1
var userNum = prompt('Enter Any Number');
if (userNum%3 ==0) {
    alert('Number is Divisible by 3');
}

else {
    alert('The number is not Divisible by 3');
}

// Question no 2
var num = prompt('Enter Any Number');
if (num%2 ==0) {
    alert('This Number is Even');
}
else if (num%2 != 0) {
    alert('This Number is Odd');
}

else {
    alert('Insert any Number');
}

// Question no 3
var age = prompt("Enter your Age");
if (age > 18) {
    alert('Old Enough')
}

else {
    alert('Too Young')
}

// Question no 4
var userName = prompt('Enter Your Name');
var myName = 'Syed Muhammad Hamza';
if (userName === myName) {
    alert('Your Name is Great')
}

else {
    alert('your code should not produce any output')
}

// Question no 5
var userNum1 = prompt('Enter Any Number');
if (userNum1%3 ==0) {
    alert('Number is Divisible by 3');
}

else {
    alert('The number is not Divisible by 3');
}

// Question no 6
var userInput = prompt('Enter any value');
// steps to find ASCII code
var code = userInput.charCodeAt()
if (code >= 97 && code <= 90) {
    alert('You have type a Small Latter')
}
else if (code >= 65 && code <= 90) {
    alert('You have type Capital Letter')
}
else if (code >= 48 && code <= 57) {
    alert('You have type a Number')
}

// Question no 7
var firstNum = prompt('Enter any Number');
var secondNum = prompt('Enter any Number');
var operation = prompt('Enter any Mathametical Operator (+, -, *, /, %)');

if (operation == '/') {
    alert(firstNum + ' / ' + secondNum + ' is equals to ' + firstNum/secondNum)
}
else if (operation == '*') {
    alert(firstNum + ' * ' + secondNum + ' is equals to ' + firstNum*secondNum)
}
else if (operation == '+') {
    alert(firstNum + ' + ' + secondNum + ' is equals to ' + firstNum+secondNum)
}
else if (operation == '-') {
    alert(firstNum + ' - ' + secondNum + ' is equals to ' + firstNum-secondNum)
}
else if (operation == '%') {
    alert(firstNum + ' % ' + secondNum + ' is equals to ' + firstNum%secondNum)
}


// Question no 8
var timeInHours = prompt('What time is it? like 24 hours');
if (timeInHours >= "00:00" && timeInHours < "12:00") {
    alert('Good Morning')
}
else if (timeInHours >= "12:00" && timeInHours < "17:00") {
    alert('Good Afternoon')
}
else if (timeInHours >= "17:00" && timeInHours < "21:00") {
    alert('Good Evening')
}
else if (timeInHours >= "21:00" && timeInHours < "23:59") {
    alert('Good Night')
}

// Question no 9
var currentYear = prompt("Enter Current Year");
var leapYear = 2020;
if (currentYear % 4 == 0) {
    alert('It is a leap Year')
}
else {
    alert('It is not a leap Year')
}

// Question no 10
var password = 12345;
var userPassword = prompt('Enter Password');
if (userPassword == 0) {
    alert('Please enter your password')
}
else if (userPassword == password) {
    alert('Correct! The password you entered matches the original password')
}

else {
    alert('Incorrect Password')
}

// Question no 11
var inputUserName = prompt('Enter your Name')
var firstName = "Ali";
if (firstName == "Fahad") {
    alert("Hello Fahad!");
}
else {
    alert("You are not Fahad!");
}

// Question no 12
var greeting;
 var hour = 13;
 if (hour < 18) {
    greeting = "Good day";
}
 else{
    greeting = "Good evening";
 } 

//  Question no 13
var integer = prompt('Enter any integer');
var integer1 = prompt('Enter any integer');
if (integer > integer1) {
    alert(integer + ' ' + 'is greater than' + ' ' + integer1)
}
else if (integer1 > integer) {
    alert(integer1 + ' ' + 'is greater than' + ' ' + integer)
}

else if (integer == integer1) {
    alert(integer + ' ' + 'and' + integer1 + 'are equal')
}

else {
    alert('invalid value')
}

// Question no 14
var num1 = prompt('Enter Your First Number');
if (num1 > 0) {
    alert(num1 + ' ' + 'is a Positive Number')
}
else if (num1 < 0) {
    alert(num1 + ' ' + 'is a Negative Number')
}
else if (num1 == 0) {
    alert(num1 + ' ' + 'is Zero')
}

else {
    alert('Invalid Value')
}

// Question no 15
var userHour = prompt('what time is it in hour?');
if (userHour == '6am' >= '9am') {
    alert('Breakfast is served')
}
else if (userHour == '11am' >= '1pm') {
    alert('Time for lunch')
}
else if (userHour == '5pm' >= '8pm') {
    alert("It's Dinner Time")
}
else {
    alert("Sorry, you'll have to wait, or go get a snack")
}

// Question no 16
// var userVariable = ;
var type = typeof userVariable ;
if (userVariable == 'true' || 'false') {
    alert(userVariable + ' ' + 'type is ' + type)
}

// Question no 17
var userLetter = prompt('Type any Letter')
if (userLetter == 'a' || 'e' || 'i' || 'o' ||'u') {
    alert(userLetter + ' ' + 'is vowel')
}

else {
    alert("It's a Consonant")
}

// Question no 18
alert(10!=8);

// Question no 19



// Question no 20
var userAge = prompt('Enter your Age');
if (userAge < 18) {
    alert('Too Young')
}

else {
    alert('Old Enough')
}
// Question no 16, 17, 19