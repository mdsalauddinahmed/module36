const bottle = {
    color:'yellow',
    price:50,
    iceCleaned:true,
    capacity:1
};
const keys = Object.keys(bottle)
// console.log(keys)
const values = Object.values(bottle)
// console.log(values)
const pair  = Object.entries(bottle)
console.log(pair)
// const toDimensional = [
//     [ 'color', 'yellow' ],
//     [ 'price', 50 ],
//     [ 'iceCleaned', true ],
//     [ 'capacity', 1 ]
//   ]

console.log(bottle)
// Object.seal (bottle)
Object.freeze(bottle)
delete bottle.iceCleaned;
bottle.price=1000;
bottle.height=12;
console.log(bottle)