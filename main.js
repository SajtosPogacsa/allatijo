// Példa termékek kosárhoz adására
const cart = [];
const chkoutBtn = document.getElementById("checkout-button")
const clear = document.getElementById("clear-cart-button");


document.querySelectorAll('#order').forEach(button => {
    button.addEventListener('click', function() {

        const productElement = this.closest('.product');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = productElement.querySelector('p:nth-of-type(2)').textContent;
        const productImage = productElement.querySelector('img').getAttribute('src');

        const existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            const cartItem = {
                name: productName,
                price: productPrice,
                quantity: 1,
                img: productImage
            };
            cart.push(cartItem);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${productName} hozzáadva a kosárhoz!`);
        }
    });
});

// Eseménykezelő a "Fizetés" gombra
document.getElementById("checkout-button").addEventListener("click", function() {
    // Átirányítás a fizetési oldalra
    window.location.href = "checkout.html";
});


clear.addEventListener("click", ()=> {
    localStorage.clear();
    alert("Kosár sikeresen kiürítve")
})