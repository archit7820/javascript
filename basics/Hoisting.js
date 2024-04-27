 // scope and nested scope 

 // what is closure >> depends on DOM

 // example of hoaisting or value cannot be access in this type of function decaeraution 
    addTwo( ) ;
   const addTwo = function(num){
    return  num + 2 }

    var myVariable;
console.log(myVariable); // Output: undefined
myVariable = 10;

 //  correctly access

function myFunction() {
    console.log("Hello, world!");
  }
  
  myFunction(); // Output: "Hello, world!"
  

  //  value can be acssess in this type function 
  console.log(addone (5) )
function addone(num) {
    return num + 1
}