let toggle = document.querySelector('.toggle--input');
let cssLink = document.getElementById('css_theme');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        cssLink.href = './stylesheets/dark_theme.css';
    } else {
        cssLink.href = './stylesheets/light_theme.css';
    }
})