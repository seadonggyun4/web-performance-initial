const $allContainer = document.querySelector('#all-products .container');
const $bestContainer = document.querySelector('#best-sellers-section .container');

const bestData = [
    {
        "id": 1,
        "type": 'new',
        "title": "Apple Headset",
        "price": 450.00,
        "category": "Headsets, Apple",
        "image": "images/vr1.webp",
    },
    {
        "id": 2,
        "type": 'new',
        "title": "Playstation Headset",
        "price": 399.99,
        "category": "Headsets, PS",
        "image": "images/vr2.webp",
    },
    {
        "id": 3,
        "title": "Oculus Headset",
        "price": 419.99,
        "discountedPrice": 349.99,
        "category": "Headsets, Oculus",
        "image": "images/vr3.webp",
    }
]

window.addEventListener('load', async () => {
    await loadProducts();
})

const loadProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products, $allContainer);
    displayProducts(bestData, $bestContainer);
}

const displayProducts = (products, container) => {
    container.replaceChildren()
    products.forEach(product => {
        const productElement = `
        <div class="product ${product?.type === 'new' && 'new'}">
            <div class="product-picture">
                <img src="${product.image}" alt="product: ${product.title}" width="250" height="250" loading="lazy"/>
            </div>
            <div class="product-info">
                <h5 class="categories">${product.category}</h5>
                <h4 class="title">${product.title}</h4>
                ${!product.discountedPrice ? `
                    <h3 class="price">
                        <span>US$ ${product.price}</span>
                    </h3>` : ''
                }
                ${product.discountedPrice ? `
                    <h3 class="price">
                        <span class="discounted-price">US$ ${product.discountedPrice}</span>
                        <span class="original-price">US$ ${product.price}</span>
                    </h3>` : ''
                }
                <button>Add to bag</button>
            </div>
        </div>`;

        container.insertAdjacentHTML('beforeend', productElement);
    });
}

