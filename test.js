const container = document.getElementById("formContainer");

// click anywhere inside form
container.addEventListener("click", () => {
    container.classList.add("active");
});

// click outside → remove glow
document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
        container.classList.remove("active");
    }
});