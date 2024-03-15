// education_scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const educationForm = document.querySelector('#education form');

    educationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you can add code to handle form submission, such as sending data to a server or validating inputs
        console.log('Education form submitted');
    });
});
