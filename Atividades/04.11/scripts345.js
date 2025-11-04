    // Contador de caracteres
    const texto = document.getElementById('texto');
    const contador = document.getElementById('contador');
    texto.addEventListener('input', () => {
      contador.textContent = `${texto.value.length} caracteres`;
    });

    // Soma automática
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const resultado = document.getElementById('resultado');

    function somar() {
      const valor1 = parseFloat(num1.value) || 0;
      const valor2 = parseFloat(num2.value) || 0;
      resultado.textContent = valor1 + valor2;
    }

    num1.addEventListener('input', somar);
    num2.addEventListener('input', somar);

    // Validação de senha
    const senha = document.getElementById('senha');
    const avisoSenha = document.getElementById('avisoSenha');

    senha.addEventListener('input', () => {
      if (senha.value.length < 6) {
        avisoSenha.textContent = 'A senha deve ter pelo menos 6 caracteres.';
      } else {
        avisoSenha.textContent = '';
      }
    });