// Question no 1
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// Question no 2
var mobile = prompt("Enter your favorite mobile phone model");
for (var i = 0; i <= mobile.length; i++) {
    console.log("My favorite Mobile Phone is:" + " " + mobile)
    console.log("length of String: " + mobile.length)
    break;
}

// Question no 3
var nation = "Pakistani";
var userInput = prompt("Enter Any Letter From This String");
console.log("String: " + nation);
console.log("Index Of 'n': " + nation.indexOf(userInput));

// Question no 4
var str = "Hello World";
var index = str.lastIndexOf('l');
console.log("String: " + str);
console.log("Last Index Of: " + index);

// Question no 5
var nation = "Pakistani";
console.log("String: " + nation);
console.log("Character at 3rd Index: " + nation[3]);

// Question no 6
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// Question no 7
var city = 'I live in Hyderabad';
for (var i =0; i < city.length; i++) {
    var word = city.slice(i , i + 5)
    if (word === 'Hyder') {
        city = city.slice(0 , i) + 'Islam' + city.slice(i + 5)
    }
}
console.log(city);

// Question no 8
var message = 'Ali and Sami are best friends. They play cricket and football together.';
for (var i =0; i < message.length; i++) {
    var replaceMessage = message.slice(i , i + 3)
    if (replaceMessage === 'and') {
        message = message.slice(0 , i) + '&' + message.slice(i + 3)
    }
}
console.log("Message: " + message);
console.log("Replaced Message: " + replaceMessage);

// Question no 9
var numStr = "472";
console.log(numStr);
console.log(typeof(numStr));
var number = 472;
console.log(number);
console.log(typeof(number));

// Question no 10
var userLink = prompt("Enter a Link In this format: (www.xyz.com)");
for (var i = 0; i < userLink.length; i++) {
    console.log("URL: " + userLink);
    var word = userLink.slice(i , i + 4)
    userLink = userLink.slice(0 , i) + userLink.slice(i + 4)
    break;
}
console.log("Domain: " +userLink);

// Question no 11
var userInput = prompt("Enter Any Word");
upper = userInput.toUpperCase();
console.log("User input: " + userInput);
console.log("Upper Case: " + upper);

// Question no 12
var userInput = prompt("Enter Any Word");
lower = userInput.toLowerCase();
console.log("User input: " + userInput);
console.log("Lower Case: " + lower);

// Question no 13
var userInput = prompt("Enter Any Word");
var title = userInput[0].toUpperCase() + userInput.slice(1);
console.log("User input: " + userInput);
console.log("Title Case: " + title);

// Question no 14
var num = 35.36;
for (var i = 0; i < num.length; i++) {
    var word = num.slice(i , i + 3)
    var updatedNum = num.slice(0 , i) + num.slice(i + 3)
    break;
}
console.log("Number: " + num);
console.log("Result: " + updatedNum);

// Question no 15
var a = "3";
var b = "3";
var x = a + b
console.log("a is " + a);
console.log("b is " + b);
console.log("a + b is " + x);

// Question no 16
var a = "3";
var b = "3";
var x = a - b
console.log("a is " + a);
console.log("b is " + b);
console.log("a - b is " + x);

// Question no 17

// Question no 18
var bakery =["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter any item you want from this menu: cake, apple pie, cookie, chips, patties")
for (var i = 0; i < bakery.length; i++) {
    userInput = userInput[i].toLowerCase();
    if (userInput === bakery[i]) {
        console.log(userInput + " is Available at index " + i + " in our Bakery")
    }
    else {
        console.log("Sorry, We dont have this item yet")
    }
    break;
}

// Question no 19
var userInput1= prompt("Enter any Word");
var userInput2= prompt("Enter any Word");
if (userInput1 > userInput2) {
    console.log(userInput1 + ' is Greater than ' + userInput2);
}
else if (userInput1 < userInput2) {
    console.log(userInput1 + ' is Less than ' + userInput2);
}
else if (userInput1 = userInput2) {
    console.log(userInput1 + ' is Equal to ' + userInput2);
}
else {
    console.log("Sorry")
}

// Question no 20
var password = prompt("Enter Password");
for (var i = 0; i < password.length; i++) {
    if (password[i] ) {
        
    }
}

// Question no 21

// Question no 22
var nation = "Pakistan";
var index = nation.lastIndexOf(7);
console.log("String: " + nation);
console.log("Last Index Of: " + index);

// Question no 23
var str = 'The quick brown fox jumps over the lazy dog';
for (var i = 0; i < str.length; i++) {
    
}

// Question no 24

// Question no 8,17,21,24
