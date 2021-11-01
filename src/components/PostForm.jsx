import { useState } from "react";

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PostForm (props) {
  const [content, setContent] = useState("");

  function submitPost() {
    const newPost =   {
      authorId: Math.random(1000),
      content: content
    };

    if (!content.trim()) {
      return;
    }

    props.setPost([...props.posts, newPost]);
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
