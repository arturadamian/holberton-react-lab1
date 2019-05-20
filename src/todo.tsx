import React from 'react';
import { ITodo } from 'todo-app';

interface ITodoProps {
  todo: ITodo;
  remove: (id: number) => void;
}
const Todo = (props: ITodoProps) => (
  <p>
    {props.todo.text}
    <span
      onClick={() => {
        props.remove(props.todo.id);

      }}>
      <b>&nbsp;XX</b>
    </span>
  </p>
);

export default Todo;