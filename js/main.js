const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
    createElement(elemento);
})

form.addEventListener('submit', (evento) =>{
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const currentItem = {
        "nome": nome.value,
        "quantidade": quantidade.value,
    }

    createElement(currentItem);

    itens.push(currentItem);

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
})

function createElement(item){
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const newItemNumber = document.createElement('strong');
    newItemNumber.innerHTML = item.quantidade;

    newItem.appendChild(newItemNumber);
    newItem.innerHTML += item.nome;

    lista.appendChild(newItem);
}