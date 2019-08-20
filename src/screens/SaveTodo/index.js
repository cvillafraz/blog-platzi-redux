import React, { useCallback, useEffect } from 'react'
import { useDispatch, useStore, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as todosActions from '../../config/actions/todos'
import Loading from '../../components/general/Loading'
import Fatal from '../../components/general/Fatal'

const Add = ({ match: { params: { user_id, todo_id } } }) => {
    const { items: todos, userId, title, loading, error, redirect } = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const store = useStore()
    const changeInput = useCallback((name, val) => todosActions.changeInput(name, val, store), [store])
    const addTodo = useCallback((newTodo) => todosActions.addTodo(newTodo, dispatch), [dispatch])
    const editTodo = useCallback((editedTodo) => todosActions.editTodo(editedTodo, store), [store])
    useEffect(() => {
        if (user_id && todo_id) {
            const todo = todos[user_id][todo_id]
            changeInput('userId', todo.userId)
            changeInput('title', todo.title)
        }
        else {
            changeInput('userId', '')
            changeInput('title', '')
        }
    }, [changeInput, todo_id, todos, user_id])

    function save() {
        const newTodo = {
            userId,
            title,
            completed: false
        }
        if (user_id && todo_id) {
            const todo = todos[user_id][todo_id]
            const editedTodo = {
                ...newTodo,
                completed: todo.completed,
                id: todo.id
            }
            editTodo(editedTodo)
        }
        else addTodo(newTodo)
    }
    function disable() {
        if (loading) return true
        if (!userId || !title) return true
        return false
    };

    function showAction() {
        if (redirect) return <Redirect to="/tareas" />
        if (loading) return <Loading />
        if (error) return <Fatal message={error} />
    }
    return (
        <form>
            <h1 className="display-4 mb-4">Guardar Tarea</h1>
            <div className="form-group" style={{ maxWidth: '480px' }}>
                <label for="userId">Usuario id:</label>
                <input
                    id="userId"
                    name="userId"
                    type='number'
                    value={userId}
                    className="form-control"
                    onChange={e => changeInput(e.target.name, e.target.value)}
                />
            </div>
            <div className="form-group" style={{ maxWidth: '480px' }}>
                <label for="title">Título: </label>
                <input
                    id="title"
                    className="form-control"
                    name="title"
                    value={title}
                    onChange={e => changeInput(e.target.name, e.target.value)}
                />
            </div>
            <button
                disabled={disable()}
                onClick={save}
                className="btn btn-info"
            >
                Guardar
				</button>
            {showAction()}
        </form>
    );
}


export default Add