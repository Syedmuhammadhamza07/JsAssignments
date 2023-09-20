// Question no 1
function sum(num1 , op ,num2) {
    switch (op) {
        case "+": console.log(num1 + num2); break;
        case "-": console.log(num1 - num2); break;
        case "*": console.log(num1 * num2); break;
        case "/": console.log(num1 / num2); break;
        default:  console.log("Invalid Operator"); break;
    }
}

sum(num1, op, num2);

// Question no 2
function today(Date) {
    var today = new Date();
    var day = today.getDay();
    console.log(today);
}

date(Date)

// Question no 3
function fullName(firstName , lastName) {
    var firstName1 = prompt("Enter Your First Name");
    var lastName1 = prompt("Enter Your Last Name");
    var fullName = firstName1 + " " + lastName1;
    console.log(fullName);
}

fullName(firstName , lastName);

// Question no 4
function sum(num1, num2) {
    var userOperator = prompt("Enter Operator");
    switch (userOperator) {
        case "+": console.log(num1 + num2); break;
        case "-": console.log(num1 - num2); break;
        case "*": console.log(num1 * num2); break;
        case "/": console.log(num1 / num2); break;
        default:  console.log("Invalid Operator"); break;
    }
}

sum(num1, num2);

// Question no 5
function sum(num1, num2) {
    var userOperator = prompt("Enter Operator");
    var num1 = prompt("Enter Your Number");
    var num2 = prompt("Enter Your Number");
    switch (userOperator) {
        case "+": console.log(num1 + num2); break;
        case "-": console.log(num1 - num2); break;
        case "*": console.log(num1 * num2); break;
        case "/": console.log(num1 / num2); break;
        default:  console.log("Invalid Operator"); break;
    }
}

sum();

// Question no 6
function sum(num1) {
    var num1 = prompt("Enter Any Number");
    var userOperator = prompt("Enter Operator");
    switch (userOperator) {
        case "Square": console.log(num1 * num1); break;
        default:  console.log("Invalid Operator"); break;
    }
}

sum();

// Question no 7
var num = prompt("Enter Any Number"); 
  
function factorial(num) { 
    var ans = 1; 
    if(num === 0)
        return 1;
    for (let i = 2; i <= num; i++) 
        ans = ans * i; 
    return ans; 
}
  
console.log(factorial(num));

// Question no 8
function sum(startNum, endNum) {
    var startNum = prompt("Enter Your Number");
    var endNum = prompt("Enter Your Number");
    for (var i = startNum; i <= endNum; i++) {
        console.log(i)
    }
}

sum();

// Question no 9
function hypotenuse(base , perpendicular) {
        var base = prompt("Write a value of Base of a Right Angle Triangle");
        var perpendicular = prompt("Write a value of Perpendicular of a Right Angle Triangle");
        var squareNum = (base*base) + (perpendicular*perpendicular);
        var hypotenuse = Math. sqrt(squareNum);
        console.log(hypotenuse)
}
hypotenuse()

// Question no 10
function Arr(arr) {
    var arr = ["Laptop", "PC", "XBOX", "PlayStation", "Mobile"];
    console.log(arr.length)
}
Arr()

// Question no 11
function Arg(number) {
    var number = [24, 53, 78, 91, 12];
    var greaterNumber = number[0];
    for (var i = 0; i < number.length; i++) {
    if (number[i] > greaterNumber) {
        greaterNumber = number[i]
    }
    }
    console.log(greaterNumber)
}

Arg()

// Question no 12
function areaOfRectangle() {
    var arg = prompt("What Argument Do you want to give");
    var width = prompt("Enter a Width of a Rectangle");
    var height = prompt("Enter a Height of a Rectangle");
    var area = width * height;
    console.log(area);
}
areaOfRectangle()

// Question no 13
function sorting(fruits) {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.sort());
}

sorting(fruits);

// Question no 14 (Incomplete)
function numberArray() {
    var userNumArray = prompt([]);
}

// Question no 15
var param = function inner() { 
    return typeof inner; 
}
alert(param()); 

// Question no 16
function power(power) {
    var number = prompt("Enter any Number")
    var power = prompt("What Power you want??")
    var power = Math.pow(number, power);
    console.log(power);
}
power()

// Question no 17
function random(random) {
    var random = Math.ceil(Math.random()*6);
    console.log(random);
    return random;
}
random()

// Question no 18 (Incomplete)
function reverse() {
    var x = prompt("Enter Any Number");
    var reverse = Math;
}

// Question no 19
