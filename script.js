let obj1={
    name:'abc',
    age:22
}
let obj2=obj1
obj2.name='xyz';
console.log(obj1.name,obj1.age)


console.log(5+'5');
console.log(5-'5');
console.log(5=='5');
console.log(5==='5');
console.log(5!='5')


let arr=[1,'new',null]
console.log(arr);




let mark =30
if(mark<=40){
    console.log('pass')
}else{
    console.log('fail')
}


let res = mark>=40?'fail':'pass'
console.log(res);

// Even or Odd
let n=5
if(n%2==0){
    console.log('even');
}else{
    console.log('odd');
    
}

//Using Ternary Operator
let r=n%2==0?'even':'odd'
console.log(r);

//Bitwise Operators
console.log(10&6); //And
console.log(10|6); //or
console.log(10^6); //Xor
console.log(~6); //Not
console.log(6>>1);
console.log(6<<1);

//Function
function add(a,b){
    console.log(a+b); 
}

//Arrow Function
const sub=(a,b)=>{console.log(a-b)}

//Multiplication using Arrow Function
const mul=(a,b)=>{console.log(a*b)}

//Callback: passing a function instead of parameters
const cal=(a,b,fun)=>{
    fun(a,b)
}
cal(4,3,add)
 
//Looping: For in
let num=[2,3,4,5,6,7,8]
for(let i in num){
    console.log(num[i]); // we can access both indexes and values
    
}


//Looping: For of
let num1=[2,3,4,5,6,7,8]
for(let i of num){
    console.log(i); //we can access only values
    
}


//Object
let num2=[2,3,4,5,6,7,8]
let obj={
    name:'abc',
    city:'asd',
    age:22
}
for(let index in obj){
    console.log(obj[index]);
    
}

//Optional chaining
let num3=[2,3,4,5,6,7,8]
let ob={
    name:'abc',
    state:{
        city:'asd'
    },
    age:22
}
console.log(ob?.state?.city);







