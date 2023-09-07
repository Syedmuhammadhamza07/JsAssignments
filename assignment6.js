// Question no 1
for (var i = 0; i <= 4; i++) {
    console.log('Hello World');
};

// Question no 2
for (var i = 1; i <= 10; i++) {
    console.log(i);
};

// Question no 3
var userNum = prompt("Enter Any Number to print it's multiplication table");
var userLength = prompt("Enter length of multiplication table");
for (var i = 1; i <= userLength; i++) {
    console.log(userNum + ' X ' + i + ' = ' + userNum*i);
};

// Question no 4
var mobile = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
for (var i = 0; i <= mobile.length; i++) {
    console.log(mobile[i]);
};

// Question no 5
var fruits = ["apple", 'banana', 'mango', 'orange', 'strawberry'];
for (var i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]);
    console.log("Element at index " + i + " is " + fruits[i]);
};

// Question no 6
var itemsNum = prompt('Enter number of Items');
for (var i = 0; i < itemsNum; i++) {
    var userValue =prompt('Enter value of ' + i + ' index');
    console.log("Number of Items is " + itemsNum);
    console.log('Value :');
    console.log(userValue[i]);
}

// Question no 7
for (var i = 1; i <= 15; i++) {
    console.log('Counting: ' + i);
}

for(var i = 20; i > 0; i-=2) {
    console.log('Inverse Counting: ' + i);
}

for(var i = 0; i <= 20; i+=2) {
    if (i % 2 === 0) {
        console.log('Even: ' + i)
    }
    else {
        console.log('Odd: ' + i)
    }
}

for (var i = 2; i <= 20; i+=2) {
    console.log('Series: ' + i + 'k');
}

// Question no 8
var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInput = prompt('Enter any Bakery Item');
for (var i = 0; i <= bakery.length; i++) {
    if (userInput === bakery[i]) {
        console.log(bakery[i] + ' -Yes we have that item')
    }
    else {
        console.log(bakery[i] + ' -No, we dont have this item yet')
    }
}

// Question no 9
var num = [24, 53, 78, 91, 12];
var greaterNumber = num[0];
for (var i = 0; i < num.length; i++) {
    if (num[i] > greaterNumber) {
        greaterNumber = num[i]
    }
}
console.log(greaterNumber)

// Question no 10
var num = [24, 53, 78, 91, 12];
var smallerNumber = num[0];
for (var i = 0; i < num.length; i++) {
    if (num[i] < smallerNumber) {
        smallerNumber = num[i]
    }
}
console.log(smallerNumber);

// Question no 11
var num = [24, 53, 78, 91, 12];
var greaterNumber = num[0];
var smallerNumber = num[0];
for (var i = 0; i < num.length; i++) {
    if (num[i] > greaterNumber && num[i] < smallerNumber) {
        greaterNumber = num[i]
        smallerNumber = num[i]
    }
}
console.log(greaterNumber);
console.log(smallerNumber);

// Question no 12
for (var i = 5; i <= 100; i+=5) {
    console.log(i)
}

// Question no 13
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
for (var i = 0; i <= students.length && i <= scores.length; i++) {
    console.log('Student ' + 'Scores');
    console.log(students[i] + ' ' + scores[i]);
}

// Question no 14
var scores = [12, 45, 3, 22, 34, 50];
var userStops = prompt('Where would I stop');
for (var i = 0; i <= scores.length; i++) {
    // if (userStops === scores[i]) {
        console.log(scores[i]);
    // }
}

// Question no 15
var multipleArray = [ [1,2,3] , [4,5,6] , [7,8,9] ];
for (var i = 0; i <= multipleArray.length; i++) {
    console.log(multipleArray[i])
}

// Question no 16
var userNumber = prompt('Enter any Number');
for (var i = userNumber; i >= 0; i-=0.5) {
    console.log(i);
}

// Question no 17
for (var i = 0; i <= 20; i++) {
    if (i%2) {
        console.log(i +' is Even')
    }
    else {
        console.log(i +' is odd')
    }
}

// Question no 18 
for (var i = 1; i <= 7; i*=i%2) {
    console.log('The Product of the odd integers is ' + i);
}

// Question no 19
var star = '*';
for (var i = 7; i >= 1; i-=1) {
    console.log(star[i]);
}