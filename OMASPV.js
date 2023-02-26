const student ={
    name:'kodom ali',
    money:5000,
    study:'math',
     subjects:['calculus','algebra','geometry'],
     exam: function (){
        return this.name + ' '+ 'is participating in an exam'
     },
     improve:function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
     },
     treatDay: function(amount,tips=50){
        this.money=this.money - amount-tips;
        return this.money;
     }
}
const output = student.exam();
//  console.log(output)
const reExam = student.improve('math')
// console.log(reExam)
 const remaining =student.treatDay(900);
// console.log(remaining)

const dolaRemaining = student.treatDay(500,100)
console.log(dolaRemaining)
