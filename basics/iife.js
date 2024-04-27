/* IIFE >>> IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
IIFE is commonly used to create a separate scope for variables and to avoid polluting the global namespace.
The main benefits of using IIFE are:

Encapsulation: Variables and functions defined inside an IIFE are not accessible from outside, which helps prevent naming conflicts and pollution of the global namespace.
Isolation: IIFE creates a new scope for variables, allowing you to safely define variables without affecting the surrounding code.
Initialization: IIFE can be used to initialize variables or set up configurations immediately when the script loads.

*/

 // normal function
function green() {
    console.log(`function execututed`) ;
}
green()  ;
// iife
 ((green)=> {console.log(`iife running ${green}`)})('arhcit')    //> remove green only use>> () for function call  
 // step 2 add bracket for function so it works as fuction refence and () works as function call 

