// Példa termékek kosárhoz adására
const cart = [];
const chkoutBtn = document.getElementById("checkout-button")
const clear = document.getElementById("clear");

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

// Eseménykezelő a "Fizetés" gombra
document.getElementById("checkout-button").addEventListener("click", function() {
    // Átirányítás a fizetési oldalra
    window.location.href = "checkout.html";
});
