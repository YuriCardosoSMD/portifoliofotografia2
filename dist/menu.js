// Obtém o menu hambúrguer em ecrãs pequenos
const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ulMenu");

function menuToggle() {
  menu.classList.toggle("h-32");
}

// Ouvinte de redimensionamento do navegador
window.addEventListener("resize", menuResize);

// Redimensiona o menu se o utilizador alterar a largura com o menu responsivo aberto
function menuResize() {
  // Primeiro, obtém o tamanho da janela
  const window_size = window.innerWidth || document.body.clientWidth;
  if (window_size > 640) {
    menu.classList.remove("h-32");
  }
}