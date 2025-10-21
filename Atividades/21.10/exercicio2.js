class NameLottery {
    constructor(listElement, resultElement) {
        this.names = [];
        this.listElement = listElement;
        this.resultElement = resultElement;
    }

    addName(name) {
        if (name) {
            this.names.push(name);
            this.render();
        }
    }

    draw() {
        if (this.names.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.names.length);
            const winner = this.names[randomIndex];
            this.resultElement.textContent = `O nome sorteado foi: ${winner}!`;
        } else {
            this.resultElement.textContent = 'Adicione nomes à lista para sortear.';
        }
    }

    render() {
        this.listElement.innerHTML = '';
        this.names.forEach((name) => {
            const li = document.createElement('li');
            li.textContent = name;
            this.listElement.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-nomes');
    const inputNome = document.getElementById('nome');
    const listaNomesUl = document.getElementById('lista-nomes');
    const sortearBtn = document.getElementById('sortear');
    const resultadoP = document.getElementById('resultado-sorteio');

    const lottery = new NameLottery(listaNomesUl, resultadoP);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        lottery.addName(inputNome.value.trim());
        inputNome.value = '';
        inputNome.focus();
    });

    sortearBtn.addEventListener('click', () => {
        lottery.draw();
    });
});
