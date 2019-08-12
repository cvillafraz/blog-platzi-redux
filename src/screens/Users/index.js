import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../config/utils'
import fetchUsers from '../../config/actions/users/fetchUsers'
import Loading from '../../components/general/Loading'
import Fatal from '../../components/general/Fatal'
import Table from './Table'
const Users = ({ url }) => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(
    () => {
      if(users.items.length === 0 && !users.error ){
        dispatch(fetchUsers())
        getData(dispatch, fetchUsers, url)
      } 
    },
    [url, dispatch, users.items.length, users.error]
  );
  if (users.loading) return <Loading />
  if (users.error) return <Fatal message={users.error} />
  return (
    <Fragment>
      <h2>Usuarios</h2>
      <Table users={users} />
    </Fragment>
  );
};

export default Users;