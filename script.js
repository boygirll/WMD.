// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle"); // Get the toggle button
    const navLinks = document.querySelector(".nav-links"); // Get the nav menu

    // Add a click event listener to the toggle button
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show"); // Show or hide the menu
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });
});
