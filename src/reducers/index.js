import CONSTANTS from '../constants';

export default(state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_TODO:
      console.log('ADD_TODO has been dispatched.');
      return (action.payload)
        ? {
          todos: [
            ...state.todos,
            action.payload
          ]
        }
        : state;
    case CONSTANTS.REMOVE_TODO:
      console.log('REMOVE_TODO has been dispatched.');
      return (action.payload)
        ? {
          todos: state.todos.filter((todo) => todo !== action.payload)
        }
        : state;
    case CONSTANTS.UPDATE_TODO:
      console.log('UPDATE_TODO has been dispatched.');
      return state;
    default:
      return state;
  }
};
