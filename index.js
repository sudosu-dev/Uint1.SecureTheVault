let code1;
code1 = 7 + 3;
let code2 = 160 - 240 / 2;
let code3 = 239 % 40;
let message = "The vault has been secured. The combination is:";
let codeA =
  '"' + String(code1) + "-" + String(code2) + "-" + String(code3) + '"';
let codeB = `"${code1}-${code2}-${code3}"`;
console.log(message, codeA, codeB);
