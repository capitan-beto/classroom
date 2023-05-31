import React from 'react';
import LoginError from './LoginError';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const Login = ({
    error,
    msg,
    password,
    setPassword,
    email,
    setEmail,
    handleSubmit
}) => {
  return (
    <div className='container-sm'>
    <h3>Es necesario que te identifiques para administrar los archivos</h3>
  <Form className='w-50 mx-auto p-5' onSubmit={handleSubmit}  aria-controls="example-collapse-text" aria-expanded={error}>
    <Form.Group className="mb-4" controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type='email'
       placeholder='my@adress.com'
       value={email}
       onChange={e => setEmail(e.target.value)}
       isInvalid={error}
       required
      />
    </Form.Group>
    <Form.Group className='mb-4'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='password'
       value={password}
       onChange={e => setPassword(e.target.value)}
       isInvalid={error}
       required
      />
    </Form.Group>
    <Collapse in={error}>
      <div>
        <LoginError error={error} msg={msg}/>
      </div>
    </Collapse>
    <Button variant='outline-dark' type='submit'>Submit</Button>
  </Form>
  </div>
  )
}

export default Login