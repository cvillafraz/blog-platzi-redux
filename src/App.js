import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Users from './screens/Users'
import Posts from './screens/Posts'
import Todos from './screens/Todos'
import SaveTodo from './screens/SaveTodo'
import store from './config/store'
import { Provider } from 'react-redux'

const App = () => {

	return <Provider store={store}>
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Users} />
					<Route exact path="/tareas" component={Todos} />
					<Route path="/publicaciones/:key" component={Posts} />
					<Route path="/tareas/guardar/:user_id?/:todo_id?" component={SaveTodo} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</Provider>
}

export default App;