//arithmetics operators
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(4 / 3);
console.log(4 % 3);

var a = 10;
var isEven = a % 2 === 0; //true
console.log(isEven);

console.log(2 > 3);
console.lpg(2 == "2"); //verifica doar valoarea
console.log(2 === "2"); //verifica valoarea si tipul

console.log(2 != "2");
console.log(2 !== "2");

//logical operators
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(false || false);

console.log(true && false);
console.log(false && true);
console.log(true && true);
console.log(false && false);

var age = 20;
var canDrive = age > 18 ? true : false;
var canDriveMEssage = canDrive ? "poate conduce" : "nu poate conduce";
