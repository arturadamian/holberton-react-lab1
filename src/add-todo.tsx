import React, { Component } from 'react';
import { ITodo } from './todo-app';
import styles from './todos.module.css';
interface ITodoState {
    todoText: string;
}
export interface ITodoProps {
    handleAdd: (todo: ITodo) => void;
}

class AddTodo extends Component<ITodoProps, ITodoState> {
    constructor(props: ITodoProps) {
        super(props);
        this.state = {
            todoText: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({
            todoText: event.target.value
        });
    };

    handleSubmit() {
        //event.preventDefault();
        this.props.handleAdd({
            text: this.state.todoText,
            id: Math.random()
        });
        this.setState({
            todoText: ''
        });
        // your code here
    };

    render() {
        return (
            <div className="row">
                <input
                    type="text"
                    value={this.state.todoText}
                    placeholder="Add todos here..."
                    autoComplete="off"
                    onChange={this.handleChange}
                />
                <button className={styles['addTodos']} onClick={this.handleSubmit}></button>
            </div>
        );
    }
}

export default AddTodo;
