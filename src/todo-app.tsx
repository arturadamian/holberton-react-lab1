import React, { Component } from "react";
import Title from "./title";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";

export interface ITodos {
    todos: Array<ITodo>;
};
export interface ITodo {
    text: string;
    id: number;
};

class TodoApp extends Component<{}, ITodos> {
    constructor(props: {}) {
        super(props);

        //initialize state - `todos` is our initial dummy array of todos
        this.state = {
            todos: [
                { text: " This is a simple todo list app written in React!", id: 1 },
                { text: "Hover over todos and click on the `XX` to delete them!", id: 2 },
                { text: "Add new todos if you like!", id: 3 }
            ]
        };

        // binding methods
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    // Handler to add a todo
    addTodo(todo: ITodo) {
        // your code here
        this.setState({
            todos: [todo, ...this.state.todos]
    })
}
    // Handler to remove a todo
    removeTodo(id: number): void {
        this.setState({
            todos: this.state.todos.filter((todo: ITodo) => todo.id !== id)
        })
    }

    render() {
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
