    const imagens = [
      'https://brasil.perfil.com/wp-content/uploads/2025/07/Florianopolis_1751379632109.jpg',
      'https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2024/02/A-paisagem-urbana-desempenha-um-papel-crucial-na-qualidade-de-vida-nas-cidades-modernas.-scaled.jpg',
      'https://img.freepik.com/fotos-gratis/bela-vista-da-cidade-de-uma-cidade-urbana-um-tiro-de-cima_181624-406.jpg?semt=ais_hybrid&w=740&q=80',
      'https://www.correiobraziliense.com.br/aqui/wp-content/uploads/2025/06/Paraty_1750171098645.jpg',
      'https://conteudo.solutudo.com.br/wp-content/uploads/2021/11/Nacoes-Unidas-Bauru-Cidade-Sem-Limites-scaled.jpg'
    ];

    function trocarImagem() {
      const imagemAtual = document.getElementById('cityImage').src;
      let novaImagem;
      do {
        novaImagem = imagens[Math.floor(Math.random() * imagens.length)];
      } while (imagemAtual.includes(novaImagem));
      document.getElementById('cityImage').src = novaImagem;
    }