function  say_my_name(number1 , number2/*parameters*/) {
 
console.log(number1 +number2) ;
}
 say_my_name(4,5 /*arguments*/) ;
 

 /*say_my_name  >>   this is function refrence 
say_my_name() >> this is function execution  */

// rest operator or spread function >> it collects all the arguments in a array 

function  cartallvalusincart (...value) {
 
    return value
}
console.log(cartallvalusincart(245 ,445, 5656,5656))

 const user ={
    username : "archit" ,
     price : 99 ,
 }

function HandleObject(anyObject) {
 console.log(`the name of user is ${anyObject.username} , and the price is ${anyObject.price}`)
}
 ///   HandleObject(user)
HandleObject ({
    username : "archit" ,
     price : 99 ,
 })

 //array 
  const anyarray = [22,44,66,77]

   function arrayelements(getarrayelement){
            console.log(`the 2nd element  of array is ${anyarray[1]}`)
   }

   arrayelements(anyarray)