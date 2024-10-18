// Eseménykezelő a "Fizetés" gombra
document.getElementById("checkout-button").addEventListener("click", function() {
    // Átirányítás a fizetési oldalra
    window.location.href = "checkout.html";
});
// Feltételezve, hogy a kosár tartalma a localStorage-ban van tárolva
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const checkoutItemsContainer = document.getElementById("checkout-items");

    if (cartItems.length === 0) {
        checkoutItemsContainer.innerHTML = "<p>A kosár üres.</p>";
    } else {
        checkoutItemsContainer.innerHTML = cartItems.map(item => `
            <div class="checkout-item">
                <h3>${item.name}</h3>
                <p>Ár: ${item.price} Ft</p>
                <p>Mennyiség: ${item.quantity}</p>
            </div>
        `).join("");
    }
});
