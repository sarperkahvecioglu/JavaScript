"use strict";

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 123;
// const if = 22;

// function logger() {
//     console.log("Sarper");
// }

//Invoking a function!
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = "Juice with " + apples + " apples and " + oranges + " oranges.";
//     return juice;
// }

// console.log(fruitProcessor(2, 3));
// console.log(fruitProcessor(5, 7));


// function calculateAge(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

// console.log(calculateAge(2001));

//Arrow functions 

// const calculateAge2 = birthYear => 2037 - birthYear;
// console.log(calculateAge2(2005));

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return firstName + " retires in " + retirement + " years.";
// }

// console.log(yearUntilRetirement(2001, "Sarper"));


// function calculateRemaniningYearsForRetirement(birthYear) {
//     const age = 2023 - birthYear;
//     const retirementAge = 65;
//     const remainingRetirementYears = retirementAge - age;
//     return remainingRetirementYears;

// }

// function printValues(firstName) {
//     return firstName + " has " + calculateRemaniningYearsForRetirement(1987) + " years to retire!"
// }

// console.log(printValues("Sarper"));

// const calculateAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


// function checkWinner(team1Average, team2Average) {
//     if (team1Average / 2 >= team2Average) {
//         console.log("Team 1 has won with scores ", team1Average, team2Average);

//     } else if (team2Average / 2 >= team1Average) {
//         console.log("Team 2 has won with scores ", team2Average, team1Average);

//     } else console.log("No one has won!");

// }

// const dolphinsAverageScore = calculateAverage(85, 54, 41);
// const koalasAverageScore = calculateAverage(15, 34, 29);
// checkWinner(dolphinsAverageScore, koalasAverageScore);

// const friends = ["Michael", "Sarper", "Ilo"];
// console.log(friends)

// const years = new Array(1, 2, 3, 4);
// console.log(years.length);

//Arrays are immutable
//Array elements are mutable

// const list = ["Sarp", 123, true];
// console.log(list);

// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }

// const years = [2001, 2003, 2008];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);

// const ages = [age1, age2, age3];
// console.log(ages);


// const friends = ["Michael", "Sarper", "Ilo"];
// friends.push("Onur");//Push function returns new lists' length
// console.log(friends);

// friends.unshift("Emircan");//This method adds elements to its beginning

// console.log(friends);

// friends.pop(); //Removes last element of list and returns that element

// console.log(friends.indexOf("Sarper"));
// console.log(friends[0]);
// console.log(friends.includes("Emircan"));


// function calculateTip(price) {

//     if (price < 300 && price > 50)
//         return price * (15 / 100);
//     else
//         return price * (20 / 100);
// }

// const array = [125, 555, 44];
// const tips = [calculateTip(array[0]), calculateTip(array[1]), calculateTip(array[2])];


// console.log(tips);
// const friends = ["Michael", "Sarper", "Ilo"];
// const sarper = {
//     firstName: "Sarper",
//     lastName: "Kahveci",
//     birthYear: 2001,
//     job: "Student",
//     friends: friends,


// calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
// }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     hasDriversLicense: function () {

//         if (this.calcAge() >= 18) return true;
//         else return false;
//     }
// };

// console.log(sarper.firstName);
// console.log(sarper["firstName"]);

// const nameKey = "Name";
// console.log(sarper["first" + nameKey]);

// const asked = prompt("What do you want to know about Sarper");

// console.log(sarper.asked); //Output is undefined because sarper does not have property called asked.
// console.log(sarper[asked]); //Output comes

// if (sarper[asked]) {
//     console.log(sarper[asked]);
// } else {
//     console.log("Undefined");
// }

// sarper.location = "Bursa";


// if (sarper[asked]) {
//     console.log(sarper[asked]);
// } else {
//     console.log("Undefined");
// }

// console.log(sarper);




// console.log(`${sarper.firstName} has ${sarper.friends.length} friends and the best one is ${sarper.friends[2]}`);


// const writer = (yesno) => {
//     if (sarper.hasDriversLicense()) return "has a";
//     else return "has not have a";
// }


// console.log(`${sarper.firstName} is a ${sarper.calcAge()} year old ${sarper.job}, and he ${writer(sarper.hasDriversLicense())} driver's license.`);


// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,

//     calcBmi: function () {
//         return (this.mass / (this.height * this.height));
//     }

// }

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBmi: function () {
//         return (this.mass / (this.height * this.height));
//     }
// }


// if (mark.calcBmi() > john.calcBmi()) {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBmi()}) is higher than ${john.fullName}'s (${john.calcBmi()}) `)i
// } else if (john.calcBmi() > mark.calcBmi()) {
//     console.log(`${john.fullName}'s BMI (${john.calcBmi()}) is higher than ${mark.fullName}'s (${mark.calcBmi()}) `);
// }


// for (let i = 0; i < 10; i++) {
//     console.log("a" + i);
// }


// const sarper = ["Sarper", 22, "student"];
// const types = [];

// for (let i = 0; i < sarper.length; i++) {
//     console.log(sarper[i]);//Reading from array
//     types[i] = typeof sarper[i];//Filling array(We could use push method too.)
// }

// for (let j = 0; j < types.length; j++) {
//     console.log(types[j]);
// }


// let dice = Math.trunc(Math.random() * 6) + 1; //Gives decimal number between 0 and 5



// while (dice !== 6) {
//     console.log(`Number ${dice} comes.`);
//     console.log(dice);
//     dice = Math.trunc(Math.random() * 6) + 1;

// }


const bills = [22, 295, 176, 44, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


function calculateTip(price) {

    if (price < 300 && price > 50)
        return price * (15 / 100);
    else
        return price * (20 / 100);
}

function calcAverage(arr) {
    let numberOfElements = arr.length;
    let total = 0;

    for (let j = 0; j < arr.length; j++) {
        total += arr[j];
    }

    return (total / numberOfElements);
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calculateTip(bills[i]));
    totals.push(bills[i] + calculateTip(bills[i]));
}

console.log(`Bills: ${bills}\n
Tips: ${tips}\n
Totals: ${totals}\n
Average: ${calcAverage(totals)}`);