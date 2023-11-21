import React, { useState } from "react";
import { Form, Button, Col, Row, Container, Card, CardBody, CardTitle, CardHeader } from "react-bootstrap";

export const SignupView = () => {
 const [username, setName] = useState('')
 const [password, setPassword] = useState('')
 const [email, setEmail] = useState('')
 const [birthday, setBirthday] = useState('')
 
 const handleSubmit = (event) => {
  event.preventDefault();

    const data = {
      username: username,
      password: password,
      email: email,
      birthday: birthday
    };

    fetch("https://myflix-z4g1.onrender.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async(response) => {
      console.log(response)
      if (response.ok) {
        alert('Signup successful')
        window.location.reload()
      } else {
        const e = await response.text()
        console.log(e)
        alert("Signup failed");
      }
    });}

  return (
    
<Row>
  <Col> 
  <Card className="shadow p-4 mb-4 bg-white mt-5 border-0 ">
    <CardBody >
      <CardTitle className="card-title" >Signup</CardTitle>
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
      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         required
        />
      </Form.Group>
      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday:</Form.Label>
        <Form.Control
         type="date"
         value={birthday}
         onChange={(e) => setBirthday(e.target.value)}
         required/>
      </Form.Group>
    <Button className="submit" type="submit">Submit</Button>
  </Form>
    </CardBody>
  </Card>
  </Col>
</Row>
  )
}