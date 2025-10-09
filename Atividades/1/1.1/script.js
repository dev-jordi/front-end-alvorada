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