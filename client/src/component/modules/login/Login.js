import { useState } from "react";
import { memo } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { getMe, login } from "../../../utils/user.utils";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const res = await login({email, password});
        if(res) {
            const user =  await getMe();
            console.log(user);
        }
        else {
            alert("Login failed");
        }
    }
    return (
        <Container className="w-25 h-100">
            <Row>
                <Form className = "mt-4" onSubmit={(e) => {handleLogin(e)}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default memo(Login)