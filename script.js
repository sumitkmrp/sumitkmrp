// Example of a dark mode toggle
document.addEventListener("DOMContentLoaded", function() {
    let darkModeButton = document.createElement('button');
    darkModeButton.innerText = "Toggle Dark Mode";
    darkModeButton.style.position = "fixed";
    darkModeButton.style.bottom = "20px";
    darkModeButton.style.right = "20px";
    document.body.appendChild(darkModeButton);

    darkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
