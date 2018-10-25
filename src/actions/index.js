import CONSTANTS from '../constants';

export const addTodo = ({ todoTitle, todoResponsible, todoDescription, todoPriority }) => {
	return {
		type: CONSTANTS.ADD_TODO,
		payload: {
			todoTitle,
			todoResponsible,
			todoDescription,
			todoPriority,
		},
	};
};

export const removeTodo = todo => {
	return { type: CONSTANTS.REMOVE_TODO, payload: todo };
};

export const updateTodo = () => {
	return { type: CONSTANTS.UPDATE_TODO };
};
