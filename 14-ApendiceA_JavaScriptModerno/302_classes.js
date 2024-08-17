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