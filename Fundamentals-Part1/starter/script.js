/*let firstName = "Sercan";
let secondName;
console.log(typeof secondName);

secondName = "Kahveci";

let age = 19;

console.log(firstName);
console.log(secondName);
console.log(typeof secondName);

console.log("Name: " + firstName + " Second Name: " + secondName + " Age: " + age);
*/

// let age = 30;
// age = "name";


// const birthYear = 1990;
//when you use const you should initialize it always
// birthYear = 13;  cannot change

// let name;
// name = "sarper";

// const birthYear = 2001;

// console.log(name + " 's birth year is " + birthYear);

// const now = 2023;
// const ageSarper = now - 2001;
// const ageSercan = now - 2003;

// console.log(now - 2001 < now - 2003);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = ((ageSarper + ageSercan) / 2);
// console.log(averageAge);


// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;

// const bmiMark = massMark / (heightMark ** 2);
// const bmiJohn = massJohn / (heightJohn ** 2);

// const markHigherBmi = (bmiMark > bmiJohn);

// console.log("Mark's BMI: " + bmiMark +
//     "John's BMI: " + bmiJohn)
// console.log("Is Mark's BMI higher than John's ? " + markHigherBmi);

////////////////////////////////
// const firstName = "Sarper";
// const job = "Student";
// const birthYear = 2001;
// const year = 2023;

// const jonas = "I' m " + firstName + " , a " + (year - birthYear) + " year old " + job;

// console.log(jonas);

// const sarperNew = `I 'm ${firstName}, a ${year - birthYear} years old ${job} !`;

// console.log(sarperNew);
////////////////////////////////

//String with multiple lines

// console.log("String \n\
// with\n\
// multiple\n\
// lines");

//-> ters tikle direkt yeni satıra geçiyor.
// console.log(`string
// with
// multiple
// lines.`)




// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log("Can take drivers license.");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Should wait another ${yearsLeft} years.`)
// }


// const birthYear = 2010;
// const century = ((birthYear - (birthYear % 100)) / 100) + 1;

// if (century >= 20) {
//     console.log(century);
// } else {
//     console.log(century);
// }


// const onurMass = 85;
// const sarperMass = 104;
// const onurHeight = 1.84;
// const sarperHeight = 1.94;

// const sarperBmi = sarperMass / (sarperHeight ** 2);
// const onurBmi = onurMass / (onurHeight ** 2);

// if (sarperBmi < onurBmi) {
//     console.log("Onur's BMI is higher than Sarper's!");
// } else if (sarperBmi === onurBmi) {
//     console.log("BMI values are equal.");
// } else {
//     console.log("Sarper's BMI is higher than Onur's");
// }

// console.log(sarperBmi);
// console.log(onurBmi);



//Type conversion

// const inputYear = "1991";
// console.log(Number(inputYear) + 10);
// console.log(inputYear + 10)


// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(typeof String(23), typeof 23);

// //Type Coercion

// console.log("He is " + 23);
// console.log("He is " + "23"); //These 2 lines are equal

// console.log(34 - "13" - "1");
// console.log("22" * "3");


// let n = "1" + 1; //number 1 converted to string and n = 11
// n -= 1; // n = 11 minus 1 = 10
// console.log(n);



//5 Falsy values : 0, "", undefined, null, NaN

// console.log(Boolean(0)); //result is false
// console.log(Boolean("13")); //true
// console.log(Boolean("")); //false
// console.log(Boolean(undefined));


// console.log("18" == 18); //True Double equal coercions
// console.log("18" === 18); //False 3 equals don't coercions
//Use 3 equal type

//USER INPUT --> prompt()

// const fav = Number(prompt("Favorite number: "));

// console.log(fav);
// console.log(typeof fav);

// if (fav !== 23) console.log("Nope");
// else console.log("Yeap buddy!");

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const shouldDrive = hasGoodVision && hasDriversLicense;

// if (shouldDrive) console.log("Able to drive")
// else console.log("Someone else drive")


// const day = "saturday";

// switch (day) {
//     case "monday": console.log("monday bro"); break;
//     case "tuesday": console.log("tuesday bro"); break;
//     case "wed": console.log("wednesday bro"); break;
//     case "thursday": console.log("thursday bro"); break;
//     case "friday": console.log("friday bro"); break;
//     case "saturday": console.log("saturday bro"); break;
//     case "sunday": console.log("sunday bro"); break;
//     default: console.log("Not a valid day"); break
// }




const billValue = 275;
const tipValue = billValue <= 300 && billValue >= 50 ? billValue * (15 / 100) : billValue * (20 / 100);

console.log("Total value: " + (billValue + tipValue));







































