console.log('----------------------------------')
console.log('295 - var, let e const -----------')
console.log('----------------------------------')
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





console.log('----------------------------------')
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
// retirados só para continuar os exercícios seguintes
//user.sayUserName()
//user.sayUserNameArrow()



console.log('----------------------------------')
console.log('297 - Método filter --------------')
console.log('----------------------------------')

const arr = [1, 2, 3, 4, 5]
console.log(arr)

const higNumbers = arr.filter((n) => {
    if (n >= 4){
        return n
    }
})
console.log(higNumbers)

const users = [
    {name: 'Telmo', available: true},
    {name: 'Ricardo', available: false},
    {name: 'Valentim', available: true},
    {name: 'Fernandes', available: false},
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)
console.log('Available Users:     ', availableUsers)
console.log('Not Available Users: ', notAvailableUsers)





console.log('----------------------------------')
console.log('298- Método map -----------------')
console.log('----------------------------------')

const products = [
    {name: 'amisa', price: '10.99', category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: '49.99', category: 'Eletro'},
    {name: 'Fogão', price: '400.0', category: 'Eletro'},
    {name: 'Calça Jeans', price: '50.99', category: 'Roupas'},
]

// Alterei o objeto com map
products.map((product) => {
    if(product.category === 'Roupas'){
        product.onSale = true
    }
})
console.log(products)





console.log('----------------------------------')
console.log('299 - Template literals ----------')
console.log('----------------------------------')

const userName = 'Telmo'
const age = 30
console.log(`O meu nome é ${userName} e tenho ${age} anos.`)





console.log('----------------------------------')
console.log('300 - Destructuring --------------')
console.log('----------------------------------')

// array
const fruits = ['Maçã','Laranja','Mamão']
const [f1, f2, f3] = fruits
console.log(fruits)
console.log('f1: ', f1,'f2: ', f2, 'f3: ', f3)

// objects
const productDetail = {
    name: "Mause",
    price: 39.99,
    category: "Periféricos",
    color: "cinza",
}
const {
    name: productName,
    price,
    category: productCategory,
    color
} = productDetail

console.log(
    `O produto é ${productName}, custa ${price
    }€, pertence à categoria ${productCategory}, com a cor ${color}.`
)





console.log('----------------------------------')
console.log('301 - Spread Operator ------------')
console.log('----------------------------------')

// Arrays
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]
console.log(a3)

const a4 = [0, ...a1, 4]
console.log(a4)

//Objects
const carName = {name: 'Golf'}
const carBrand = {brand: 'VW'}
const otherInfos ={km: 100000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}
console.log(car)




console.log('')
console.log('----------------------------------')
console.log('302 - Classes --------------------')
console.log('----------------------------------')

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    ProductWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product ('camisa gola v', 20)
console.log(shirt.name, 'com o preço', shirt.price)
console.log('10%', 'preço final de', shirt.ProductWithDiscount(10))
console.log('30%', 'preço final de', shirt.ProductWithDiscount(30))
console.log('')
const tenis = new Product ('tenis verde', 120)
console.log(tenis.name, 'com o preço', tenis.price)
console.log('10%', 'preço final de', tenis.ProductWithDiscount(10))
console.log('30%', 'preço final de', tenis.ProductWithDiscount(30))




console.log('')
console.log('----------------------------------')
console.log('303 - Herança --------------------')
console.log('----------------------------------')

class ProductWithAttributes extends Product{
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors
    }
    showColors() {
        console.log('As cores são:')
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes('Chapéu', 29.99, [
    'Preto',
    'Azul',
    'Verde',
])

console.log('nome: ', hat.name)
console.log('10%', 'preço final de', hat.ProductWithDiscount(10))
hat.showColors(); // já é baseado em consol.log na função