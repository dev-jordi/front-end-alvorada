class Converter {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    }

    convert() {
        if (isNaN(this.value)) {
            return null;
        }
        switch (this.unit) {
            case 'cm':
                return this.value * 100;
            case 'mm':
                return this.value * 1000;
            case 'km':
                return this.value / 1000;
            default:
                return null;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const resultadoP = document.getElementById('resultado_conversao');

    button.addEventListener('click', () => {
        const valor_metros = parseFloat(document.getElementById('valor_metros').value);
        const unidade = document.getElementById('unidade').value;

        const converter = new Converter(valor_metros, unidade);
        const resultado = converter.convert();

        if (resultado === null) {
            resultadoP.textContent = "Por favor, insira um valor válido.";
        } else {
            resultadoP.textContent = `Resultado: ${resultado} ${unidade}`;
        }
    });
});
