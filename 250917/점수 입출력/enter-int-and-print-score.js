const fs=require("fs");
let num=fs.readFileSync(0).toString();
console.log("Your score is %d point.",num);