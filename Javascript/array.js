arr=[1,2,3,4,'e',"array"]
console.log(arr)
console.log(arr.length);
//shallow copy ->return reference 
//deep copy ->each and every number is copid
arr.push(8);
console.log(arr)
console.log(arr.includes(1));
console.log(arr.indexOf(3));
const newArr=arr.join();
console.log(typeof newArr);
//slice(), splice()
arr1=arr.slice(2,4);
console.log(arr1, arr)
//splice modifiy original array
arr3=arr.splice(2,4,"splice");// splice will insert splice at index 2
console.log(arr3,arr)