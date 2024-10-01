//console.log('added app.js file')

function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/')
        .then(res => res.json())
        .then(data => console.log(data));
};