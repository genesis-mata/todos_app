/*jshint esversion: 6 */
import React, { Component } from 'react';
import { addTodo, removeTodo } from './actions';
import TodoList from './components/ui/TodoList';
import TodoForm from './components/ui/TodoForm';
import Navbar from './components/containers/Navbar';

//==========================================================================================================================================================================
//                                                                            App Component
//==========================================================================================================================================================================

class App extends Component {
	handleAddTodo = todo => {
		this.props.store.dispatch(addTodo(todo));
	};

	handleRemoveTodo = todo => {
		this.props.store.dispatch(removeTodo(todo));
	};

	render = () => {
		return (
			<div>
				<div>
					<Navbar/>
				</div>
				<div>
					<TodoForm onAddTodo={this.handleAddTodo} />
					<TodoList store={this.props.store} onRemoveTodo={this.handleRemoveTodo} />
				</div>
			</div>
		);
	};
}

export default App;
