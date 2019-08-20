import axios from 'axios'
import * as types from './types'

export const fetchTodos = async (dispatch) => {
    dispatch({
        type: types.LOADING
    })

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const todos = {}
        response.data.map((todo) => (
            todos[todo.userId] = {
                ...todos[todo.userId],
                [todo.id]: {
                    ...todo
                }
            }
        ))
        dispatch({
            type: types.FETCH_TODOS,
            payload: todos
        })
    }
    catch (error) {
        dispatch({
            type: types.ERROR,
            payload: 'Información de tareas no disponible.'
        })
    }
}
export const changeInput = (name, value, { dispatch, getState }) => {
    const reducer = getState().todos;

    const reducer_updated = {
        ...reducer,
        [name]: value
    }
    dispatch({
        type: types.UPDATE_INPUTS,
        payload: reducer_updated
    })

}
export const addTodo = async (newTodo, dispatch) => {
    dispatch({
        type: types.LOADING
    });

    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
        dispatch({
            type: types.ADD_TODO
        });
    }
    catch (error) {
        dispatch({
            type: types.ERROR,
            payload: 'Servicio no disponible en este momento.'
        })
    }
}
export const editTodo = async (editedTodo, dispatch) => {
    dispatch({
        type: types.LOADING
    });

    try {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${editedTodo.id}`, editedTodo);
        dispatch({
            type: types.ADD_TODO
        });
    }
    catch (error) {
        dispatch({
            type: types.ERROR,
            payload: 'Servicio no disponible en este momento.'
        });
    }
}
export const changeCheck = (userId, todoId, { dispatch, getState }) => {
    const todos = getState().todos.items;
    const selected = todos[userId][todoId];

    const updatedTodos = {
        ...todos
    };
    updatedTodos[userId] = {
        ...todos[userId]
    };
    updatedTodos[userId][todoId] = {
        ...todos[userId][todoId],
        completed: !selected.completed
    }

    dispatch({
        type: types.UPDATE_TODO,
        payload: updatedTodos
    })
}
export const deleteTodo = async (todoId, dispatch) => {
    dispatch({
        type: types.LOADING
    });

    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        dispatch({
            type: types.FETCH_TODOS,
            payload: {}
        })
    }
    catch (error) {
        dispatch({
            type: types.ERROR,
            payload: 'Servicio no disponible en este momento.'
        })
    }
} 