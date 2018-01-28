import React, {Component} from 'react';

//==========================================================================================================================================================================
//                                                                            TodoList Component
//==========================================================================================================================================================================

class TodoList extends Component {
  handleRemoveTodo(todo) {
    this.props.onRemoveTodo(todo);
  }

  render() {
    debugger
    return (<div className="container">
      <h4>Todo count:
        <span className="badge-light badge-pill">{
            (this.props.store.getState().todos)
              ? this.props.store.getState().todos.length
              : 0
          }</span>
      </h4>
      <ul className="list-group">
        {
          (!this.props.store.getState().todos)
            ? ''
            : this.props.store.getState().todos.map((todo, index) => <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle}
                <small>
                  <span className="badge badge-info badge-pill">{todo.todoPriority}</span>
                </small>
              </h4>
              <p>
                <span className="glyphicon glyphicon-user"></span>{todo.todoResponsible}</p>
              <p>{todo.todoDescription}</p>
              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, todo)}>
                <span className="glyphicon glyphicon-trash"></span>Delete</button>
            </li>)
        }
      </ul>
    </div>);
  }
}

export default TodoList;
