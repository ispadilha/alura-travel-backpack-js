const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = [];

form.addEventListener('submit', (evento) =>{
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    createElement(nome.value, quantidade.value);

    nome.value = "";
    quantidade.value = "";
})

function createElement(nome, quantidade){
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const newItemNumber = document.createElement('strong');
    newItemNumber.innerHTML = quantidade;

    newItem.appendChild(newItemNumber);
    newItem.innerHTML += nome;

    lista.appendChild(newItem);

    const currentItem = {
        "nome": nome,
        "quantidade": quantidade,
    }

    itens.push(currentItem);

    localStorage.setItem("item", JSON.stringify(itens));
}