const products = [
    {
        name: "Laptop",
        price: 50000,
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Headphones",
        price: 2000,
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Smart Watch",
        price: 5000,
        image: "https://via.placeholder.com/300x200"
    }
];

const productContainer = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

let cart = 0;

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button>Add to Cart</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
        cart++;
        cartCount.textContent = cart;
    });

    productContainer.appendChild(card);
});
