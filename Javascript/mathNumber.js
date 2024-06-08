//Math.function()
//abs, floor(),ceil(),round(),sqrt(),min,max
console.log(Math.random());//0-.9
let min=10;
let max=20;
//generate number from 10 tor 20
// let ran=Math.floor(Math.random()*(max-min+1))+min;
// console.log(ran);
for(let i=0;i<10;i++){
    console.log(genNumber());
}
function genNumber(){
    let ran=Math.floor(Math.random()*(max-min+1))+min;   
    return ran; 

}