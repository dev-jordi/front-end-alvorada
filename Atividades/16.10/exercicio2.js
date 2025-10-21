class EmojiGenerator {
    constructor(n) {
        this.n = n;
    }

    generate() {
        if (isNaN(this.n) || this.n < 1) {
            return null;
        }
        let emojis = '';
        for (let i = 0; i < this.n; i++) {
            emojis += '😊';
        }
        return emojis;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-emojis');
    const inputN = document.getElementById('numero_emojis');
    const resultadoDiv = document.getElementById('resultado_emojis');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const n = parseInt(inputN.value);
        const generator = new EmojiGenerator(n);
        const emojis = generator.generate();

        if (emojis === null) {
            resultadoDiv.textContent = 'Por favor, insira um número válido.';
        } else {
            resultadoDiv.textContent = emojis;
        }
    });
});
