products = [{
    name: "Trenerka GD Green",
    price: "2000.00 RSD",
    description: "PETAR",
    image: 'images/products/product1.png',
    category: 1
},
{
    name: "Haljina GD Green",
    price: "3400.00 RSD",
    description: "PETAR",
    image: 'images/products/product2.png',
    category: 1
},
{
    name: "Trenerka DD Rose Gold",
    price: "2995.00 RSD",
    description: "PETAR",
    image: 'images/products/product3.png',
    category: 2
},
{
    name: "Trenerka DD Rose Gold",
    price: "2995.00 RSD",
    description: "PETAR",
    image: 'images/products/product3.png',
    category: 2
},
{
    name: "Trenerka DD Rose Gold",
    price: "2995.00 RSD",
    description: "PETAR",
    image: 'images/products/product3.png',
    category: 3
},
{
    name: "Trenerka DD Rose Gold",
    price: "2995.00 RSD",
    description: "PETAR",
    image: 'images/products/product3.png',
    category: 3
}
]

function readProducts() {
    let content = document.getElementById("products")

    let category = localStorage.getItem('category')

    if (category == null || category == '') {
        category = 1
    }

    setTimeout(() => {
        content.innerHTML = ""

        for (let product of products) {
            if (product['category'] == +category) {
                content.innerHTML = content.innerHTML + `<div class="product"><div class="product-image"><img src="${product['image']}"></div><div class="product-info"><p><b>${product['name']}</b></p><p>${product['price']}</p></div><div id="rot1" class="rot"><img src="images/plus.png"></div><div id="rot2" class="rot"><img src="images/plus.png"></div><div id="rot3" class="rot"><img src="images/plus.png"></div><div id="rot4" class="rot"><img src="images/plus.png"></div></div>`
            }
        }
    }, 1000)
}

function changeCategory(index) {
    localStorage.setItem('category', index)
}