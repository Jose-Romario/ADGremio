window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    header.classList.toggle('rodaremY', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão hambúrguer
    const burger = document.getElementById('burger');
    // Seleciona o contêiner de links (nav e contacto)
    const navWrapper = document.getElementById('menu-links');

    // Função para alternar o menu
    const navToggle = () => {
        // Adiciona/Remove a classe 'nav-active' no wrapper dos links (controla o deslizamento)
        navWrapper.classList.toggle('nav-active');
        // Adiciona/Remove a classe 'toggle' no botão hambúrguer (controla a animação para 'X')
        burger.classList.toggle('toggle');
    };

    // Adiciona o evento de clique ao botão hambúrguer
    if (burger && navWrapper) {
        burger.addEventListener('click', navToggle);
    }
    
    // Opcional: Fechar o menu ao clicar em um link (útil no mobile)
    const navLinks = document.querySelectorAll('.nav-wrapper a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navWrapper.classList.contains('nav-active')) {
                navToggle(); // Fecha o menu
            }
        });
    });

    // Função para o header fixo (mantida do seu código CSS)
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Pode ajustar o valor
            header.classList.add('rodaremY');
        } else {
            header.classList.remove('rodaremY');
        }
    });

});