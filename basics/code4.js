//converstion 
let value   =   45 
let value1  =   "45"
let value2  =   "String"
let value3  =   "" 
let value4  =   null 
let value5  =   undefined 
let value6  =   true 
let value7  =   false 
let value8  =   "33abc67"
let value9  =   1 
let value10 =   0 

let  new_Value   = Number(value1)
let  new_Value1  = Number(value8)
let  new_Value2  = Number(value4)
let  new_Value3  = Number(value5)
let  new_Value4  = Number(value6)
let  new_Value5  = Number(value7)


let new_Value6   =   Boolean(value9)
let new_Value7   =   Boolean(value10)
let new_Value8  =   Boolean(value3)
let new_Value9   =   Boolean(value2)
let new_Value10  =   Boolean(value4)
let new_Value11  =   Boolean(value5)


console.table([new_Value,new_Value1,new_Value2,new_Value3,new_Value4,new_Value5,new_Value6,new_Value7,new_Value8,new_Value9 ,new_Value10 , new_Value11])