

document.addEventListener("DOMContentLoaded", function() {
    const subNavLinks = document.querySelectorAll('.sub-nav-link');
    const sections = document.querySelectorAll('.section');

    // Show the default active section
    sections[0].classList.add('active');

    // Function to toggle active class for sub-navbar links
    function toggleActiveLink() {
        subNavLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    }

    // Function to show/hide sections based on the selected link
    function showSection(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
    }

    // Add event listeners to sub-navbar links
    subNavLinks.forEach(link => {
        link.addEventListener('click', toggleActiveLink);
        link.addEventListener('click', showSection);
    });
});
