// Assignment 5

// Question no 1 and 2
var studentName = [];
studentName;
// Question no 3
var dailyItems = ['Double Roti', 'Eggs', 'Butter', 'Murgh Chole', 'Halwa Poori', 'Tea'];
dailyItems;

// Question no 4
var counting = [1, 2, 3, 4, 5, 6];
counting;

// Question no 5
var boleanValues = [true, false];
boleanValues;

// Question no 6
var mixArray = ['Double Roti', 'Eggs', 'Butter', 'Murgh Chole', 'Halwa Poori', 'Tea', 1, 2, 3, 4, 5, 6 , true, false];
mixArray;

// Question no 7
var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
qualification;

// Question no 8

// var name1=prompt("enter name1")
// var name2=prompt("enter name2")
// var name3=prompt("enter name3")

// var arr=[name1,name2,name3]
// var score=[489,399,255]


// document.write("score of " +arr[0]+" is "+ score[0] +"<br>"+"score of " +arr[1]+" is "+ score[1]+"<br>"+"score of " +arr[2]+" is "+ score[2])

var threeStudentName = ['Syed Muhammad Hamza', 'Osama Sohail', 'Amaan Ullah'];
var percentages = [450, 445, 440];
var totalMarks = 500;

switch (percentages) {
    case 'Syed Muhammad Hamza':
        alert(threeStudentName.indexOf(0) + ' is '+ percentages.indexOf(0) + 450/500*100)
        break;

    default:
        break;
}
threeStudentName;

// Question no 9
var color =['red', 'blue', 'yellow', 'green'];
color.unshift(prompt('What Color Do you Want in the START'));
color.push(prompt('What Color Do you Want in the END'));
color.unshift('orange', 'grey');
color.shift();
color.pop();
color;

// Question no 10
var studentScores = [320, 480, 90, 520, 190];
studentScores.sort()
studentScores;