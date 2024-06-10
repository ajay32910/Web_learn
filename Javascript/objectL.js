//object store key value pair
//object literals
//object constructor from singleton
//symbol is primitive data type and always unique use and immutable
const sym1=Symbol("s1");//new keyword use nhi krte object create krne ko
const sym2=Symbol("s1");
//console.log(sym1==sym2);
var obj={
   firstName:"rupesh",
   lastname: "gupta",
   email:"rupeshgupta@gmail.com",
   number:"8102224555",
   [sym1]:"symbol data"//write is square bracket to treat it as sym1

}
console.log(obj[sym1])
// console.log(obj);
// console.log(obj.firstName);
// console.log(obj["lastname"]);
Object.freeze(obj);
obj.numer="810222456";
console.log(obj);
