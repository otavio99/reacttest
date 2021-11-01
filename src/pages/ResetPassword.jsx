import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ResetPassword(props) {
  const [username, setUsername] = useState('');
  const [usernameRcvr, setUsernameRcvr] = useState('');
  const [passwordRcvr, setPasswordRcvr] = useState('');
  const [renderResult, setRenderResult] = useState(false);

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function RenderResult(props) {
    if(props.render){
      return(
        <div className="mb-3 text-muted">
          Usuário: {usernameRcvr} <br/>
          Senha: {passwordRcvr}
        </div>
      );
    }

    return(<div></div>);
  }

  function handleSubmit(e){
    e.preventDefault();
    if (!username.trim()) {
      return;
    }
    axios
      .get("https://segware-book-api.segware.io/api/forgot-password/" + username)
      .then((response) => {
        setUsernameRcvr(response.data.username)
        setPasswordRcvr(response.data.password)
        setRenderResult(true);
      });
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
                <Form.Label>Nome de usuário</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={handleChangeUsername}
                />
              </Form.Group>

              <RenderResult render={renderResult}/>

              <Button variant="primary" type="submit">
                Recuperar
              </Button>
              <div className="mt-2"><Link to="/login">Login</Link></div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default ResetPassword;
