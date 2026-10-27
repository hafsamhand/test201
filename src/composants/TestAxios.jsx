import axios from "axios";
import { useState } from "react";

function TestAxios(params) {
  const [posts, setPosts] = useState([]);
  function getPosts() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);

      setPosts(response.data);
    });
  }
  function getPostsById(id) {
    axios.get("https://jsonplaceholder.typicode.com/posts/"+id+"/comments").then((response) => {
        console.log(response.data);
        
      setPosts([response.data]);
    });
  }
  
function createPost() {
    let post = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    axios.post("https://jsonplaceholder.typicode.com/posts", post).then((response) => {
      console.log(response);

        getPostsById(100)

    });
  }

  return (
    <div>
      la liste des posts{" "}
      <button onClick={createPost}>creer Poste</button>
      <button onClick={getPosts}>Recuperer les utilisateurs</button>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.body}</h2>
          <p>{post.title} </p>
        </div>
      ))}
    </div>
  );
}

export default TestAxios;
