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

    const exists = itens.find( elemento => elemento.nome === nome.value);

    const currentItem = {
        "nome": nome.value,
        "quantidade": quantidade.value,
    }

    if (exists){
        currentItem.id = exists.id;
        updatesElement(currentItem);
        itens[exists.id] = currentItem;
    } else {
        currentItem.id = itens.length;
        createElement(currentItem);
        itens.push(currentItem);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
})

function createElement(item){
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const newItemNumber = document.createElement('strong');
    newItemNumber.innerHTML = item.quantidade;
    newItemNumber.dataset.id = item.id;

    newItem.appendChild(newItemNumber);
    newItem.innerHTML += item.nome;

    lista.appendChild(newItem);
}

function updatesElement(item){
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;
}