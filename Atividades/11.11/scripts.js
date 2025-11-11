document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("btnPesquisar");
    btn.addEventListener("click", pesquisar);

    let btnFechar = document.getElementById("btn-fechar");
    btnFechar.addEventListener("click", function() {
        let fundo = document.getElementById("bg-painel-oculto");
        fundo.style.display = "none"; // Faz o painel com os detalhes do filme sumir.
    });

});

// Essa função é associada com o botão de pesquisa e faz uma busca de filmes usando uma API de back-end.
async function pesquisar() {
    let texto = document.getElementById("inPesquisa").value;
    let conteudo = document.getElementById("conteudo");

    // A função fetch busca dados em um serviço no back-end. Aqui estamos usando a API do OMDB, que 
    // permite pesquisar dados sobre filmes. O endereço da API é "https://www.omdbapi.com/". O que
    // vem depois de "?" são parâmetros de consulta, no formato "nome=valor" e separados por "&".
    // Abaixo são passados dois parâmetros: "s" e "apikey". O parâmetro "s" permite especificarmos 
    // o nome do filme para busca. "apikey" permite passar uma chave exigida pela API para sua
    let response = await fetch(`https://www.omdbapi.com/?s=${texto}&apikey=13a53135`);

    // Abaixo pegamos a resposta devolvida pelo back-end no formato JSON. O método abaixo já converte 
    // a resposta de texto para um objeto contendo os dados. Cada API de back-end devolve os dados em 
    // formatos diferentes, por isso é importante conhecer bem a estrutura dos dados devolvidos.
    let filmes = await response.json();

    // O atributo "Response" indica se houve respostas (True) ou não (False). 
    if(filmes.Response === "True") {
        conteudo.innerHTML = "";

        // O atributo Search é um vetor onde cada posição é um objeto contendo os dados de um filme.
        for(let i = 0; i < filmes.Search.length; i++) {
            let card = document.createElement("div");
            card.className = "card";

            let img = document.createElement("img");
            img.setAttribute("src", filmes.Search[i].Poster);
            img.addEventListener("click", function(){
                mostrarFilme(filmes.Search[i].imdbID);
            });
            card.appendChild(img);

            let info = document.createElement("div");
            info.className = "info";
            card.appendChild(info);

            let nomeFilme = document.createElement("p");
            nomeFilme.className = "nome-filme";
            nomeFilme.textContent = filmes.Search[i].Title;
            info.appendChild(nomeFilme);

            let anoFilme = document.createElement("p");
            anoFilme.className = "ano-filme";
            anoFilme.textContent = filmes.Search[i].Year;
            info.appendChild(anoFilme);

            conteudo.appendChild(card);
        }
    } else {
        conteudo.innerHTML = "Nenhum filme foi encontrado!";
    }
}

// Essa função mostra mais detalhes de um filme ao se clicar nele.
async function mostrarFilme(idFilme){
    // Faz uma busca na API por mais detalhes sobre o filme. O parâmetro "i" permite passar o ID do filme
    // e o parâmetro plot permite especificar que queremos mais detalhes (com o valor full).
    let response = await fetch(`https://www.omdbapi.com/?i=${idFilme}&plot=full&apikey=13a53135`);
    let dados = await response.json();
    
    let fundo = document.getElementById("bg-painel-oculto");
    fundo.style.display = "block"; // Mostra o painel com os detalhes.

    let poster = document.getElementById("painel-poster");
    poster.setAttribute("src", dados.Poster);
    let titulo = document.getElementById("painel-titulo");
    titulo.textContent = dados.Title;
    let ano = document.getElementById("painel-ano");
    ano.textContent = dados.Year;
    let duracao = document.getElementById("painel-duracao");
    duracao.textContent = dados.Runtime;
    let genero = document.getElementById("painel-genero");
    genero.textContent = dados.Genre;
    let diretor = document.getElementById("painel-diretor");
    diretor.textContent = dados.Director;
    let escritores = document.getElementById("painel-escritores");
    escritores.textContent = dados.Writer;
    let atores = document.getElementById("painel-atores");
    atores.textContent = dados.Actors;
    let sinopse = document.getElementById("sinopse");
    sinopse.textContent = dados.Plot;
}