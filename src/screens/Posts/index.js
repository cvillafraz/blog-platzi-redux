import React, { PureComponent, useCallback, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector, connect } from 'react-redux'
import { getData } from '../../config/utils'
import Loading from '../../components/general/Loading'
import Fatal from '../../components/general/Fatal'
import fetchPosts from '../../config/actions/posts/fetchPosts'
import fetchUsers from '../../config/actions/users/fetchUsers'
import { showComments } from '../../config/actions/posts/showComments'
const Posts = ({ history, match, postsUrl, usersUrl }) => {
    const [posts, users] = useSelector(state => [state.posts, state.users])
    const dispatch = useDispatch()
    const commentsCall = useCallback((id) => showComments(id), [])

    useEffect(() => {
        if (users.items.length === 0 && !users.error) {
            getData(dispatch, fetchUsers, `${usersUrl}?id=${match.params.key}`)
        }
    }, [dispatch, usersUrl, users, match])

    useEffect(() => {
        if (posts.items.length === 0 && !posts.error) {
            dispatch(fetchPosts(true))
            getData(dispatch, fetchPosts, `${postsUrl}?userId=${match.params.key}`)
        }
        const unlisten = history.listen(location => {
            dispatch(fetchPosts([]))
        })
        return function cleanup() {
            unlisten()
        }
    }, [dispatch, history, postsUrl, match, posts])
    function showUserName() {
        console.log(match.params.key)
        if (users.error) return <Fatal message={users.error} />
        else if (users.loading) return <Loading />
        else if (users.items.length > 0) {
            return <h1 data-testid="username">Publicaciones de {users.items.length > 0 ? users.items.filter(user => user.id == match.params.key)[0]['name'] : users.items[0]['name']}</h1>
        }
        else return <h1>Publicaciones de Anónimo</h1>
    }
    function showPosts() {
        if (posts.error) {
            return <Fatal message={posts.error} />
        } else if (posts.loading) {
            return <Loading />
        } else if (posts.items.length > 0) return posts.items.map(post => (
            <div
                key={post.id}
                className='pub_titulo'
            >
                <h2 data-testid={post.id == 1 && 'post-title'} onClick={() => dispatch(commentsCall(post.id))}>
                    {post.title}
                </h2>
                <h3 data-testid={post.id == 1 && 'post-body'}>
                    {post.body}
                </h3>
            </div>
        ))
    }

    return (
        <div>
            {showUserName()}
            {showPosts()}
        </div>
    );
}

export default withRouter(Posts)

/*class Posts extends PureComponent {
    componentDidMount() {
        this.props.showComments(0)
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
export default connect(null, { showComments })(Posts)*/
