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

//function
function add(a,b){
    console.log(a+b); 
}
add(2,4)









