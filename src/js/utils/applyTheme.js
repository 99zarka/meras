const applyTheme = () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
    } else {
        document.body.classList.remove('dark-mode');
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
    }
};

const initializeThemeToggle = () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        applyTheme();
    });

    // Apply theme on initial load
    applyTheme();
};

export { applyTheme, initializeThemeToggle };
