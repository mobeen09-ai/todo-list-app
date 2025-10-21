<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    
    <link rel="stylesheet" href="style.css"> 
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <h1><i class="fas fa-tasks"></i> Todo List</h1>
        
        <div class="input-section">
            <input type="text" id="todo-input" placeholder="Add a new task...">
            
            <div class="additional-inputs">
                <input type="date" id="dueDateInput">
                <select id="priorityInput">
                    <option value="low">Low Priority</option>
                    <option value="medium" selected>Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </div>
            
            <button id="add-btn"><i class="fas fa-plus"></i> Add Task</button>
        </div>
        
        <div class="filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="active">Active</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
        </div>
        
        <ul id="todo-list"></ul>
        
        <div class="stats">
            <span id="total-tasks">Total: 0</span>
            <span id="completed-tasks">Completed: 0</span>
        </div>
    </div>

    <script src="SCRIP.JS"></script>
</body> 
</html>
