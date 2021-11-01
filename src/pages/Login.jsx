import { useEffect, useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {authContext} from '../auth/ProvideAuth';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let { setIsAuthenticated } = useContext(authContext);
  let { setToken } = useContext(authContext);
  let history = useHistory();

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
    axios
      .post("https://segware-book-api.segware.io/api/sign-in", {
        username: username,
        password: password
      })
      .then((response) => {
        setIsAuthenticated(true);
        setToken(response.data);
        history.push('/')
      })
      .catch((response) => {
        alert("Usuário ou senha inválida");
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

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Entrar
              </Button>
              <div className="mt-2"><Link to="/registrar">Registrar</Link></div>
              <div className="mt-2"><Link to="/recuperar">Recuperar</Link></div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Login;
