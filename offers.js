// ===== COUNTDOWN TIMER =====

const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 2);

const timer = setInterval(function () {

    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Offer Expired";
    }

}, 1000);


// ===== COPY COUPON FUNCTION =====

function copyCoupon(id) {
    const couponText = document.getElementById(id).textContent;
    navigator.clipboard.writeText(couponText);
    alert("Coupon Copied: " + couponText);
}
