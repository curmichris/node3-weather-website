console.log('Client side js file is loaded');

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
});

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message1');

message1.textContent= '';
message2.textContent= '';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                message1.textContent = data.forecast;                
            }
        });
    });
});