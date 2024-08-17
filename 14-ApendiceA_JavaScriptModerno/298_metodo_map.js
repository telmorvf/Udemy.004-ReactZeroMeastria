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