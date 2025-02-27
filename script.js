document.addEventListener("DOMContentLoaded", function () {
    // Manejo del botón de contacto
    const contactBtn = document.getElementById("contact-btn");
    const socialLinks = document.getElementById("social-links");

    contactBtn.addEventListener("click", () => {
        contactBtn.classList.toggle("active");
        socialLinks.classList.toggle("show");
    });

    // Manejo de la sección de tecnologías
    const techItems = document.querySelectorAll(".tech-item");

    techItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Colapsar todas las demás tecnologías
            techItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains("expanded")) {
                    otherItem.classList.remove("expanded");
                }
            });

            // Expandir o colapsar la tecnología clickeada
            item.classList.toggle("expanded");
        });
    });
});