try{
    var x=y+10;
}
catch(error){
    console.log("error");
}

localStorage.setItem("name","saanvi");
var name1=localStorage.getItem("name");
console.log(name1);
localStorage.removeItem("name"); //remove item from local storage

var user={name:"saanvi",age:20};
localStorage.setItem("user",JSON.stringify(user)); //store object as string
var user1=JSON.parse(localStorage.getItem("user")); //retrieve object from local storage
console.log(user1.name,user1.age);
