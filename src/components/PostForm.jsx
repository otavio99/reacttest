import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {authContext} from '../auth/ProvideAuth';

function PostForm (props) {
  const [content, setContent] = useState("");
  let { token } = useContext(authContext);
  let history = useHistory();

  function submitPost() {
    if (!content.trim()) {
      return;
    }

    axios
      .post(
        "https://segware-book-api.segware.io/api/feed",
        {
          content: content
        },
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )
      .then((response) => {
        setContent("");
        props.setReload(!props.reload);
        console.log(response);
      })
      .catch((response) => {
        alert("Erro, tente novamente.");
      });
  }

  function handleChange(e) {
    setContent(e.target.value);
  }

  return(
    <Card className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Poste um texto</Form.Label>
            <Form.Control as="textarea" rows={3} value={content} onChange={handleChange} />
          </Form.Group>

          <Button variant="info" type="button" className="mt-2" onClick={submitPost}>
            Postar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default PostForm;
