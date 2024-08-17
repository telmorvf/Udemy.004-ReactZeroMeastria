// 296 - Arrow functions
console.log('296 - Arrow functions ------------')
console.log('----------------------------------')

const sum = function (a, b){
    return a + b
}

const arrowSum1 = (a, b) => {
    return a + b
}

const arrowSum2 = (a, b) => {a + b}

const arrowSum3 = (a, b) => a + b

console.log('Simple function:  ', sum(5, 5))
console.log('Arrow function 1: ', sum(5, 5))
console.log('Arrow function 2: ', sum(5, 5))
console.log('Arrow function 3: ', sum(5, 5))

console.log('----------------------------------')
// função com e sem argumentos
const greeting = (name) =>{
    if (name){
        return 'Olá ' + name + '!'
    } else{
        return 'Olá!'
    }
}
console.log(greeting('Fernandes'))
console.log(greeting())
console.log('----------------------------------')
// sem argumentos

const testeArrow = () => console.log('teste!')
testeArrow()

console.log('----------------------------------')
// this

const user = {
    name: "Telmo",
    sayUserName(){
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log('username: ' + self.name)
        }, 500)
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log('username: ' + this.name)
        }, 700)
    },
}
user.sayUserName()
user.sayUserNameArrow()