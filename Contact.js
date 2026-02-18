const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const successMsg = document.getElementById("successMsg");

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    if(name.value.trim() === ""){
        name.nextElementSibling.textContent = "Name is required";
        isValid = false;
    }

    if(email.value.trim() === ""){
        email.nextElementSibling.textContent = "Email is required";
        isValid = false;
    } else if(!email.value.includes("@")){
        email.nextElementSibling.textContent = "Enter valid email";
        isValid = false;
    }

    if(message.value.trim() === ""){
        message.nextElementSibling.textContent = "Message is required";
        isValid = false;
    }

    if(isValid){
        successMsg.textContent = "Message sent successfully!";
        form.reset();
    }
});
