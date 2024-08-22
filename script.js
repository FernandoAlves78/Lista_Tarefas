const input = document.querySelector('.input-tarefa');
const botao = document.querySelector('.btn-tarefa');
const listaTarefa = document.querySelector('.lista-tarefa');

let lista = [];

function addTarefa() {
    if(input.value === "") {
        alert('Insira uma tarefa');
        return;
    }
    lista.push({
        tarefa: input.value, 
        realizada: false,
    });
    input.value ="";
    visualizarTarefa();
}

function visualizarTarefa() {
    novaTarefa="";
    lista.forEach((item, index) => {
        novaTarefa = novaTarefa + `
          <li class="tarefa">
                <img class="icone" src="./imgs/check.svg" alt="Concluir tarefa" onclick="concluirTarefa(${index})"> 
                <p class="${item.realizada && "realizada"}">${item.tarefa}</p>
                <img class="icone" src="./imgs/trash.svg" alt="Apagar tarefa" onclick="removerTarefa(${index})">
            </li>
        `
    })
    listaTarefa.innerHTML = novaTarefa;
    localStorage.setItem("lista", JSON.stringify(lista));
}

function removerTarefa(index) {
    lista.splice(index, 1);
    visualizarTarefa();
}

function concluirTarefa(index) {
    lista[index].realizada = !lista[index].realizada;
    visualizarTarefa(); 
}

function carregarTarefas() {
    let tarefasLocalStorage = localStorage.getItem("lista");
    if (tarefasLocalStorage) {
        lista = JSON.parse(tarefasLocalStorage);
    }
    visualizarTarefa();
}


botao.addEventListener("click", addTarefa);