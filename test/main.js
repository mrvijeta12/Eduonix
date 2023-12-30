document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const body = document.body;
    function updateButtonText() {
        const isDarkMode = body.classList.contains('dark-mode');
        toggleBtn.textContent = isDarkMode ? 'Off' : 'On';
    }
    toggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        updateButtonText();
    });
    updateButtonText();
});
