const avanca = document.querySelectorAll('.btn-proximo');
const extra = document.getElementById('extra');

avanca.forEach(button => {
    button.addEventListener('click', function () {

        const atual = document.querySelector('.ativo');
        const proximoPasso = document.getElementById('passo-' + this.getAttribute('data-proximo'));

        // fade-out suave
        atual.classList.remove('ativo');
        atual.classList.add('fade-out');

        setTimeout(() => {
            atual.classList.remove('fade-out');
            proximoPasso.classList.add('ativo');
        }, 200);

        extra.style.display = "none";
    });
});
