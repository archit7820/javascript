// new concept >> Nullish Coalescing Operator : null defined
/* NOTES :: 
The nullish coalescing operator ?? is a relatively new addition to JavaScript,
 introduced in ECMAScript 2020. It provides a way to handle default values for
  cases where null or undefined values are present, while explicitly excluding
   other falsy values like 0, '' (empty string), false, and NaN.

The syntax of the nullish coalescing operator is a ?? b. 
It returns the value of a if a is not null or undefined; 
otherwise, it returns the value of b.
const defaultValue = 'default';

let value1;
let value2 = null;
let value3 = 0;

console.log(value1 ?? defaultValue); // Output: 'default'
console.log(value2 ?? defaultValue); // Output: 'default'
console.log(value3 ?? defaultValue); // Output: 0 ,

The nullish coalescing operator ?? is a relatively new addition to JavaScript, introduced in ECMAScript 2020. It provides a way to handle default values for cases where null or undefined values are present, while explicitly excluding other falsy values like 0, '' (empty string), false, and NaN.

The syntax of the nullish coalescing operator is a ?? b. It returns the value of a if a is not null or undefined; otherwise, it returns the value of b.

Here's how it works:

javascript
Copy code
const defaultValue = 'default';

let value1;
let value2 = null;
let value3 = 0;

console.log(value1 ?? defaultValue); // Output: 'default'
console.log(value2 ?? defaultValue); // Output: 'default'
console.log(value3 ?? defaultValue); // Output: 0
In this example:

value1 is undefined, so the expression value1 ?? defaultValue evaluates to 'default'.
value2 is null, so the expression value2 ?? defaultValue evaluates to 'default'.
value3 is 0, which is a falsy value, but it is not null or undefined, so the expression
 value3 ?? defaultValue evaluates to 0.
The nullish coalescing operator is particularly useful when you want to provide a 
default value only if a variable is explicitly null or undefined, and you want to 
treat other falsy values differently. It's a concise and readable way to handle such cases in JavaScript.

 IN SIMPLE WORD WE USE THIS TO AVOID NULL AND UNDEFINED values INSPITE OF THSE VALUES WE PUT FLAG VALUES 

*/  

 var1  = 5??10        ;    //     >> 4
 var2 =  null ?? 3     ;   //  >> 3
 var3 = undefined ??4 ;    //   >> 4
 var4 = null ??5??4   ;    //  >>5




