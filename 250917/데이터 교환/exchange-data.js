let [a,b,c]=[5,6,7];
let temp;
temp=b;
b=a;
c=b;
c=temp;
console.log(`${a}`);
console.log(`${b}`);
console.log(`${c}`);