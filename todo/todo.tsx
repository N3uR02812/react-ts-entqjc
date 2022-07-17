import * as React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ['A', 'B'],
    };

    this.add = this.add.bind(this);
  }

  add() {
    let todos = this.state.todo;
    todos.push('name');
    this.setState({
      todo: todos,
    });
  }

  render() {
    let list = this.state.todo.map((t) => {
      return <li>{t}</li>;
    });
    
    return (
      <div className="app-todo">
        <button onClick={this.add}>Click me</button>
        <h2>ToDo</h2>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default Todo;
