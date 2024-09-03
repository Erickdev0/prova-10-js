document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Digite uma tarefa antes de adicionar.');
        return;
    }
    
    // Criar o item de tarefa
    const li = document.createElement('li');
    
    // Criar a caixa de seleção
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed', checkbox.checked);
    });
    
    // Criar o texto da tarefa
    const span = document.createElement('span');
    span.textContent = taskText;
    
    // Criar o botão de remoção
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    // Adicionar os elementos ao item da lista
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    // Adicionar o item à lista de tarefas
    document.getElementById('taskList').appendChild(li);
    
    // Limpar o campo de entrada
    taskInput.value = '';
});
