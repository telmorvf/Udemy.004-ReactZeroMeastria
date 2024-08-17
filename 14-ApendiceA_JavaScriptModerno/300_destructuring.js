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

console.log
    (`O produto é ${productName}, custa ${price
    }€, pertence à categoria ${productCategory}, com a cor ${color}.`)