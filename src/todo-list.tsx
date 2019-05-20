import React from 'react';
import Todo from './todo';
import { ITodo } from 'todo-app';
//import { number } from 'prop-types';
//import { any, array } from 'prop-types';
//import IState, ITodo from './todo-app';
interface ITodoProps {
    todos: Array<ITodo>;
    handleRemove: (id: number) => void;
}
const TodoList = (props: ITodoProps) => {
    
    function renderList() {
        const {todos, handleRemove} = props;
        // check if there are todos -- provide useful message if no todos left
        if (todos.length > 0) {
            return todos.map((todo: ITodo) =>
                <Todo todo={todo} remove={handleRemove} key={todo.id} />
            );
        }
        return <h3>No Todos remaining!</h3>;
    }

    return (
        <div>
            <p><b>Your Todos:</b></p>
            {renderList()}
        </div>
    );
};

export default TodoList;
