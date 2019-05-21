import React from 'react';
import { ATodo } from 'todo-app';

interface ATodoProps {
  todo: ATodo;
  remove: (id: number) => void;
}
const Todo = (props: ATodoProps): JSX.Element => (
  <p>
    {props.todo.text}
    <span
      onClick={(): void => {
        props.remove(props.todo.id);
      }}
    >
      <b>&nbsp;XX</b>
    </span>
  </p>
);

export default Todo;
