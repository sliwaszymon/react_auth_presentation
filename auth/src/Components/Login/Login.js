import { Form, Col, Button } from 'react-bootstrap';

function Login(){
    return (
        <div className="Login">
            <h1>Please Log In</h1>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label column>
                        Username
                    </Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Username" />
                    </Col>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label column>
                        Password
                    </Form.Label>
                    <Col>
                        <Form.Control type="password" placeholder="Password" />
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

export default Login;
