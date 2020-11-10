// UC1 Reading a single digit number and write the number in word using Case
let val=Math.floor(Math.random() * 10);
console.log("Reading value: "+val)
switch(val) {
    case 0:
        console.log("ZERO");
        break;
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("THREE");
        break;
    case 4:
        console.log("FOUR");
        break;
    case 5:
        console.log("FIVE");
        break;
    case 6:
        console.log("SIX");
        break;
    case 7:
        console.log("SEVEN");
        break;
    case 8:
        console.log("EIGHT");
        break;
    case 9:
        console.log("NINE");
        break;
    default:
        console.log("INVALID");
}

// UC2 Read a Number and Display the week day (Sunday, Monday,...)
let dayVal=new Date().getDay(); // CurrentDay
val= Math.floor(Math.random() * 10) % 7;
let day;
console.log("Day is: "+val);
switch(val) {
    case 0:
        day="SUNDAY";
        break;
    case 1:
        day="MONDAY";
        break;
    case 2:
        day="TUESDAY";
        break;
    case 3:
        day="WEDNESDAY";
        break;
    case 4:
        day="THURSDAY";
        break;
    case 5:
        day="FRIDAY";
        break;
    case 6:
        day="SATURDAY";
        break;
    default:
        day="INVALID";
}
console.log(day);

// UC4 program that takes User Inputs and does Unit Conversion of different Length units
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");
let value=72;
let result;
val= (Math.floor(Math.random() * 10) % 4) +1;
switch(val) {
    case 1:
        result= value*12;
        console.log(value+" Feet = "+result+" Inch");
        break;
    case 2:
        result= (value*12*2.54)/100;
        console.log(value+" Feet = "+result+" Meter");
        break;
    case 3:
        result= value/12;
        console.log(value+" Inch = "+result+" Feet");
        break;
    case 4:
        result= (value*100)/(2.54*12);
        console.log(value+" Meter = "+result+" Feet");
        break;
    default:
        console.log("INVALID");
}

