import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import PostForm from "../components/PostForm";
import Post from "../components/Post";

function Home() {
  const [posts, setPost] = useState([]);

  const postList = posts
  .map(post => (
    <Post
      content={post.content}
      key={post.authorId}
    />
  ));

  useEffect(() => {
    document.body.style.backgroundColor = "#fcfcfc"
  });

  return (
    <Container>
      <div className="ml-auto mr-auto mt-5" style={{ maxWidth: 600 }}>
        <PostForm posts={posts} setPost={setPost}/>
        {postList}
      </div>
    </Container>
  );
}

export default Home;
