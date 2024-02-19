window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    console.log(hamburger); // Check if the hamburger element is correctly selected
    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked'); // Confirm the click event works
        document.querySelector('.nav-links').classList.toggle('expanded');
    });
});