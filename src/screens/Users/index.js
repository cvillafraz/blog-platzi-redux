import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchUsers from '../../config/actions/users/fetchUsers'
import Loading from '../../components/general/Loading'
import Fatal from '../../components/general/Fatal'
import Table from './Table'

const Users = () => {
	const users = useSelector(state => state.users)
	const dispatch = useDispatch()
	const callUsers = useCallback(() => fetchUsers(dispatch), [dispatch])

	useEffect(() => {
		if (users.items.length === 0 && !users.error) {
			callUsers()
		}
	}, [users.items.length, users.error, callUsers])

	if (users.loading) return <Loading />
	if (users.error) return <Fatal message={users.error} />

	return (
		<>
			<h1 className="display-4">Usuarios</h1>
			<Table users={users} />
		</>
	)
}

export default Users
