const adicionarInteresse = document.querySelector("input");
const listaInteresses = document.querySelector("ul");

const botaoAdicionar = document.querySelector(".button-add");

botaoAdicionar.addEventListener("click", () => {
  const value = adicionarInteresse.value;
  if (value === "") {
    alert("Por favor insira um interesse ou hobbie");
    return;
  }

  const novoInteresse = document.createElement("li");
  novoInteresse.textContent = value;

  listaInteresses.appendChild(novoInteresse);

  adicionarInteresse.value = "";
});
