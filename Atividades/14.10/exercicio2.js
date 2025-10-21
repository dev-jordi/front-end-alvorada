class Loan {
    constructor(valor_total, parcelas, salario) {
        this.valor_total = valor_total;
        this.parcelas = parcelas;
        this.salario = salario;
    }

    analisar() {
        const valor_parcela = this.valor_total / this.parcelas;
        const aprovado = valor_parcela <= (this.salario * 0.30);

        return {
            aprovado: aprovado,
            valor_parcela: valor_parcela
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const valor_total = parseFloat(document.getElementById('valor_total').value);
        const parcelas = parseInt(document.getElementById('parcelas').value);
        const salario = parseFloat(document.getElementById('salario').value);

        if (isNaN(valor_total) || isNaN(parcelas) || isNaN(salario) || parcelas <= 0) {
            resultado.textContent = "Por favor, preencha todos os campos corretamente.";
            resultado.style.color = "orange";
            return;
        }

        const emprestimo = new Loan(valor_total, parcelas, salario);
        const analise = emprestimo.analisar();

        if (analise.aprovado) {
            resultado.textContent = `Empréstimo Aprovado! Valor da parcela: R$ ${analise.valor_parcela.toFixed(2)}`;
            resultado.style.color = "green";
        } else {
            resultado.textContent = `Empréstimo Reprovado. Valor da parcela (R$ ${analise.valor_parcela.toFixed(2)}) excede 30% do salário.`;
            resultado.style.color = "red";
        }
    });
});