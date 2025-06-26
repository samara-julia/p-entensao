
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



// feedback quando adiciona ao carrinho - bem simples so pra mostrar o feedback da heuristicas de visibilidade de status do sistema 
document.querySelectorAll('.btn-adicionar').forEach(botao => {
  botao.addEventListener('click', (event) => {
    event.preventDefault(); // isso impede que o botão recarregue a página

    const popupContainer = document.getElementById('popup-container');

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerText = 'Item adicionado ao carrinho!';

    popupContainer.appendChild(popup);

    setTimeout(() => {
      popup.style.opacity = '0';
    }, 3500);

    setTimeout(() => {
      popup.remove();
    }, 4000);
  });
});
