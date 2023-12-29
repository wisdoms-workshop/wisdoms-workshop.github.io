
// JavaScript for the burger menu functionality

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menuNav = document.querySelector('.nav');

    menuBtn.addEventListener('click', function() {
        this.classList.toggle('open');
        menuNav.classList.toggle('open');
    });
});

// Placeholder for the previous function
function onRegistrationSubmit() {
    // Example function to handle registration form submission
    alert('Registration form submitted!');
}
