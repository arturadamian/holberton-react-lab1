import React from 'react';
import Todo from './todo';
import { ATodo } from 'todo-app';
//import { number } from 'prop-types';
//import { any, array } from 'prop-types';
//import IState, ITodo from './todo-app';
//import { ATodoProps } from './add-todo';
interface ATodoProps {
  todos: ATodo[];
  handleRemove: (id: number) => void;
}
const TodoList = (props: ATodoProps): JSX.Element => {
  function renderList(): JSX.Element[] | JSX.Element {
    // eslint-disable-next-line react/prop-types
    var { todos, handleRemove } = props;
    // check if there are todos -- provide useful message if no todos left
    if (todos.length > 0) {
      return todos.map(
        (todo: ATodo): JSX.Element => (
          <Todo todo={todo} remove={handleRemove} key={todo.id} />
        )
      );
    }
    return <h3>No Todos remaining!</h3>;
  }

  return (
    <div>
      <p>
        <b>Your Todos:</b>
      </p>
      {renderList()}
    </div>
  );
};

export default TodoList;
