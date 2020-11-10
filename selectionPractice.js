// UC1 reading 5 Random 3 Digit values and then outputs the minimum and maximum
let valArr=[];
let max=0;
let min;
for(let val=0;val<5;val++) {
    valArr[val] = Math.floor(Math.random() * 1000);
    if(valArr[val]>max) {
        max=valArr[val];
    }
}
min=valArr[0];
for(let val=0;val<5;val++) {
    if(valArr[val]<min)
    min=valArr[val];
}

console.log("Max of "+valArr[0]+","+valArr[1]+","+valArr[2]+","+valArr[3]+","+valArr[4]+" is: "+max+" and min is: "+min);

// UC2 program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise
//let day=prompt("Enter day:");
//let month=prompt("Enter month:");
let day=18;
let month=6;
let result=false;
if(month>=3 && month<=6) {
    if(month==3 && (day>=20 && day<=(30+(month%2))))
    result=true;
    if((month>3 && month<6) && day<=(30+month%2))
    result=true;
    if(month==6 && day<=20)
    result=true;
}
else
result=false;
console.log("Given month "+month+" day "+day+" result is: "+result);

// UC3 Finding year is leap year or not
let year=2017;
if((year/1000)>1 && (year/1000)<10) {
    if(year%4==0 && year%400==0 && year%100==0)
    console.log("Year "+year+" is Leap Year");
    else if(year%4==0 && year%100!=0)
    console.log("Year "+year+" is Leap Year");
    else
    console.log("Year "+year+" is Not Leap Year");
}
else
console.log("Year "+year+" is Not Leap Year");

// UC4 program to simulate a coin flip and print out "Heads" or "Tails" accordingly
let val=Math.floor(Math.random() * 10) % 2;
console.log("HEAD: 0 and TAIL: 1")
if(val==0)
console.log("value: "+val+" HEADS");
else
console.log("value: "+val+" TAILS");