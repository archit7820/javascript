/*    this keyword is  used to show the global return in particular scope */
// to access corrent context we use this keyword
const user  ={
    name : " rajjo" ,
    price  : 300 ,
    welcom_msg : function() {
       // console.log(`welcome : ${this.name} your rate is ${this.price}`);
       // console.log(this)
    }  
}


 user.welcom_msg()
 
user.name  = "savita"  
user.welcom_msg()
// console.log(this)

//  welcome :  rajjo your rate is 300
// { name: ' rajjo', price: 300, welcom_msg: [Function: welcom_msg] }
//  {} >> this keyword in local server if we go for search engine it shows the window function


// function  me_you() {
//     user_name  : "sheela" ,
//     console.log(this.user_name) 

// }
// me_you()
// note important  ::  this keyword is  return  value in object type not in function type : if we close it inside the fucntion it return undefine 

// IN arrow function this  keword return emty field ;
//  const arrow =() =>{
//    console.log(this)
//  }
//  arrow()
/*ARROW FUNCTION
() =>{}   ;  >>  HOLD IN VARIBLE >> const new_func  = (parameters) =>{
    return call 
}   ; 

call funtion if want to console
()=>()  ; >>  also arrow function >> const add =  (paramerter) =>(arguments)  // withoout return statmennt 

*/
