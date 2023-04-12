import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import app from './base';
import {
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword,
    AuthErrorCodes
} from "firebase/auth";

const UpdateFiles = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        loginEmailPassword();
    }

    const auth = getAuth(app);
    
    useEffect(() => {
      connectAuthEmulator(auth, "http://127.0.0.1:9099");
    }, []);

    const loginEmailPassword = async () => {
        const loginEmail = email;
        const loginPassword = password;
        try {
          const userCredentials = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
          console.log(userCredentials.user);
        }
        catch(error) {
          setError(true);
          console.log(error.code == "auth/wrong-password");
        }
    }

  return (
    <Form className='w-50 mx-auto p-5' onSubmit={handleSubmit}>
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
      {/* <CustomTag /> */}
      <Button variant='outline-dark' type='submit'>Submit</Button>

    </Form>
  )
}

export default UpdateFiles