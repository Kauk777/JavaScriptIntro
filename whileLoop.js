// UC Find the Magic Number
console.log("Any number between 1 to 100");
let n=73;
let r;
let s=0;
do {
    s=0;
    while(n>0) {
        r=n%10;
        s+=r;
        n=Math.floor(n/10);
    }
    if((s/10)>=1) {
        n=s;
    }
} while((s/10)>=1)
if(s==1)
console.log("Magic Number");
else
console.log("Not Magic Number");

// UC Extend the Flip Coin problem till either Heads or Tails wins 11 times
let val;
console.log("HEAD: 0 and TAIL: 1");
let h=0;
let t=0;
while(h<=11 || t<=11) {
    val=Math.floor(Math.random() * 10) % 2;
    if(val==0)
    h++;
    if(val==1)
    t++;
}
console.log("Head times: "+h+" Tail times: "+t);


