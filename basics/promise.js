const promiseOne =  new Promise(function (resolve, reject){
   setTimeout(function () {
console.log("Async task is completed succsessfully ")
resolve();
   } , 3000)
})

promiseOne.then(function(){
    console.log("promise is  fullfilled") ;
} )

/* new promise 
 async  function getallUsers() {
    try {
        const response =  await fetch("https://jsonplaceholder.typicode.com/users") ;
        const  data = await response.json() ;
       console.log(data);
    
    } catch (error) {
        console.log("e ; eroor")
    }
}
getallUsers(); 

*/


fetch('https://jsonplaceholder')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
