// function fun1(v1){
//     console.log(`i am function ${v1}`)
//     return 1;
// }
// var x=fun1(1)
// console.log(x)

const obj={
    fname:"rupesh",
    lname:"gupta",
    //how to define function inside obj
    print:function(){
        console.log(`this is ${this.fname} and last name ${this.lname}`);
        //console.log(this);
    }


}
obj.print();// how to call function of object     
const fun2=function(){
    const user="username";
    console.log(this.user)//this works inside object
}  
fun2()
const fun3=()=>{
    const user="username";
    console.log(this.user);//also can't use inside arrow function
}
fun3()
//()=>{}//basics of arrow function
//implict return
const addTwo=(num1,num2)=>(num1+num2)
//return object
const fun4=()=>({name:"uers"})
console.log(fun4())
//imideately invoked function
//IIFE, how to write name iffe, iffe, two iife
// (function fun5(){
//     console.log("database connected");
// })();
//fun5()
// ((rec)=>{
//     console.log("another databse",rec);
// })("parameter")
// //all this function are working in chrome