function addTwo(num: number) {
  return num + 2;
}
function getUpper(val: string) {
  return val.toLocaleLowerCase();
}
function signUpUser(name: string, email: string) {}
// function getValue(myVal: number):boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return '200 Ok'
// }
const heros = ['Thor', 'Jhon Wick', 'Spiderman'];
const heross = heros.map((hero):string=>{
    return `hero is ${hero}`
})
console.log(addTwo(3));
const up = getUpper("Hello");
console.log(up);
const signup = signUpUser("Najim", "najim@gmail.com");
console.log(signup);
// console.log(getValue(2));
console.log(heross[1]);

export {};
