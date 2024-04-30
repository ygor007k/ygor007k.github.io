function adicionarTarefa() {
    var novaTarefaInput = document.getElementById("nova-tarefa");
    var novaTarefa = novaTarefaInput.value;
    novaTarefaInput.value = "";

    var listaTarefas = document.getElementById("lista-tarefas");
    var novaTarefaItem = document.createElement("li");
    novaTarefaItem.textContent = novaTarefa;

    // Adiciona botão de remoção à nova tarefa
    var botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = function() {
        listaTarefas.removeChild(novaTarefaItem);
    };
    novaTarefaItem.appendChild(botaoRemover);

    // Adiciona checkbox para marcar como concluída
    var checkboxConcluida = document.createElement("input");
    checkboxConcluida.type = "checkbox";
    checkboxConcluida.onchange = function() {
        if (checkboxConcluida.checked) {
            novaTarefaItem.style.textDecoration = "line-through";
        } else {
            novaTarefaItem.style.textDecoration = "none";
        }
    };
    novaTarefaItem.appendChild(checkboxConcluida);

    listaTarefas.appendChild(novaTarefaItem);
}
