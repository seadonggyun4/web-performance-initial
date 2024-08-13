document.addEventListener('DOMContentLoaded', (event) => {
    (async function loadProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        displayProducts(products);
    })()
});

// Find the container where products will be displayed
const $container = document.querySelector('#all-products .container');

function displayProducts(products) {
    // Iterate over each product and create the HTML structure safely
    products.forEach(product => {
        // Create the main product div
        const productElement = `
        <div class="product">
            <div class="product-picture">
                <img src="${product.image}" alt="product: ${product.title}" width="250" loading="lazy"/>
            </div>
            <div class="product-info">
                <h5 class="categories">${product.category}</h5>
                <h4 class="title">${product.title}</h4>
                <h3 class="price"><span>US$ ${product.price}</span></h3>
                <button>Add to bag</button>
            </div>
        </div>`;

        // Append the new product element to the container
        $container.insertAdjacentHTML('beforeend', productElement);
    });

}



// Simulate heavy operation. It could be a complex price calculation.
for (let i = 0; i < 10000000; i++) {
    const temp = Math.sqrt(i) * Math.sqrt(i);
}

