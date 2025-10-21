let todos = [];
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTodo();
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderTodos();
        });
    });
});

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const dueDateInput = document.getElementById('dueDateInput');
    const priorityInput = document.getElementById('priorityInput');
    
    const text = todoInput.value.trim();
    if (!text) return;
    
    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        dueDate: dueDateInput.value,
        priority: priorityInput.value
    };
    
    todos.push(todo);
    todoInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'medium';
    
    renderTodos();
    updateStats();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
    updateStats();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
        updateStats();
    }
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    const filteredTodos = todos.filter(todo => {
        if (currentFilter === 'active') return !todo.completed;
        if (currentFilter === 'completed') return todo.completed;
        return true;
    });
    
    todoList.innerHTML = filteredTodos.map(todo => `
        <li class="todo-item priority-${todo.priority} ${todo.completed ? 'completed' : ''}">
            <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                   onchange="toggleTodo(${todo.id})">
            <div class="todo-content">
                <div class="todo-text">${todo.text}</div>
                <div class="todo-details">
                    ${todo.dueDate ? `Due: ${todo.dueDate}` : ''} 
                    | Priority: ${todo.priority}
                </div>
            </div>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">
                <i class="fas fa-trash"></i>
            </button>
        </li>
    `).join('');
}

function updateStats() {
    document.getElementById('total-tasks').textContent = `Total: ${todos.length}`;
    document.getElementById('completed-tasks').textContent = `Completed: ${todos.filter(t => t.completed).length}`;
}