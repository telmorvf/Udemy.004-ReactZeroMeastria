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