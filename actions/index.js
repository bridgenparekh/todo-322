import types from '../constants/';

let todoID = 0;

const nextID = () => {
	todoID +=1;
	return todoId;
};


const actions = {
	submitTodo(text) {
		return {
			type: types.SUBMIT_TODO,
			id: nextId(),
			text,
		};
	};
};

export default actions;