function toggleMenu(icon) {
    icon.classList.toggle("active"); // animação do X

    const menu = document.getElementById("menu");
    menu.classList.toggle("show"); // aparece/some o menu
}


// perfil lateral
const painelPerfil = document.getElementById('painel-perfil');
const btnFecharPerfil = document.getElementById('fecharPerfil');
const btnAbrirPerfil = document.getElementById('meu-perfil'); // o link/ícone do usuário com esse id

btnAbrirPerfil.addEventListener('click', e => {
  e.preventDefault();
  painelPerfil.classList.add('aberto');
});

btnFecharPerfil.addEventListener('click', () => {
  painelPerfil.classList.remove('aberto');
});
