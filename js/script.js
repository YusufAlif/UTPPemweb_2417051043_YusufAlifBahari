const darkBtn = document.querySelector('.darkbtn');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

darkBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkBtn.textContent = 'Light';
    } else {
        localStorage.setItem('theme', 'light');
        darkBtn.textContent = 'Dark';
    }
});