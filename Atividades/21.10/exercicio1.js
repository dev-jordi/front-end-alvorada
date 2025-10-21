class ShoppingList {
    constructor(listElement) {
        this.products = [];
        this.listElement = listElement;
    }

    addProduct(product) {
        if (product) {
            this.products.push(product);
            this.render();
        }
    }

    removeProduct(index) {
        this.products.splice(index, 1);
        this.render();
    }

    render() {
        this.listElement.innerHTML = '';
        this.products.forEach((product, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${product}</span>
                <button class="remover" data-index="${index}">Remover</button>
            `;
            this.listElement.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-compras');
    const inputProduto = document.getElementById('produto');
    const listaProdutosUl = document.getElementById('lista-produtos');
    const shoppingList = new ShoppingList(listaProdutosUl);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        shoppingList.addProduct(inputProduto.value.trim());
        inputProduto.value = '';
        inputProduto.focus();
    });

    listaProdutosUl.addEventListener('click', (e) => {
        if (e.target.classList.contains('remover')) {
            const index = e.target.getAttribute('data-index');
            shoppingList.removeProduct(index);
        }
    });
});
