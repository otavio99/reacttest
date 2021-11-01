import { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import PostForm from "../components/PostForm";
import Post from "../components/Post";
import {authContext} from '../auth/ProvideAuth';

function Home() {
  const [posts, setPosts] = useState([]);
  const [reload, setReload] = useState(false);
  let { token } = useContext(authContext);

  useEffect(() => {
    axios
      .get(
        "https://segware-book-api.segware.io/api/feeds",
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )
      .then((response) => {
        setPosts([...response.data]);
        console.log(response);
      })
      .catch((response) => {
        alert("Erro, tente novamente.");
      });
  },[token, setPosts, reload]);

  const postList = posts
  .map(post => (
    <Post
      content={post.content}
      key={post.id}
      feedId={post.id}
      likes={post.likes}
      loves={post.loves}
      reload={reload}
      setReload={setReload}
    />
  ));

  useEffect(() => {
    document.body.style.backgroundColor = "#fcfcfc"
  });

  return (
    <Container>
      <div className="ml-auto mr-auto mt-5" style={{ maxWidth: 600 }}>
        <PostForm reload={reload} setReload={setReload}/>
        {postList}
      </div>
    </Container>
  );
}

export default Home;
