function sendEmail(){
    // Validacija polja
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Molimo popunite sva polja!");
        return;
    }

    let parms = {
        name: name,
        email: email,
        subject: subject,
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