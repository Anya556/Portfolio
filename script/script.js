var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};

document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutContainer = document.querySelector('.about-container');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        aboutContainer.scrollIntoView({ behavior: 'smooth' });
    });
});