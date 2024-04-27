   const mysymbol = Symbol()  ;   // decelrees an symbol 
// create an object 
   const obj = {
    name : "Archit  Yadav" , 
    user_Name  : "archit7820" ,
    [mysymbol] : "mykry_1" ,  
    login_days : ["omday" , "uesday"]

   }

   console.log(obj.name) ;
   console.log(obj["login_days"])
  // console.log(`my username is ${obj.user_Name} and my login days is ${login_days}`);

  console.log(`my username is ${obj.user_Name}`); 
  console.log("checking symbol>>" , obj[mysymbol] , typeof mysymbol , typeof obj.login_days) ;

  /* Object is ddeclared b 2 ways 
   1>> literals  .. won't from   here 
   2>>  constructors  >> forms singletons 
   */

   const obj_conc =  new Object() ;   // declared by constructor forms singleton

   const obj_liter =  {} ;              // declared by literal wont form singleton

  // assigning object in a single array 
    const obj1 = { 1: "a" , 2 :  "b"  ,3 : "c"} ; 
    const obj2 = { 4 : "d" , 5 : "e" , 6 : "f"} ;
     const obj3 = { 4 : "g" , 5 : "h" , 6 : "i" } ;
    

  //   const obj4 = Object.assign({} ,obj1, obj2 , obj3) ;
  const obj4 = {obj1 , obj2}
     console.log( "here  is solution " ,obj4)

     const  user  =[
        {   id : 1 , 
            email : "archit@gmail.com"  ,
            name  : "archit" 
        } ,
        {id : 3, 
            email : "arpit@gmail.com"  ,
            name  : "arpit " ,
        }
        
    ,    {id : 2 , 
        email : "ankitt@gmail.com"  ,
        name  : "ankit " ,
    }   ,
    ] 
   console.log(user[0].email)  
    console.log(Object.keys(user)) ;
    console.log(Object.values(user)) ;
    console.log(Object.entries(user)) ;

// destructuring  of objects 
     const course =  {
        title : "dsa burster" ,
        instructor_course_name : "archit yadav" ,
        price : " 99" ,  
     } 

     // to access element from any object
     console.log(Object.keys(course)) ;   // use object to aplly function to the given object 

     const {instructor_course_name : instru} = (course) ;

    
         console.log(instru) ;


          // similar inplitaion in react as props passing 

         // const func =(props.somthing == {somthing}) => {  } 