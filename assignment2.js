// Assinment 2
// Question no 1
var num1 = prompt('Enter First Number');
var num2 = prompt('Enter Second Number');
var result= +num1 + +num2;

alert('Sum of' + ' ' + num1 + ' ' + 'and' + ' ' + num2 + ' ' + 'is' + ' ' + result);

// Question no 2
// For Subtraction
var num3 = prompt('Enter First Number');
var num4 = prompt('Enter Second Number');
var result= +num3 - +num4;

alert('Subtraction of' + ' ' + num3 + ' ' + 'and' + ' ' + num4 + ' ' + 'is' + ' ' + result);

// for Multiplication
var num5 = prompt('Enter First Number');
var num6 = prompt('Enter Second Number');
var result= +num5 * +num6;

alert('Multiplication of' + ' ' + num5 + ' ' + 'and' + ' ' + num6 + ' ' + 'is' + ' ' + result);

// for Division
var num7 = prompt('Enter First Number');
var num8 = prompt('Enter Second Number');
var result= +num7 / +num8;

alert('Division of' + ' ' + num7 + ' ' + 'and' + ' ' + num8 + ' ' + 'is' + ' ' + result);

// for Modulus
var num9 = prompt('Enter First Number');
var num10 = prompt('Enter Second Number');
var result= +num9 % +num10;

alert('Modulus of' + ' ' + num9 + ' ' + 'and' + ' ' + num10 + ' ' + 'is' + ' ' + result);

// Question no 3
// Part 1 and 2
var numb;
alert('Value after variable declaration is:' + ' ' + numb);

// Part 3 and 4
var initial = prompt('Type Initial value');
alert('Initial value:' + ' ' + initial);

// Part 5 and 6
var increment_value = prompt('Type value');
increment_value = ++increment_value
alert('The value after Increment:' + ' ' + increment_value);

// Part 7 and 8
var increment_value = prompt('Type value');
increment_value = ++increment_value
var add =increment_value + 7
alert('The value after Increment:' + ' ' + add);

// Part 9 and 10
var decrement_value = prompt('Type value');
decrement_value = --decrement_value
alert('The value after Decrement:' + ' ' + decrement_value);

// Part 11
var divide = prompt('Type value');
divide = divide/3
alert('The Reminder is:' + ' ' + divide);

// Question no 4
var ticket_price= 600;
ticket_price = ticket_price*5;
alert('Total cost to buy 5 tickets to a movie is' + ' ' + 'Rs' + ticket_price);

// Question no 5
var table = 'Multiplication of 4';
var num = 4;
alert(num + ' X 1 = ' + num*1);
alert(num + ' X 2 = ' + num*2);
alert(num + ' X 3 = ' + num*3);
alert(num + ' X 4 = ' + num*4);
alert(num + ' X 5 = ' + num*5);
alert(num + ' X 6 = ' + num*6);
alert(num + ' X 7 = ' + num*7);
alert(num + ' X 8 = ' + num*8);
alert(num + ' X 9 = ' + num*9);
alert(num + ' X 10 = ' + num*10);

// Question no 6
// Celsius to Fahrenheit
var celsius = 31;
var fahrenheit =  (celsius*9/5)+32;
alert(fahrenheit);

// Fahrenheit to Celsius
var fahrenheit = 87.8;
var  celsius=  (fahrenheit-32)*5/9;
alert(celsius);

// Question no 7
var item1 = 560;
var item2 = 200;
var item_quantity1 = 2;
var item_quantity2 = 5;
var shipping_charges = 150;

// for item1
var total_item1_price = item1*item_quantity1;

// for item2
var total_item2_price = item2*item_quantity2;

// for total
var total = total_item1_price + total_item2_price + shipping_charges;
alert('Total cost of you order is Rs' + total);

// Question no 8
var total_Marks =  prompt('Type Total Marks');
var marks_Obtained =  prompt('Type Marks Obtained');
var percentage =marks_Obtained/total_Marks*100;
alert(percentage);

// Question no 9
var dollar = 10;
var riyal = 25;
var pakistan = 10*297.57 + 25*79.35;
alert('the sum of conversion of dollar and riyal is' + ' ' + pakistan);

// Question no 10
var numb1 = +prompt('Enter any number');
var total1 =  numb1 +5 + numb1 *10 + numb1 /2;
alert(total1);

// Question no 11
var year = 2023;
var birthYear = prompt('Enter your Birth Year');
var age = year-birthYear;
alert(age);

// Question no 12
var radiusOfCircle = 12;
var π = 3.142;
var circumference =2*π*radiusOfCircle;
alert('The circumference is' + ' ' + circumference);
var r = radiusOfCircle*radiusOfCircle;
var area = π*r;
alert('The Area is' + ' ' + area);

// Question no 13
var number2 = +prompt('Enter any number');
var increment_numb =++number2;
alert('Now the value of Number2 is:' + ' ' + increment_numb);

var increment_numb1 =number2++;
alert('Now the value of Number2 is:' + ' ' + increment_numb1);

var decrement_numb =--number2;
alert('Now the value of Number2 is:' + ' ' + decrement_numb);

var decrement_numb1 =number2--;
alert('Now the value of Number2 is:' + ' ' + decrement_numb1);

// Queestion no 14
var a = 2;
var b = 1;
var result1 = --a - --b + ++b + b--;
// var result2 =--a;
// var result3 =--b;
var result4 =++b;
var result5 =b--;
alert(result5);

// Qustion no 15
var snack = prompt('Enter your Favourite Snack');
var age = +prompt('Enter your Current Agee');
var maxAge = +prompt("Enter Your Predicted Maximum Age");
var snackAmount = +prompt('Enter how many snacks you eat a day');

var total1= maxAge*2-age*2;
alert('You will need' + ' ' + total1 + ' ' + snack + ' ' + 'to last you until the rip old age of' + ' ' + maxAge);
