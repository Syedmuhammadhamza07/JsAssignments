// Assignment 3
// Question no 1
var username = prompt('Enter your Name');
alert('Hi, ' + username);

// Question no 2
var num = prompt('Typ any Number');
if (num === '') {
    num = 5;
}

alert(num + ' ' + 'X 1 =' + ' ' + num * 1 + '\n' + num + ' ' + 'X 2 =' + ' ' + num * 2 + '\n' + num + ' ' + 'X 3 =' + ' ' + num * 3 + '\n' + num + ' ' + 'X 4 =' + ' ' + num * 4 + '\n' + num + ' ' + 'X 5 =' + ' ' + num * 5 + '\n' + num + ' ' + 'X 6 =' + ' ' + num * 6 + '\n' + num + ' ' + 'X 7 =' + ' ' + num * 7 + '\n' + num + ' ' + 'X 8 =' + ' ' + num * 8 + '\n' + num + ' ' + 'X 9 =' + ' ' + num * 9 + '\n' +num + ' ' + 'X 10 =' + ' ' + num * 10);

// Question no 3
var cityName = prompt('Input your City');
if (cityName === 'Karachi') {
    alert('Welcome To city of Light')
}

else {
    alert("this App is Applicable in Karachi Only")
}

// Question no 4
var gender = prompt('Enter your Gender');
if (gender === 'male') {
    alert('Good Morning, Sir')
}
else if (gender === 'female') {
    alert("Good Morning, Ma'am")
}

// Question no 5

var trafficSignal = prompt('Enter the Colour of Signal Light');
if (trafficSignal === 'red') {
    alert('vehicles must stop')
}
else if (trafficSignal === 'yellow') {
    alert('vehicles should get ready to move')
}

else if (trafficSignal === 'green') {
    alert('vehicles can move now')
}

// Question no 6
var age = prompt('Enter your Current Age');
var maxAge = prompt('Enter your Max Age');

if (age <= maxAge) {
    alert('You are Welcome')
}

else {
    alert('Try Again')
}

// Question no 7
var remainingFuel = prompt('Enter Remaining Fuel in your Car (in Litres)');
var currentFuel = prompt('Enter Current Fuel in your Car');

if (currentFuel < '0.25 Litres') {
    alert("Please refill the fuel in your car")
}

else {
    alert('your Fuel is enough')
}

// Question no 8
// a.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// Yes

// b. 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// No

// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e. 
if (true){
alert("True");
}
if (false){
alert("False");
}
// f. 
if("car" < "cat"){
alert("car is smaller than cat");
}

// Question no 9

var totalMarks = prompt('Enter Total Marks');
var marksObtained = prompt('Enter marks obtained');
var percentage = marksObtained/totalMarks*100;

if (percentage >= 80) {
    alert('Total Marks: ' + totalMarks + '\n' + 'Marks Obtained: ' + marksObtained + '\n' + 'Percentage: ' + percentage + '\n' + 'Grade: A-one' + '\n' + 'Remarks: Excellent')
}
else if (percentage >= 70) {
    alert('Total Marks: ' + totalMarks + '\n' + 'Marks Obtained: ' + marksObtained + '\n' + 'Percentage: ' + percentage + '\n' + 'Grade: A' + '\n' + 'Remarks: Good')
}
else if (percentage >= 60) {
    alert('Total Marks: ' + totalMarks + '\n' + 'Marks Obtained: ' + marksObtained + '\n' + 'Percentage: ' + percentage + '\n' + 'Grade: B' + '\n' + 'Remarks: You need to improve')
}
else if (percentage < 60) {
    alert('Total Marks: ' + totalMarks + '\n' + 'Marks Obtained: ' + marksObtained + '\n' + 'Percentage: ' + percentage + '\n' + 'Grade: Fail' + '\n' + 'Remarks: Sorry')
}

// Question no 10
var nameOfItem1 = prompt('Enter Name of Your First Item');
var nameOfItem2 = prompt('Enter Name of Your Second Item');
var priceOfItem1 = +prompt('Enter Price of Your First Item');
var priceOfItem2 = +prompt('Enter Price of Your Second Item');
var quantityOfItem1 = +prompt('Enter Quantity of Your First Item');
var quantityOfItem2 = +prompt('Enter Quantity of Your Second Item');
var shippingCharges = 250;
var totalCost = priceOfItem1*quantityOfItem1 + priceOfItem2*quantityOfItem2 + shippingCharges;
var discountedPrice = totalCost-totalCost*10/100 ;


alert('Price of ' + nameOfItem1 + ' ' + 'is' + ' ' +priceOfItem1 + '\n' +'Quantity of ' + nameOfItem1 + ' is' + ' ' +quantityOfItem1 + '\n'  + 'Price of ' + nameOfItem2 + ' ' + 'is' + ' ' +priceOfItem2 + '\n' + 'Quantity of ' + nameOfItem2 + ' is' + ' ' +quantityOfItem2 + '\n' + '\n' + 'Shipping Charges: ' + shippingCharges + '\n' + '\n' + 'Total cost of your order is ' + totalCost + ' ' +  'PKR');
if (totalCost > 2000) {
    alert('Discounted Price is ' + discountedPrice + ' ' +  'PKR')
};

// Question no 11
var secretNo = 7;
var userInput = prompt('uess the secret number!');
if (secretNo == userInput) {
    alert('Bingo!')
}

else {
    alert('Wrong answer')
}

// Question no 12
var numb = prompt('Enter number');
if (numb % 3 == 0) {
    alert('The number is Divisible by 3')
} 

else {
    alert("The number is not divisible by 3")
}

// Question no 13
var teamName_A = prompt('Enter your Team Name');
var totalSccore_A = prompt('Enter your Score');
var teamName_B = prompt('Enter your Team Name');
var totalSccore_B = prompt('Enter your Score');
if (totalSccore_A < totalSccore_B) {
    alert(teamName_B + ' have won the game')
}

else if (totalSccore_B < totalSccore_A) {
    alert(teamName_A +' have won the game')
}

else if (totalSccore_B == totalSccore_A) {
    alert('there is a tie')
}

// Question no 14
var string =  prompt('Enter any country name');
var number = prompt('Enter any number');
var bolean = prompt('Enter any boolean Value');

if (string === 'Pakistan') {
    alert(string + ' is a string')
}

else if (number === 1>=10) {
    alert(number + ' is a Number')
}

else if (boolean === 'true' || 'false') {
    alert(boolean + ' is a Boolean')
}

// Question no 15
var userNumb = prompt('Enter any Number');
if (userNumb % 2 ==0) {
    alert(userNumb + ' ' + 'is an even number');
}

else {
    alert(userNumb + ' ' + 'is an Odd number');
}

// Question no 16
var temperature = prompt('Enter your Weather');
if (temperature > 40) {
    alert('It is too hot outside.')
}
else if (temperature > 30) {
    alert('The Weather today is Normal.')
}
else if (temperature > 20) {
    alert('Today’s Weather is cool.')
}
else if (temperature > 10) {
    alert('OMG! Today’s weather is so Cool.')
}

// Question no 17
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

// Question no 18
var day = prompt('What Day is Today?');
if (day == 'Monday' , 'Tuesday', 'Wednesday', 'Thursday', 'Friday') {
    alert("It's a week day")
}

else if (day == 'Saturday') {
    alert("It's a Weekend")
}

else if (day == 'Sunday') {
    alert("Yay! It's a Holiday")
}

// Question no 19
var scores = prompt('Enter your Percentage');
if (scores > 50) {
    alert('You are Passed')
}

else {
    alert('Try Again')
}

// Question no 20
var userNumb1 = prompt('Enter any Number');
var userNumb2 = prompt('Enter any Number');
if (userNumb1 > userNumb2) {
    alert(userNumb1 + " is greater than " + userNumb2)
}
else if (userNumb1 < userNumb2) {
    alert(userNumb1 + " is Less than " + userNumb2)
}

// Question no 21
var text = prompt('Enter Language: French, Spanish, Urdu');
if (text === 'French') {
    alert('Bonjour le monde')
}
else if (text === 'Urdu') {
    alert('ہیلو ورلڈ')
}
else if (text === 'Spanish') {
    alert('Hola Mundo')
}
else {
    alert('Invalid Language')
}

// Question no 22
var userNumb3 = prompt('Input Any Number');
if (userNumb3 > 0) {
    alert('The Number is Positive')
}

else if (userNumb3 < 0) {
    alert('The number is Negative')
}

// Question no 23
var number1 = prompt('Enter any Number');
var noun = prompt('Enter any Noun');

alert(number1 + ' ' + noun);