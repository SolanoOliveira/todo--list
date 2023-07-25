import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleComplete } from '../reducers/todoReducer';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Digite uma atividade..."
      />
      <button onClick={handleAddTodo}>Adicionar</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={() => dispatch(toggleComplete(todo.id))}>
              {todo.completed ? 'Desfazer' : 'Concluir'}
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
