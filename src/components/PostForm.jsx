import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PostForm () {
  return(
    <Card className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Poste um texto</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="info" type="button" className="mt-2">
            Postar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default PostForm;
