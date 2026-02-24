console.log("Hello, world!");
document.write("hello world");
var num=10;
console.log(num);
console.log(typeof(num));
num=false;
var sayHello=function(){    //function in a variable; type is function
    alert("hello world");
}
var numarray=[1,2,3,4,5];
var animals=new Array("dog","cat","mouse");   //dynamic array
var person={    //object   person.age is used to access the age property of the person object
    name:"Sanvi",
    age:19,
}
const sym1=Symbol(4)
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){console.log("true");}
else{console.log("false");}

