// UC1 Single digit random number
let val = Math.floor(Math.random() * 10);
console.log("Single digit Random Number: "+val);

// UC2 random dice value from 1-6
val = (Math.floor(Math.random() * 10) % 6) + 1;
console.log("Dice value: "+val);

// UC3 adding two random dice value
let val1 = (Math.floor(Math.random() * 10) % 6) + 1;
let val2 = (Math.floor(Math.random() * 10) % 6) + 1;
console.log("Adding "+val1+" and "+val2+" random Dice number: "+(val1+val2));

// UC4 reading 5 Random 2 Digit values then finding their sum and the average
let v1 = Math.floor(Math.random() * 100);
let v2 = Math.floor(Math.random() * 100);
let v3 = Math.floor(Math.random() * 100);
let v4 = Math.floor(Math.random() * 100);
let v5 = Math.floor(Math.random() * 100);
let sum=v1+v2+v3+v4+v5;
console.log("Sum of "+v1+","+v2+","+v3+","+v4+","+v5+" is: "+sum);
console.log("Average: "+(sum/5));

// UC5 Unit conversion
valueInInches=42;
console.log("a. 42 in in feet: "+(valueInInches/12));
valueInMts=(60*40*144*2.54*2.54)/10000;
console.log("b. Rectangle plot 60x40 feet in mts: "+valueInMts);
console.log("c. Area of 25 such plots: "+(25*valueInMts));




