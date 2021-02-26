//Object property shorthand

const { O_DIRECTORY } = require("constants");

const name = 'Andrew';
const userAge = 32;

const user = {
    name,
    age: userAge,
    location: 'Malta'
};

console.log(user);

// object destructoring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    rating: 4.2,
    salePrice: undefined
};


// const {label:productLabel, stock, rating = 5} = product 
// console.log(productLabel);
// console.log(rating);

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction('order', product)