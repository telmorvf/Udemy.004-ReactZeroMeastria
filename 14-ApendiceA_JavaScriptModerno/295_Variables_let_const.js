// 295 - var, let e const
console.log('295 - var, let e const -----------')
var x = 10
var y = 15

// altero o escopo global pelo seguinte bloco if
// o x de fora passa ter o valor do x do bloco if
if (y > 10){
    var x = 5
    console.log(x)
}
console.log(x)
//
console.log('----------------------------------')
let a = 10
let b = 15

if (b > 10){
    let a = 5
    console.log(a)
}
console.log(a)
//
console.log('----------------------------------')
let i = 100
console.log('fora',i)

for(let i=0; i<=5; i++){
    console.log('dentro do for',i)
}
console.log('fora',i)

//
console.log('----------------------------------')

function logName(){
    const name = 'Fernandes'
    console.log(name)
}
const name= 'Telmo'
logName()
console.log(name)