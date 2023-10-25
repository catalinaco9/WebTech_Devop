var arr = [12, 34, 516, 1, 8, 516, 5, 23, 516, 6, 516];

console.log(arr[0]);
console.log(arr[3]);
console.log(arr[5]);

for (var i = 0; i <= arr.length - 1; i++) {
  console.log("La indexul: " + i + " se afla elementul " + arr[i]);
}

console.table(arr);

var max = arr[0];
for (var i = 0; i <= arr.length - 1; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

var maxIndexes = [];
for (var i = 0; i <= arr.length - 1; i++) {
  if (arr[i] == max) {
    maxIndexes.push(i);
  }
}
console.log("Max number is: " + max + " and it's indexes are: " + maxIndexes);

//Strings

var arr1 = ["A", "n", "a", " ", "a", "r", "e", " ", "m", "e", "r", "e", "."];

console.log(arr1[0]);
console.log(arr1[arr.length - 1]);

var str = "Ana are mere.";

console.log(str[0]);
console.log(str[str.length - 2]);

///specific strings

var words = str.split(" ");
console.log(words);

var dateArr = ["12", "02", "2023"];
var dateStr = dateArr.join("/");
console.log(dateStr);

var a = "Ana";
var b = "are";
var c = "mere";

var concatStr = a + " " + b + " " + c;
console.log(concatStr);

var concatStr1 = a.concat(" ", b, " ", c);
console.log(concatStr1);

var name = "Costel";
var age = 35;

console.log("Ma numesc " + name + " si am " + age + " ani.");

console.log("Ana are mere".indexOf("are")); //nme spune de la ce index incepe cuvantul "are"

var cnp = "192121223234";
var cnpArr = cnp.split("");
console.log(cnpArr);
cnpArr[0] = 2;
cnp[0] = 2;
cnp = "2" + cnp.substring(1, cnp.length);
console.log(cnp);
console.log(cnpArr);
console.log(cnp.substring(1, 3)); //nu il ia in conssiderare si pe ultimul index

console.log("Ana are mere".toLowerCase());
console.log("Ana are mere".toUpperCase());

console.log("      Ana are mere     ".trim());
