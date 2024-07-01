function carregarInteresses() {
    const listaInteresses = document.querySelector("#listaInteresses");
    listaInteresses.innerHTML = "";

    const listaStorage = JSON.parse(localStorage.getItem('meus-interesses')) || []; //sempre armazenar como array

    listaStorage.forEach(interesse => {
        const inputLi = document.createElement('li');
        inputLi.textContent = interesse;  
        listaInteresses.appendChild(inputLi);
    });
}

function adicionarInteresse() {
    const adicionarInteresse = document.querySelector("input");
    const novoInteresse = adicionarInteresse.value;

    if (novoInteresse) {
        const listaStorage = JSON.parse(localStorage.getItem('meus-interesses')) || [];

        if(!listaStorage.includes(novoInteresse)) {
            listaStorage.push(novoInteresse);
            localStorage.setItem('meus-interesses', JSON.stringify(listaStorage));
    
            adicionarInteresse.value = "";
            carregarInteresses();
        } else {
            alert("Este interesse /hobbie ja foi adicionado. Por favor, digite um novo interesse ou hobbie.")
            adicionarInteresse.focus(); 
        }
    } else {
        alert("Por favor insira um interesse ou hobbie");
    }
}

function limparInteresses() {
    localStorage.removeItem('meus-interesses');
    carregarInteresses();
}

document.querySelector(".button-add").addEventListener('click', adicionarInteresse);

document.querySelector("input").addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        adicionarInteresse();
    }
});

document.querySelector('.button-clear').addEventListener('click', limparInteresses);

setInterval(carregarInteresses, 1000)


document.addEventListener('DOMContentLoaded', function () {
    const tituloNoticiaPrincipal = document.querySelector('.news p');

    (async () => {
        try {
            const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?destaque=0');
            const data = await resposta.json();

            const noticiaPrincipal = data.items[0];

            if (noticiaPrincipal && tituloNoticiaPrincipal) {
                tituloNoticiaPrincipal.innerHTML = noticiaPrincipal.titulo;
            }
        } catch (error) {
            console.error('Erro ao buscar notícias:', error);
        }
    })();
});

        //Outra forma com function
        
// async function news() {
//     const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
//     const data = await response.json()

//     const tituloNews = data.items[0]

//     if(tituloNews) {
//         const noticiaNews = document.getElementById('title-news-today')
//         noticiaNews.innerHTML = tituloNews.titulo
//     }
// }
// news()