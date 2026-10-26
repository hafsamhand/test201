import { useState } from "react";

function TestFetch(params) {
    const [posts, setPosts] = useState([]);
    function getPosts() {
        const getData = async() => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const posts = await response.json()
            return posts
        }
          getData().then((posts) => setPosts(posts));
    }
    return (
        <div>

            la liste des posts  <button onClick={getPosts} >Recuperer les postes</button>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default TestFetch;