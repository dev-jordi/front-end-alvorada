class DiceRoller {
    constructor(n) {
        this.n = n;
        this.rolagens = [];
        this.soma = 0;
    }

    roll() {
        if (isNaN(this.n) || this.n < 1) {
            return null;
        }
        for (let i = 0; i < this.n; i++) {
            const rolagem = Math.floor(Math.random() * 6) + 1;
            this.rolagens.push(rolagem);
            this.soma += rolagem;
        }
        return {
            rolagens: this.rolagens,
            media: this.soma / this.n
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-dados');
    const inputN = document.getElementById('numero_rolagens');
    const resultadoDiv = document.getElementById('resultado_dados');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const n = parseInt(inputN.value);
        const roller = new DiceRoller(n);
        const resultado = roller.roll();

        if (resultado === null) {
            resultadoDiv.innerHTML = 'Por favor, insira um número válido de rolagens.';
        } else {
            resultadoDiv.innerHTML = `
                <p>Valores sorteados: ${resultado.rolagens.join(', ')}</p>
                <p>Média das jogadas: ${resultado.media.toFixed(2)}</p>
            `;
        }
    });
});
