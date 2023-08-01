// const library = [
//     {
//         title: 'Apologia',
//         author: 'Ze Figueira',
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         }
//     },
//     {
//         title: 'Tropeco',
//         author: 'Palhoca',
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         }
//     },
//     {
//         title: 'Esquema',
//         author: 'Saquara Brito',
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         }
//     }
// ]

// library.forEach(books => console.log(books))


// library[0].status.read = true
// library[1].status.read = true
// library[2].status.read = true


// const {title: firstBook } = library[0]


// const turn = JSON.stringify(library)

// const unturn = JSON.parse(turn)

// console.log(unturn)



// const age = 11;

// const canVote = age >= 18 ? 'You can vote' : 'You cannot vote'

// console.log(canVote)


// const auth = true;


// const redirect = auth
// ? (alert('Welcome to the dashboard'), '/dashboard')
// : (alert('Access Denied'), '/login')

// console.log(redirect)

// auth ? console.log('Welcome to the dashboard') : null


// const names = ['Brad', 'Tim', 'Sara', 'John', 'Mike']


// names.forEach(name => console.log(name))

// for(let i = 0; i <= names.length; i++){
//     let res = i === 2 ? console.log(`${names[i]} is the best`) : console.log(names[i])
// }

//FIZZBUZZ Challenge

/*
Multiple of 3 FIZZ
Multiple of 5 BUZZ
Multiple of 3 and 5 FIZZBUZZ

*/

// for(let i = 1; i<= 100 ; i++){

//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('FIZZBUZZ')
//     } else if(i % 5 == 0){
//         console.log('BUZZ');
//     } else if(i % 3 == 0){
//         console.log('FIZZ');
//     }else{
//         console.log(i);
//     }
// const products = ['Zim Chair', 'Vion Chair', 'Ionic Table', 'Newland Tables', 'Kaysee Chair']

// for(let prod of products){
//     console.log(prod);
// }

// const zim = {
//     name: 'Zim Chair',
//     code: 'OTG1470',
//     color: 'black',
//     price: '$997'
// }

// for(res in zim){
//     console.log(zim[res]);
// }


// const textileArr = ['black', 'designer white', 'navy', 'red']

// for (color in textileArr){
//     console.log(textileArr[color]);
// }


// const products = ['Seating', 'Desking & Table', 'Filling and Storage', 'Accessories', 'Collections']

// products.forEach((item, index, arr) => console.log(`${index} - ${item}`))

// function productList(prod){
//     console.log(prod);
// }
// products.forEach(productList)

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const evenNumbers = numbers.filter((even) => even % 2 === 0)


// console.log(evenNumbers);


// const companies = [
//     {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
//     {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
//     {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
//     {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
//     {name: 'Company Five', category: 'Tech', start: 2009, end: 2014},
//     {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
//     {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
//     {name: 'Company Eight', category: 'Tech', start: 2011, end: 2016},
//     {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
// ]

// const retail = companies.filter(item => item.category === 'Retail')

// console.log(retail);

// const period = companies.filter(date => date.start >= 1980 && date.end <= 2005)

// console.log(period);

// const oldCompanies = companies.filter(age => age.end - age.start >= 10)

// console.log(oldCompanies);



// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const double = numbers.map(item => item * 2)

// console.log(double);


// const companies = [
//     {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
//     {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
//     {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
//     {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
//     {name: 'Company Five', category: 'Tech', start: 2009, end: 2014},
//     {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
//     {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
//     {name: 'Company Eight', category: 'Tech', start: 2011, end: 2016},
//     {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
// ]

// const companyNames = companies.map(names => names.name)

// console.log(companyNames);

// const nameAndCategory = companies.map(item => {
//     return{
//         name: item.name,
//         category: item.category
//     }
// })
// console.log(nameAndCategory);


// const years = companies.map(company =>{
//     return{
//         name: company.name,
//         years: `${company.end - company.start} years`
//     }
// })

// console.log(years);

// const nums = [1,2,3,4,5,6,7,8,9,10]

// const sum = nums.reduce((acc, curr)=> acc + curr, 0)
// console.log(sum);

// const cart = [
//     {id: 1, name: 'Product 1', price: 130},
//     {id: 2, name: 'Product 2', price: 150},
//     {id: 3, name: 'Product 3', price: 200},
// ]

// const total = cart.reduce((acc, prod) => acc + prod.price,0)


// console.log(total);


// const people = [
//     {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@gmail.com',
//     phone: '111-111-1111',
//     age: 30,
//     }, 

//     {firstName: 'Jane',
//     lastName: 'Poe',
//     email: 'jane@amail.com',
//     phone: '222-222-2222',
//     age: 25,
//     },

//     {
//     firstName: 'Bob',
//     lastName: 'Foe',
//     email: 'bob@gmail.com',
//     phone: '333-333-3333',
//     age: 45,
//     },

//     {
//     firstName: 'Sara',
//     lastName: 'Soe',
//     email: 'Sara@gmail.com',
//     phone: '444-444-4444',
//     age: 19,
//     },
//     {
//     firstName: 'Jose',
//     lastName: 'Koe',
//     email: 'jose@amail.com',
//     phone: '555-555-5555',
//     age: 23,
//     },

// ]


// const youngPeople = people.filter(age => age.age <= 25).map( item => {
//     return{
//         name: `${item.firstName} ${item.lastName}`,
//         email: item.email
//     }
// })


// console.log(youngPeople);

// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const positive = numbers.filter(pos => pos > 0).reduce((acc,cur) => acc + cur, 0)
// console.log(positive);


// const words = ['coder', 'programmer', 'developer']

// const cWords = words.map(word => word[0].toUpperCase() + word.slice(1) )

// console.log(cWords);

// const list = document.querySelector("#list")

// let items = document.querySelectorAll(".items")


// items.forEach(item => item.style.color = "red")

// console.log(items);