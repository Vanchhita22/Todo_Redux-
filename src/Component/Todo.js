// src/components/TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/actions'; // Import the removeTodo action
import '../Asserts/style/todo.css';

const TodoList = ({ todos, addTodo, toggleTodo, removeTodo }) => {
  const handleAddTodo = () => {
    const newTodo = prompt('Enter a new todo:');
    if (newTodo) {
      addTodo(Date.now(), newTodo);
    }
  };

  const handleRemoveTodo = (id) => {
    // Call the removeTodo action
    removeTodo(id);
  };

  return (
    <div className='todo'>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}{' '}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="add-todo" onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  removeTodo, // Add the removeTodo action to mapDispatchToProps
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
