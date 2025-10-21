function verificar() {
    let nota = Number(document.getElementById("nota").value);
    let saida = document.getElementById("resultado");
    if (nota >= 7) {
        saida.textContent = "Aprovado";
        saida.className = "aprovado";
    } else if (nota >= 5 && nota < 7) {
        saida.textContent = "Recuperação";
        saida.className = "recuperacao";
    } else {
        saida.textContent = "Reprovado";
        saida.className = "reprovado"; 
        }
    }

function check() {
    let ano = Number(document.getElementById("ano").value);
    let resultado = document.getElementById("resultado");
    if (ano > 1584 && (ano % 400 === 0 || ano % 4 == 0 && ano % 100 != 0)) {
        resultado.textContent = ano + " é um ano bissexto.";
        resultado.className = "aprovado";
    } else {
        resultado.textContent = ano + " não é um ano bissexto.";
        resultado.className = "reprovado"; 
    }
}   

 function event() {
            const peso = parseFloat(document.getElementById('peso').value);
            const altura = parseFloat(document.getElementById('altura').value);
            const imc = peso / (altura * altura);
            let classificacao = '';

            if (imc < 18.5) {
                classificacao = 'Abaixo do peso';
            } else if (imc >= 18.5 && imc <= 24.9) {
                classificacao = 'Peso normal';
            } else if (imc >= 25 && imc <= 29.9) {
                classificacao = 'Sobrepeso';
            } else if (imc >= 30 && imc <= 34.9) {
                classificacao = 'Obesidade grau I';
            } else if (imc >= 35 && imc <= 39.9) {
                classificacao = 'Obesidade grau II';
            } else {
                classificacao = 'Obesidade grau III (mórbida)';
            }

        });