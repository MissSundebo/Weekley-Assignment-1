const getProductCostElement = document.getElementById('getProductCost');
const getBuyNowButtonElement = document.getElementById('getBuyNow');

let work =0;
let laptops;
let product = [];

fetch('products.json')
    .then((response) => response.json())


const payBalance = document.getElementById('payBalance');
const workBalance = () => {
    work = 100
    payBalance.innerText = work
}

getWorkButtonElement.addEventListener('click', workBalance);
