function carregarInteresses() {
    const listaInteresses = document.querySelector("#listaInteresses");
    listaInteresses.innerHTML = "";

    const listaStorage = JSON.parse(localStorage.getItem('meus-interesses')) || [];

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
        listaStorage.push(novoInteresse);
        localStorage.setItem('meus-interesses', JSON.stringify(listaStorage));

        adicionarInteresse.value = "";
        carregarInteresses();
    } else if(novoInteresse!= ""){
        alert("Por favor insira um interesse ou hobbie");
    }
}

function limparInteresses() {
    localStorage.removeItem('meus-interesses');
    carregarInteresses();
}

document.querySelector(".button-add").addEventListener('click', adicionarInteresse);
document.querySelector('.button-clear').addEventListener('click', limparInteresses);

setInterval(carregarInteresses, 1000)


