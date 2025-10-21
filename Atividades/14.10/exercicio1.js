class PasswordVerifier {
    constructor(senha, confirm_senha) {
        this.senha = senha;
        this.confirm_senha = confirm_senha;
    }

    verify() {
        return this.senha === this.confirm_senha;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const senhaInput = document.getElementById('senha');
    const confirmSenhaInput = document.getElementById('confirm_senha');
    const mensagemP = document.getElementById('mensagem');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        const verifier = new PasswordVerifier(senhaInput.value, confirmSenhaInput.value);
        if (verifier.verify()) {
            mensagemP.textContent = "Senhas cadastradas com sucesso!";
            mensagemP.style.color = "green";
        } else {
            mensagemP.textContent = "As senhas não são iguais. Digite novamente.";
            mensagemP.style.color = "red";
        }
    });
});
