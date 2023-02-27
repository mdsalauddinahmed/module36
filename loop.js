const numbers =[12,54,65,3,25]
// for(const number of numbers){
//     console.log(number)
// }


const bottle = {
    color:'yellow',
    price:50,
    iceCleaned:true,
    capacity:1
};
// for of can't use an object
// for(const prop of bottle){
//     console.log(prop)
// }


// first option to loop through an object

const keys = Object.keys(bottle)
/* 
3 ways to read object properties
bottle.color
bottle['color']
bottle[color]

*/

// console.log(keys)

for( const key of keys){
    // console.log(key,bottle[key])
}



// for in loop  we are always use it

for(const key in bottle){
    const value =bottle[key];
   // console.log(key,value)
}

// advance

const pair = Object.entries(bottle)
//console.log(pair)
for (const [key,value] of Object.entries(bottle)){
    // destructuring the array property value
    console.log([key,value])
}