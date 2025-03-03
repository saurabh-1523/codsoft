document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeToggle.textContent = "☀️";
    } else {
        body.classList.add("light");
        themeToggle.textContent = "🌙";
    }

    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("light")) {
            body.classList.remove("light");
            body.classList.add("dark");
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark");
            body.classList.add("light");
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });
});
