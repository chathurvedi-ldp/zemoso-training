//Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.
function outer(a,b){
    const m=a();
    console.log("Hi "+b+" the message in f1 is : "+m);
}
function inner(){
    return "The meeting is at 10am";
}
outer(inner,"ram")


//Q2. An arrow function takes two arguments firstName and lastName and returns a 2 
//letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.

const res=(a1,a2)=>{
    return a1.charAt(0)+a2.charAt(0);
}
console.log(res("Roger","Waters"));