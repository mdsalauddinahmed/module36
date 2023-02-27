// 
const kodomAli ={
    name:'kodom ali',
    money:5000,
    study:'math',
     subjects:['calculus','algebra','geometry'],
     exam: function (){
        console.log(this)
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
 kodomAli.exam();

const badamAli = {
    name:'badam ALi',
    money:800
}
badamAli.exam=kodomAli.exam;
badamAli.exam();