//JSON = Java Script Object Notation

/**
 * js to json---> JSON.stringify(JSON variable);
 * json to js---> JSON.parse(Object variable);
 */

const user = {id: 1, name: 'Mr. Success', job: 'WDer'};
const stringified = JSON.stringify(user);


console.log(user);//{ id: 1, name: 'Mr. Success', job: 'WDer' }
console.log(stringified);//{"id":1,"name":"Mr. Success","job":"WDer"}



const shop = {
    owner: 'My. Industrious',
    address: {
        road: '90/2005',
        holdingNo: 453,
        street: 'Hard Worker Line'
    },
    products: ['patience', 'status', 'skilled', 'cooled'],
    revenue: 50000,
    isOpen: true,
    isNew: true
};
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON); //{"owner":"My. Industrious","address":{"road":"90/2005","holdingNo":453,"street":"Hard Worker Line"},"products":["patience","status","skilled","cooled"],"revenue":50000,"isOpen":true,"isNew":true}
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);