// UC function to check if the two numbers are Palindromes
function palindrome(a) {
    let rev=0;
    let num=a;
    while(a>0) {
        rev=(rev*10)+(a%10);
        a=parseInt(a/10);
    } 
    if(rev==num)
    return "PALINDROME";
    else
    return "NOT PALINDROME";
}
let res;
res=palindrome(102201);
console.log("102201 is: "+res);
res=palindrome(102001);
console.log("102001 is: "+res);

// UC Take a number from user and check if the number is a Prime then show that its palindrome is also prime
let n=101;
function checkPrime(a) {
    let s=0;
    for(let i=1;i<=a;i++) {
        if(a%i==0)
        s++;
    }
    if(s==2)
    return "PRIME";
    else
    return "NOT PRIME";
}
res=checkPrime(n);
console.log(res);
res=palindrome(n);
console.log(res);

