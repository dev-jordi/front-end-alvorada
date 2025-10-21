class Soma {
    constructor(n) {
        this.n = n;
    }

    calcular() {
        if (isNaN(this.n) || this.n < 1) {
            return null;
        }
        let soma = 0;
        for (let i = 1; i <= this.n; i++) {
            soma += i;
        }
        return soma;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-soma');
    const inputN = document.getElementById('numero_n');
    const resultadoDiv = document.getElementById('resultado_soma');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const n = parseInt(inputN.value);
        const calculadora = new Soma(n);
        const resultado = calculadora.calcular();

        if (resultado === null) {
            resultadoDiv.textContent = 'Por favor, insira um número inteiro positivo.';
        } else {
            resultadoDiv.textContent = `A soma de 1 a ${n} é: ${resultado}`;
        }
    });
});
