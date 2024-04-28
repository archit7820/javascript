/*
values like below mestioned are treatedd as false values 

0
""
null
undefined
NaN
false
-0
BigInt 0n 



truly values
 "0" , "value any inside value" , "falsy values" , [] , {} , function(){}  */

 const username = "" 
 const name = {} 

 if(username.length ===0) {
    console.log("username is empty")
 }else{
    console.log("username is exists")
 }
 if(Object.keys(name).length ===0) {   // Object.keys(name) >> return array of elements of name object
    console.log("name is empty")
 }else{
    console.log("name is exists")
 }


 // key pointers

  console.log(false==0) ; 
  console.log(false == '') ; 
  console.log(0 == "") ; 
