import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    if (!username.trim() && !password.trim()) {
      return;
    }
    console.log(e);
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#fcfcfc"
  });
  return (
    <Container>
      <div className="ml-auto mr-auto mt-5" style={{ maxWidth: 400 }}>
        <Card className='shadow p-3 mb-5 bg-white rounded'>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={username}
                  onChange={handleChangeUsername}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Login;
