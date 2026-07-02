// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();

const email = document.getElementById("email").value.trim();

const phone = document.getElementById("phone").value.trim();

const institute = document.getElementById("institute").value.trim();

const domain = document.getElementById("domain").value;

const message = document.getElementById("message").value.trim();

// Name

if(name===""){

alert("Please enter your full name.");

return;

}

// Email

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email address.");

return;

}

// Phone Number

const phonePattern=/^[0-9]{11}$/;

if(!phonePattern.test(phone)){

alert("Phone number must contain exactly 11 digits.");

return;

}

// Institute

if(institute===""){

alert("Please enter your institute name.");

return;

}

// Domain

if(domain===""){

alert("Please select an internship domain.");

return;

}

// Message

if(message.length<20){

alert("Message should contain at least 20 characters.");

return;

}

// Success

alert("Congratulations! Your internship application has been submitted successfully.");

form.reset();

});

}