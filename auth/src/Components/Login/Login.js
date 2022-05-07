import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

async function loginUser(credentials){
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

function Login({setToken}){
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="Login">
            <h1>Please Log In</h1>
            <Form onSubmit={ handleSubmit }>
                <Form.Group controlId="username">
                    <Form.Label column>
                        Username
                    </Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Username" onChange={e=>setUsername(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label column>
                        Password
                    </Form.Label>
                    <Col>
                        <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Col>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
