const fs = require("fs");

// stdin에서 입력 읽기, 공백 기준으로 나누기
let input = fs.readFileSync(0, "utf-8").trim().split(" ");

// 입력을 숫자로 변환
let a = Number(input[0]);
let b = Number(input[1]);

// 더한 값 출력
console.log(a + b);
