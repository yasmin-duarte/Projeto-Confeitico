const btMenu = document.getElementById("btMenu");
const btFechar = document.getElementById("btFechar");
const nav = document.getElementById("nav");
const body = document.body;

// Abre o menu
btMenu.addEventListener("click", () => {
    nav.classList.add("mostrarMenu");
    body.classList.add("menu-aberto");
});

// Fecha o menu
btFechar.addEventListener("click", () => {
    nav.classList.remove("mostrarMenu");
    body.classList.remove("menu-aberto");
});

