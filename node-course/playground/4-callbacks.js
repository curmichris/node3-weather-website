setTimeout(() => {
    console.log('two seconds are up');
}, 2000);

const names = ['Chris', 'Jen', 'Jess']
const shortNames = names.filter((names) => {
    return names.length <= 4;
});

const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude : 0,
            longitude: 0
        };
    
        callback(data);
    }, 2000);
};

geoCode('Philadelphia', (data) => {
    console.log(data)
});


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) =>{
    setTimeout(() => {
        const sumValue = a + b;
        callback(sumValue);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
});


const multiply = (x, y, callback) =>{
    setTimeout(() => {
        callback(x * y);
    }, 2000);
}

multiply(2, 5, (multiply) => {
    console.log(multiply);
});

