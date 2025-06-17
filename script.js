function toggleMenu(icon) {
    icon.classList.toggle("active"); // animação do X

    const menu = document.getElementById("menu");
    menu.classList.toggle("show"); // aparece/some o menu
}
