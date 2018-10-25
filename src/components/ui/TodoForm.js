import React, {Component} from 'react';

//==========================================================================================================================================================================
//                                                                            TodoForm Component
//==========================================================================================================================================================================

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'Lowest'
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({todoTitle: '', todoResponsible: '', todoDescription: '', todoPriority: 'Lowest'});
  }

  render() {
    return (<div className="container">
      <h4>Add New Todo</h4>
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputTodoTitle" className="col-md-2 control-label">Title</label>
          <div className="col-md-10">
            <input name="todoTitle" type="text" className="form-control" id="inputTodoTitle" value={this.state.todoTitle} onChange={this.handleInputChange} placeholder="Title"></input>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputTodoResponsible" className="col-md-2 control-label">Responsible</label>
          <div className="col-md-10">
            <input name="todoResponsible" type="text" className="form-control" id="inputTodoResponsible" value={this.state.todoResponsible} onChange={this.handleInputChange} placeholder="Responsible"></input>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputTodoDescription" className="col-md-2 control-label">Description</label>
          <div className="col-md-10">
            <textarea name="todoDescription" type="text" className="form-control" id="inputTodoDescription" value={this.state.todoDescription} onChange={this.handleInputChange} placeholder="Description"></textarea>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputTodoPriority" className="col-md-2 control-label">Priority</label>
          <div className="col-md-10">
            <select name="todoPriority" type="text" className="form-control" id="inputTodoPriority" value={this.state.todoPriority} onChange={this.handleInputChange} placeholder="Priority">
              <option>Lowest</option>
              <option>Low</option>
              <option>Midium</option>
              <option>High</option>
              <option>Highest</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-offset-2 ccol-md-10">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>);
  }
}

export default TodoForm;
