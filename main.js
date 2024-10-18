// Példa termékek kosárhoz adására
const cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.closest('.product');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = productElement.querySelector('p:nth-of-type(2)').textContent;

        const cartItem = {
            name: productName,
            price: productPrice,
            quantity: 1
        };

        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${productName} hozzáadva a kosárhoz!`);
    });
});
