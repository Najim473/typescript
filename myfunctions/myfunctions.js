"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toLocaleLowerCase();
}
function signUpUser(name, email) { }
// function getValue(myVal: number):boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return '200 Ok'
// }
var heros = ['Thor', 'Jhon Wick', 'Spiderman'];
var heross = heros.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(addTwo(3));
var up = getUpper("Hello");
console.log(up);
var signup = signUpUser("Najim", "najim@gmail.com");
console.log(signup);
// console.log(getValue(2));
console.log(heross[1]);
