function submitForm() {
    var form = document.getElementById("contactForm");
    var responseMessage = document.getElementById("responseMessage");

    // Simulate form submission (replace this with your actual form submission logic)
    var formData = new FormData(form);

    // Here you can add your AJAX request to submit form data to the server
    // For simplicity, we'll just show a success message
    responseMessage.textContent = "Message sent successfully!";
    responseMessage.classList.remove("hidden");

    // Clear the form after submission
    form.reset();

    // Hide the success message after 3 seconds
    setTimeout(function () {
        responseMessage.classList.add("hidden");
    }, 3000);
}
