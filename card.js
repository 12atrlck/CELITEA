const product = [
    {
        productName: 'NIKE X OFF-white',
        productDescription: 'Air jordan 1 Retro High "off-white - UNC" Sneakers',
        price:'$1599'
    },

    {
        productName: 'ADDIAS X OFF-white',
        productDescription: 'ADDIDAS jordan 1 Retro High "off-white - UNC" Sneakers',
        price:'$1599'
    }
];

let productName = product[0].productName;
let productDescription = product[0].productDescription;
let price = product[0].price;

document.getElementById('productTitle').innerHTML = productName;
document.getElementById('productDescription').innerHTML = productDescription;
document.getElementById('price').innerHTML = price;