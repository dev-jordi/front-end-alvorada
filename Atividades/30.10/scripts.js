let produtos = [];

    function adicionar() {
      let nome = document.getElementById("nome").value;
      let preco = Number(document.getElementById("preco").value);
      let quantidade = Number(document.getElementById("quantidade").value);

      if (nome !== "" && preco > 0 && quantidade > 0) {
        let produto = { nome, preco, quantidade };
        produtos.push(produto);

        document.getElementById("nome").value = "";
        document.getElementById("preco").value = "";
        document.getElementById("quantidade").value = "";

        atualizarTabela();
      }
    }

    function atualizarTabela() {
      let corpo = document.getElementById("corpo-tabela");
      corpo.innerHTML = "";

      let total = 0;

      for (let produto of produtos) {
        let subtotal = produto.preco * produto.quantidade;
        total += subtotal;

        let linha = document.createElement("tr");
        linha.innerHTML = `
          <td>${produto.nome}</td>
          <td>R$ ${produto.preco.toFixed(2)}</td>
          <td>${produto.quantidade}</td>
          <td>R$ ${subtotal.toFixed(2)}</td>
        `;
        corpo.appendChild(linha);
      }

      document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;
    }


/*------------------------------------------------------------------------------*/    

class ContactList {
    constructor(listElement) {
        this.contacts = [];
        this.listElement = listElement;
    }

    addContact(contact) {
        if (contact) {
            this.contacts.push(contact);
            this.render();
        }
    }

    removeContact(index) {
        this.contacts.splice(index, 1);
        this.render();
    }

    render() {
        this.listElement.innerHTML = '';
        this.contacts.forEach((contact, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${contact}</span>
                <button class="remover" data-index="${index}">Remover</button>
            `;
            this.listElement.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contatos');
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    const inputEmail = document.getElementById('email');
    const listaContatosUl = document.getElementById('lista-contatos');
    const contactList = new ContactList(listaContatosUl);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const contact = `${inputNome.value.trim()} - ${inputTelefone.value.trim()} - ${inputEmail.value.trim()}`;
        contactList.addContact(contact);
        inputNome.value = '';
        inputTelefone.value = '';
        inputEmail.value = '';
        inputNome.focus();
    });

    listaContatosUl.addEventListener('click', (e) => {
        if (e.target.classList.contains('remover')) {
            const index = e.target.getAttribute('data-index');
            contactList.removeContact(index);
        }
    });
});

/*------------------------------------------------------------------------------*/    

document.getElementById("form-referencia").addEventListener("submit", function (event) {
  event.preventDefault();

  // Coleta os dados do formulário
  const autor = document.getElementById("autor").value.trim();
  const titulo = document.getElementById("titulo").value.trim();
  const subtitulo = document.getElementById("subtitulo").value.trim();
  const edicao = document.getElementById("edicao").value.trim();
  const local = document.getElementById("local").value.trim();
  const editora = document.getElementById("editora").value.trim();
  const ano = document.getElementById("ano").value.trim();

  // Monta a referência ABNT
  let referencia = `${autor.toUpperCase()}. ${titulo}`;

  if (subtitulo) {
    referencia += `: ${subtitulo}`;
  }

  referencia += ".";

  if (edicao) {
    referencia += ` ${edicao} ed.`;
  }

  referencia += ` ${local}: ${editora}, ${ano}.`;

  // Exibe a referência gerada
  document.getElementById("referencia-gerada").textContent = referencia;
});
