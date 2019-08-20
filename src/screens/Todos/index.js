import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Link } from 'react-router-dom';
import * as todosActions from '../../config/actions/todos'
import Loading from '../../components/general/Loading'
import Fatal from '../../components/general/Fatal'

const Todos = () => {
    const { items: todos, error, loading } = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const store = useStore()
    const callTodos = useCallback(() => todosActions.fetchTodos(dispatch), [dispatch])
    const deleteTodo = useCallback((todoId) => todosActions.deleteTodo(todoId, dispatch), [dispatch])
    const changeCheck = useCallback((userId, todoId) => todosActions.changeCheck(userId, todoId, store), [store])
    useEffect(() => {
        if (!Object.keys(todos).length && !loading) {
            callTodos()
        }

    }, [callTodos, todos, loading])

    function showTodos(userId) {
        const perUser = {
            ...todos[userId]
        };

        return Object.keys(perUser).map((todoId) => (
            <li key={todoId} className="d-flex align-items-center justify-content-between list-group-item">
                <p style={{ fontSize: '1.2em', flexBasis: '55%' }} className="m-0">
                    <input type="checkbox"
                        defaultChecked={perUser[todoId].completed}
                        onChange={() => changeCheck(userId, todoId)}
                        className="mr-2"
                    />
                    {perUser[todoId].title}
                </p>
                <div>
                    <button className="btn btn-info">
                        <Link className="text-white" to={`/tareas/guardar/${userId}/${todoId}`}>
                            Editar
					</Link>
                    </button>
                    <button className="btn btn-danger ml-2" onClick={() => deleteTodo(todoId)}>
                        Eliminar
				</button>
                </div>
            </li>
        ))
    }
    if (loading) return <Loading />
    if (error) return <Fatal message={error} />
    if (!Object.keys(todos).length) return null

    return <main>
        <button className="btn btn-success">
            <Link to='/tareas/guardar' className="text-light">
                Agregar
			</Link>
        </button>
        {
            Object.keys(todos).map((userId) => (
                <div key={userId}>
                    <h2 className="my-4">Usuario {userId}</h2>
                    <ul className="list-group">
                        {showTodos(userId)}
                    </ul>
                </div>))
        }
    </main>

}

export default Todos
