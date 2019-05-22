import React from 'react';
import styles from './todos.module.css';

// eslint-disable-next-line react/prop-types
const Todo = ({ todo, remove }) => (
  <p>
    {todo.text}
    <span
      onClick={() => {
        remove(todo.id);
      }}
    >
      <button className={styles['delete-button']}>X</button>
    </span>
  </p>
);

export default Todo;
