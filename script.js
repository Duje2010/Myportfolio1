function sendEmail(e){
    if (e) e.preventDefault(); // Sprečava ponovno učitavanje stranice
    
    // Validacija polja - ISPRAVLJENA FIELD IMENA
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Molimo popunite sva polja!");
        return;
    }

    let parms = {
        name: name,
        email: email,
        phone: phone,
        service: service,
        message: message
    };

    emailjs.send("service_drzz9c9", "template_l7mqrfo", parms)
        .then(function(response) {
            alert("Email sent successfully!");
            // Resetuj formu
            document.getElementById("contact-form").reset();
        })
        .catch(function(error) {
            alert("Failed to send email. Please try again later.");
            console.log('FAILED...', error);
        });
}