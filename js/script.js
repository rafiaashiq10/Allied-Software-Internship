const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let institute = document.getElementById("institute").value.trim();

    let domain = document.getElementById("domain").value;

    let message = document.getElementById("message").value.trim();

    let result = document.getElementById("result");

    let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    let phonePattern=/^[0-9]{11}$/;

    if(fullname==""){

        result.style.color="red";

        result.innerHTML="Please enter your Full Name.";

        return;

    }

    if(!email.match(emailPattern)){

        result.style.color="red";

        result.innerHTML="Please enter a valid Email.";

        return;

    }

    if(!phone.match(phonePattern)){

        result.style.color="red";

        result.innerHTML="Phone number must contain exactly 11 digits.";

        return;

    }

    if(institute==""){

        result.style.color="red";

        result.innerHTML="Please enter your Institute Name.";

        return;

    }

    if(domain==""){

        result.style.color="red";

        result.innerHTML="Please select an Internship Domain.";

        return;

    }

    if(message.length<20){

        result.style.color="red";

        result.innerHTML="Message must contain at least 20 characters.";

        return;

    }

    result.style.color="green";

    result.innerHTML="Application Submitted Successfully!";

    form.reset();

});