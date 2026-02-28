//Array Methods
/*
map(): creates a new array by applying a function to every element of the original array.
✔ Returns a new array
✔ Does NOT change the original array

filter(): creates a new array containing only the elements that satisfy a given condition.

reduce(): Combines all elements of an array into a single value.

find(): Returns the element in an array that matches a given condition.
👉 If no element matches, it returns undefined.
*/
//***Using Map***
let arr=[1,2,3,4,5,6]
const addone=(num)=>{return num}
let res=arr.map(addone)
console.log(res);

let double=arr.map((num)=>num*5)
console.log(double);

//Objects
let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:9500},
    {id:3,name:'keyboard',price:2000}
]
let productName=products.map((products)=>{console.log(products.name)})



//***Using Filter: Condition based***
let arr1=[1,2,3,4,5,6]
let b=arr1.filter((num)=>num%2==0)
console.log(b);

let product=products.filter((p)=>p.price>6000)
console.log(product);



//***Using Reduce***
let arr3=[1,2,3,4,5,6]
//if we use flower brackets return will used or else no need to use return
let sum=arr3.reduce((total,current)=>{return total+current},0)
console.log(sum);

let sum1=products.reduce((tot,cur)=>{return tot+cur.price},0)
console.log(sum1);



//Using Find: similar to filter
let a=products.find(p=>p.id==1)
console.log(a);



/*Destructuring: A JavaScript feature that allows you to extract values 
from an array or object and assign them to variables in a simple way.*/

let arr2=[11,22,33,44,55,66,77]
// let[x,y]=arr2 
let[x,,y]=arr2      //for array using square brackets
console.log(y);


//Object Destructuring
let student={
    name:"chandu",
    dept:"cse",
    age:20
}
const {name,dept}=student //for object using curly braces and variables & parameters in student must be same.
console.log(name,dept);

//Example
let car={
    brand:"BMW",
    year:2024,
    price:20000000
}
const {brand}=car
console.log(brand);


//Spread Operator (...): 
// Used to copy or expand elements of an array or object.
let c=[2,3,4,5,6,7,1]
let d=[...c]
console.log(d);

// let bmw={...car}
let newcar={...car,year:2026} //here we can change the values
console.log(newcar);


//Destructuring and Spread operator
let b1=[1,2,3,4,5,6,7]
let[f,...other]=b1
console.log(f,other);



/*Promises: 
    has 3 states
        1.pending->waiting
        2.resolved->if it success
        3.rejected->if it failed
*/
//Mainly used in Backend to get data 
//In JavaScript, Promise is a built-in constructor and it must start with a capital letter.
const promise = new Promise((resolve,reject)=>{ 
    let success=false
    if(success){
        resolve("data received successfully")
    }else{
        reject("error fetching data")
    }
})
promise.then((data)=>console.log(data)).catch((error)=>console.log(error))



/*async/await->cleaner way for promises
async->make function return promise
await->wait until promise to finish
*/
async function fetchData(){
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await res.json()
        //console.log(data);
        data.map((user)=>console.log(user.address.city)) //display all users emails
    }catch(error){
        console.log(error);
        
    }
}
fetchData()





