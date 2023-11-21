import React, { useState } from "react";
import { Form, Button, Col, Row, Container, Card, CardBody, CardTitle } from "react-bootstrap";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch("https://myflix-z4g1.onrender.com/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      if (response.ok) {
        const responseData = await response.json();
        // console.log('token', responseData.token);
        localStorage.setItem("user", JSON.stringify(responseData.user));
        localStorage.setItem("token", responseData.token);
        onLoggedIn(username);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <Container >
      <Row>
      <Col>
      <Card className="shadow p-4 mb-4 bg-white mt-5 border-0">
        <CardBody>
          <CardTitle className="card-title">Login</CardTitle>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button type="submit" className="submit">
        Submit
      </Button>
    </Form>
        </CardBody>
      </Card>
      </Col>
      </Row>
    </Container>
  );
};