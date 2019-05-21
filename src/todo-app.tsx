import React, { Component } from 'react';
import Title from './title';
import AddTodo from './add-todo';
import TodoList from './todo-list';

export interface ATodos {
  todos: ATodo[];
}
export interface ATodo {
  text: string;
  id: number;
}

class TodoApp extends Component<{}, ATodos> {
  public constructor(props: {}) {
    super(props);

    //initialize state - `todos` is our initial dummy array of todos
    this.state = {
      todos: [
        { text: ' This is a simple todo list app written in React!', id: 1 },
        {
          text: 'Hover over todos and click on the `XX` to delete them!',
          id: 2
        },
        { text: 'Add new todos if you like!', id: 3 }
      ]
    };

    // binding methods
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  // Handler to add a todo
  public addTodo(todo: ATodo): void {
    // your code here
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  }
  // Handler to remove a todo
  public removeTodo(id: number): void {
    this.setState({
      todos: this.state.todos.filter((todo: ATodo): boolean => todo.id !== id)
    });
  }

  public render(): JSX.Element {
    return (
      <div>
        <Title />
        <AddTodo handleAdd={this.addTodo} />
        <TodoList todos={this.state.todos} handleRemove={this.removeTodo} />
      </div>
    );
  }
}

export default TodoApp;
