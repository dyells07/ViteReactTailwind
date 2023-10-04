import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [editTodoText, setEditTodoText] = useState(''); // Local state for editing todo text
  const [editTodoId, setEditTodoId] = useState(null);

  const handleUpdate = (id, text) => {
    dispatch(updateTodo({ id, text: text }));
    setEditTodoId(null);
  };

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editTodoText}
                  onChange={(e) => setEditTodoText(e.target.value)}
                  className="text-white bg-transparent border-b border-white mr-2"
                />
                <button
                  onClick={() => handleUpdate(todo.id, editTodoText)} // Pass the edited text
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  <FontAwesomeIcon icon={faSave} /> Save
                </button>
              </>
            ) : (
              <>
                <div className='text-white'>{todo.text}</div>
                <div className="flex items-center">
                  <button
                    onClick={() => {
                      setEditTodoId(todo.id);
                      setEditTodoText(todo.text);
                    }}
                    className="text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded  mr-2"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
