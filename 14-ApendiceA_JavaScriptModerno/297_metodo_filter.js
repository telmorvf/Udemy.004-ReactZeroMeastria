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