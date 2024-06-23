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
            adicionarInteresse.focus(); // Retorna o cursor para o campo de entrada
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

// Adiciona o evento de tecla Enter no campo de entrada
document.querySelector("input").addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        adicionarInteresse();
    }
});

document.querySelector('.button-clear').addEventListener('click', limparInteresses);

setInterval(carregarInteresses, 1000)


