import {useState, useEffect} from 'react'
import Posts from './components/Posts'
import Loading from './components/Loading'
import Title from './components/Title'
import axios from 'axios'
import React from 'react'

const App = () => {

    const [posts, setPosts] = useState([]);
    const [signlePost, setSinglePost] = useState([])


    useEffect(() => {
        const getPosts = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await data.json()
            
            setPosts(json)
        }

        getPosts()
    }, [])

    useEffect(() =>{
        async function setSinglePost(){
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts/{id}')
            setSinglePost(res.data)
        }
        setSinglePost()
    }, []);

    return (
        <>
            <Title />
            {posts.length > 0 ? <Posts posts={posts} id="list" /> : <Loading />}
        </>
    )

    
}

export default App