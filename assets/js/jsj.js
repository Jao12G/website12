
// JavaScript para rolagem suave com atraso
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100; // Ajuste o valor de offset conforme necessário
            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

        // JavaScript para rolagem suave apenas para o link de Caminhões
        document.querySelector('a[href="#contato"]').addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop + 150; // Ajuste o valor de offset conforme necessário
                window.scroll({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });


        // JavaScript para rolagem suave apenas para o link de Caminhões
        document.querySelector('a[href="#caminhoes"]').addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop + 650; // Ajuste o valor de offset conforme necessário
                window.scroll({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });

    // Função para rolar suavemente até o topo da página
    function scrollToTop() {
        // Scroll suave
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Mostrar ou ocultar o botão baseado no scroll da página
    window.onscroll = function() {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    };