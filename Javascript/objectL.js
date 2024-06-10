//object store key value pair
//object literals
//object constructor from singleton
//symbol is primitive data type and always unique use and immutable
 const sym1= Symbol("s1");//new keyword use nhi krte object create krne ko
// const sym2=Symbol("s1");
// //console.log(sym1==sym2);
var obj={
   firstName:"rupesh",
   lastname: "gupta",
   email:"rupeshgupta@gmail.com",
   number:"8102224555",
   [sym1]:"symbol data"//write is square bracket to treat it as sym1

}
// console.log(obj[sym1])
// // console.log(obj);
// // console.log(obj.firstName);
// // console.log(obj["lastname"]);
// Object.freeze(obj);
// obj.numer="810222456";
// console.log(obj);
var obj1={1:"a",2:"b",3:"c"};
var obj2={4:"d",5:"e",6:"f"};
const obj3={obj1,obj2}//object ke inside object create krta hai
var obj4=Object.assign({},obj1,obj2);//1->destination then bakki sab copy hotah hai
// console.log(obj3.obj1["1"]);
// console.log(obj4)
// const obj5={...obj1,...obj2};
// console.log(obj5)
//console.log(Object.keys(obj));//return krta array of key
//console.log(Object.values(obj));//return array of values
console.log(Object.entries(obj))//array of array with key vlaue pair

