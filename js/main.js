const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

form.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    createElement(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
})

function createElement(nome, quantidade){
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const newItemNumber = document.createElement('strong');
    newItemNumber.innerHTML = quantidade;

    newItem.appendChild(newItemNumber);
    newItem.innerHTML += nome;

    lista.appendChild(newItem);
}