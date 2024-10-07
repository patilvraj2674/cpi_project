// apps-page.js

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            alert('You are now leaving the site and navigating to an external resource.');
        });
    });
});
