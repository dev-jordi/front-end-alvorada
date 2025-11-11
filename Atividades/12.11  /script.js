/*
 * CONSTANTES
 */
const TAM_PAGINA = 10; // Constante com o número de linhas da tabela por página.

/*
 * VARIÁVEIS GLOBAIS
 */
let posts = []; // Todos os posts carregados do back-end.
let pagina = 1; // Número da página atual.

/*
 * CÓDIGO EXECUTADO NO CARREGAMENTO DA PÁGINA.
 */
document.addEventListener("DOMContentLoaded", async function() {
    // Obtém todas as mensagens do back-end
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await response.json();

    // Atualiza a tabela com as mensagens e também a barra de paginação.
    atualizarTabelaPosts(posts);
    atualizarPaginacao(posts);

    // Define que ao clicar no botão "Anterior" da barra de navegação, vai 
    // para a página anterior.
    let btnPagAnt = document.getElementById("link-voltar-nav");
    btnPagAnt.addEventListener("click", function() {
        mudaPagina(pagina-1);
    });

    // Define que ao clicar no botão "Próxima" da barra de navegação, vai 
    // para a próxima página.
    let btnPagProx = document.getElementById("link-avancar-nav");
    btnPagProx.addEventListener("click", function() {
        mudaPagina(pagina+1);
    });

    // Desabilita o botão "Próxima" se contém menos do que 2 páginas.
    if(Math.ceil(posts.length / TAM_PAGINA) < 2)
        btnPagProx.classList.add("disabled");
    
});

/*
 * FUNÇÕES.
 */

// Atualiza a tabela de mensagens com a lista passada como parâmetro.
function atualizarTabelaPosts(mensagens) {
    // Calcula a posição de início e de fim do array de mensagen que devem ser mostradas na página atual.
    let pagInicio = (pagina - 1) * TAM_PAGINA;
    let pagFim = pagInicio + TAM_PAGINA - 1;

    // Limpa as linhas de conteúdo da tabela
    let tab = document.getElementById("tab-mensagens");
    tab.innerHTML = "";

    // Inclui uma linha para cada elemento do array de mensagens dentro do intervalo da página.
    for(let i = pagInicio; i <= pagFim; i++) {
        let linha = document.createElement("tr");
        
        let th = document.createElement("th");
        th.textContent = mensagens[i].id;
        linha.appendChild(th);

        let td = document.createElement("td");
        td.textContent = mensagens[i].userId;
        linha.appendChild(td);

        td = document.createElement("td");
        td.textContent = mensagens[i].title;
        linha.appendChild(td);

        td = document.createElement("td");
        td.textContent = mensagens[i].body;
        linha.appendChild(td);

        tab.appendChild(linha);
    }
}

// Atualiza o controle de paginação a partir da lista de mensagens passada como parâmetro.
function atualizarPaginacao(mensagens) {
    // Remove os controles de números de página existentes.
    let linksPags = document.getElementsByClassName("page-link-number");
    for(let i = 0; i < linksPags.length; i++) {
        linksPags[i].remove();
    }

    // Adiciona os novos números de página no controle de paginação de acordo com a quantidade de 
    // elementos no array de mensagens e do tamanho da página.
    let listaPag = document.getElementById("lista-pag");
    let btnProx = document.getElementById("link-avancar-nav").parentElement;
    for(let i = 1; i <= Math.ceil(mensagens.length / TAM_PAGINA); i++) {
        var li = document.createElement("li");
        li.classList = ["page-item", "page-link-number"];
        listaPag.insertBefore(li, btnProx); // Insere li antes de btnProx na lista.

        var linkPag = document.createElement("a");
        linkPag.className = "page-link";
        
        if(i == 1) // Se é o número da primeira página, o ativa por padrão
            linkPag.classList.add("active");

        linkPag.id = `page-link-${i}`;
        linkPag.textContent = i;
        linkPag.addEventListener("click", function() { // Ao clicar, muda para a página especificada.
            mudaPagina(i);
        });
        li.appendChild(linkPag);
    }
}

// Esta função muda para a página especificada como parâmetro.
function mudaPagina(novaPagina) {
    let btnPag = document.getElementById(`page-link-${pagina}`);
    let btnPagAnt = document.getElementById("link-voltar-nav");
    let btnPagProx = document.getElementById("link-avancar-nav");

    // Desativa botão ativado atualmente no controle de paginação. 
    btnPag.classList.remove("active");

    // Muda para a nova página.
    pagina = novaPagina;
    
    // Ativa o botão no controle de paginação relacionada à nova página.
    btnPag = document.getElementById(`page-link-${pagina}`);
    btnPag.classList.add("active");
    
    // Verifica se o botão de próxima página precisa ser ativido ou desativado. Será desativado
    // caso a nova página seja a última e ativado caso contrário.
    if(pagina >= Math.ceil(posts.length / TAM_PAGINA)) 
        btnPagProx.classList.add("disabled");
    else
        btnPagProx.classList.remove("disabled");
    
    // Verifica se o botão de página anterior precisa ser ativido ou desativado. Será desativado
    // caso a nova página seja a primeira e ativado caso contrário.
    if(pagina > 1)
        btnPagAnt.classList.remove("disabled");
    else
        btnPagAnt.classList.add("disabled");

    // Atualiza a tabela para mostrar os itens da nova página.
    atualizarTabelaPosts(posts);
}

