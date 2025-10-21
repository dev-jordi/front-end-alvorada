class SacCalculator {
    constructor(valorTotal, numParcelas, taxaJuros) {
        this.valorTotal = valorTotal;
        this.numParcelas = numParcelas;
        this.taxaJuros = taxaJuros;
    }

    calcular() {
        if (isNaN(this.valorTotal) || isNaN(this.numParcelas) || isNaN(this.taxaJuros) || this.valorTotal <= 0 || this.numParcelas <= 0 || this.taxaJuros < 0) {
            return null;
        }

        let saldoDevedor = this.valorTotal;
        const amortizacao = this.valorTotal / this.numParcelas;
        const taxaJurosDecimal = this.taxaJuros / 100;
        let parcelas = [];

        for (let i = 1; i <= this.numParcelas; i++) {
            const juros = saldoDevedor * taxaJurosDecimal;
            const valorParcela = amortizacao + juros;
            saldoDevedor -= amortizacao;
            parcelas.push({
                numero: i,
                juros: juros,
                amortizacao: amortizacao,
                valorParcela: valorParcela
            });
        }
        return parcelas;
    }
}

function gerarTabelaHTML(parcelas) {
    let tabelaHTML = `
        <table>
            <thead>
                <tr>
                    <th>Parcela</th>
                    <th>Juros</th>
                    <th>Amortização</th>
                    <th>Valor da Parcela</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (const parcela of parcelas) {
        tabelaHTML += `
            <tr>
                <td>${parcela.numero}</td>
                <td>R$ ${parcela.juros.toFixed(2)}</td>
                <td>R$ ${parcela.amortizacao.toFixed(2)}</td>
                <td>R$ ${parcela.valorParcela.toFixed(2)}</td>
            </tr>
        `;
    }
    tabelaHTML += `
            </tbody>
        </table>
    `;
    return tabelaHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-sac');
    const resultadoDiv = document.getElementById('resultado_sac');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const valorTotal = parseFloat(document.getElementById('valor_total').value);
        const numParcelas = parseInt(document.getElementById('numero_parcelas').value);
        const taxaJuros = parseFloat(document.getElementById('taxa_juros').value);

        const calculator = new SacCalculator(valorTotal, numParcelas, taxaJuros);
        const parcelas = calculator.calcular();

        if (parcelas === null) {
            resultadoDiv.innerHTML = '<p>Por favor, preencha todos os campos com valores válidos.</p>';
        } else {
            resultadoDiv.innerHTML = gerarTabelaHTML(parcelas);
        }
    });
});
