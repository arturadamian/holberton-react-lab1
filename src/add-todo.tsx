import React, { Component } from 'react';
import { ATodo } from './todo-app';
import styles from './todos.module.css';

interface ATodoState {
  todoText: string;
}
export interface ATodoProps {
  handleAdd: (todo: ATodo) => void;
}

class AddTodo extends Component<ATodoProps, ATodoState> {
  public constructor(props: ATodoProps) {
    super(props);
    this.state = {
      todoText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event: any): void {
    this.setState({
      todoText: event.target.value
    });
  }

  public handleSubmit(event: any): void {
    event.preventDefault();
    if (this.state.todoText) {
      this.props.handleAdd({
        text: this.state.todoText,
        id: Math.random()
      });
    }
    this.setState({
      todoText: ''
    });
    // your code here
  }

  public render(): JSX.Element {
    return (
      <div className="row">
        <input
          type="text"
          value={this.state.todoText}
          placeholder="Add todos here..."
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button className={styles['addTodos']} onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default AddTodo;
