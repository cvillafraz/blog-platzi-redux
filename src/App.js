import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './components/Layout'
import Users from './screens/Users'
import Posts from './screens/Posts'
import Todos from './screens/Todos'
import SaveTodo from './screens/SaveTodo'
import Fatal from './components/general/Fatal'
import store from './config/store'

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/blog-platzi-redux" component={Users} />
						<Route exact path="/blog-platzi-redux/tareas" component={Todos} />
						<Route
							path="/blog-platzi-redux/publicaciones/:key"
							component={Posts}
						/>
						<Route
							path="/blog-platzi-redux/tareas/guardar/:user_id?/:todo_id?"
							component={SaveTodo}
						/>
						<Route
							render={() => (
								<Fatal message="No se encontró la página que buscabas" />
							)}
						/>
					</Switch>
				</Layout>
			</BrowserRouter>
		</Provider>
	)
}

export default App
