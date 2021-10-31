import { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import PostForm from "./components/PostForm";
import Post from "./components/Post";

function App(props) {
  const [posts, setPosts] = useState(props.posts);

  useEffect(() => {
    document.body.style.backgroundColor = "#fcfcfc"
  });

  const postList = posts
  .map(post => (
    <Post
      content={post.content}
    />
  ));

  return (
    <Container>
      <div className="ml-auto mr-auto mt-5" style={{ maxWidth: 600 }}>
        <PostForm />
        {postList}
      </div>
    </Container>
  );
}

export default App;
