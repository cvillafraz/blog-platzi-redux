import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Users from './screens/Users'
import Posts from './screens/Posts'
import store from './config/store'
import { Provider } from 'react-redux'

const usersUrl = "https://jsonplaceholder.typicode.com/users"
const postsUrl = "https://jsonplaceholder.typicode.com/posts" 

    
const App = () => { 

	return <Provider store={store}>
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' render={()=><Users url={usersUrl} />} />
					<Route path='/publicaciones/:key' render={()=><Posts postsUrl={postsUrl}
					usersUrl={usersUrl} />} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</Provider>
}

export default App;