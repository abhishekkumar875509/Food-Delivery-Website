// ===== MOBILE MENU =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger){
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===== FILTER FUNCTION =====
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");

        const category = btn.dataset.category;

        menuCards.forEach(card => {
            if(category === "all" || card.dataset.category === category){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});

// ===== CART COUNT =====
let cartCount = 0;
const cartDisplay = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartDisplay.textContent = cartCount;
    });
});
