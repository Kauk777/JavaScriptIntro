// UC1 program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n
let n= 2;
let val;
for(let i=1;i<=n;i++) {
    val=Math.pow(2,i);
    console.log("Table of "+val+" : ");
    for(let j=1;j<=10;j++) {
        console.log(val+"*"+j+"="+(val*j));
    }
}

// UC2 program that takes a command-line argument n and prints the nth harmonic number
n=7;
let sum=0;
for(let i=1;i<=n;i++) {
    sum+=(1/i);
}
console.log(n+"th Harmonic Number: "+sum);

// UC4 program to take a range of number as input and output the Prime Numbers in that range
let num=[7,6,17,24,2];
let prime=[];
let s;
let k=0;
for(let i=0;i<num.length;i++) {
    s=0;
    for(let j=1;j<=num[i];j++) {
        if(num[i]%j==0)
        s++;
    }
    if(s==2) {
        prime[k++]=num[i];
    }
}
console.log("Prime Numbers are: ");
for(let i=0;i<k;i++)
console.log(prime[i]);






