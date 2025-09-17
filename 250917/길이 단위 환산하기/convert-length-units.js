const fs=require("fs");
let ft=30.48;
let num=Number(fs.readFileSync(0).toString());
console.log((ft*num).toFixed(1));