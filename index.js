function carregarInteresses() {
    const listaInteresses  = document.querySelector("#listaInteresses")
    
    listaInteresses.HTML = "";
    
    const interesses = JSON.parse(localStorage.getItem("meus-interesses") || [])
    interesses.forEach(interesse => {
        const novoInteresse = document.createElement("li");
        novoInteresse.innerHTML = interesse;
        listaInteresses.appendChild(novoInteresse)
    })
}

function adicionarInteresse () {
    const adicionarInteresse = document.querySelector("input")
    const interesse= adicionarInteresse.value
    if (interesse === "") {
        alert("Por favor insira um interesse ou hobbie")
        return;
    }
    const interesses = JSON.parse(localStorage.getItem('meus-interesses')) || [];
    interesses.push(interesse);
    localStorage.setItem('meus-interesses', JSON.stringify(interesses));

    const novoInteresse = document.createElement('li');
    novoInteresse.textContent = interesse;

    const listaInteresses = document.getElementById('lista-interesses');
    listaInteresses.appendChild(novoInteresse);

    input.value = "";
}

function limparInteresses() {
    localStorage.removeItem('meus-interesses');
    carregarInteresses();
}


document.querySelector(".button-add").addEventListener('click', adicionarInteresse)
document.querySelector('.button-clear').addEventListener('click', limparInteresses);

setInterval(carregarInteresses, 1000)

