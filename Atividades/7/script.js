document.querySelector('meuform').addEventListener('submit', function(e) {
    e.preventDefault();

    // Pega os valores do formulário
    const nome = document.getElementById('nome').value;
    const disciplina = document.getElementById('disciplina').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    // Calcula a média
    const media = ((nota1 + nota2) / 2).toFixed(2);

    // Cria nova linha na tabela
    const tabela = document.querySelector('table');
    const novaLinha = tabela.insertRow(-1);

    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).textContent = disciplina.charAt(0).toUpperCase() + disciplina.slice(1);
    novaLinha.insertCell(2).textContent = nota1;
    novaLinha.insertCell(3).textContent = nota2;
    novaLinha.insertCell(4).textContent = media;

    // Limpa o formulário
    this.reset();
});
