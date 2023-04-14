import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Collapse from "react-bootstrap/Collapse"
import app from './base';
import {
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import LoginError from './LoginError';

const PrivateRoute = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");
    const [logState, setLogState] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        loginEmailPassword();
    }

    const auth = getAuth(app);

    useEffect(() => {
      const monitorAuthState = () => onAuthStateChanged(auth, 
        async (user) => {
          if (user) return setLogState(true);
          return setLogState(false);
        });

      return () => monitorAuthState();
    }, [auth])
    
    useEffect(() => {
      connectAuthEmulator(auth, "http://127.0.0.1:9099");
    }, []);

    const loginEmailPassword = async () => {
        const loginEmail = email;
        const loginPassword = password;
        try {
          setError(false);
          const userCredentials = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        }
        catch(error) {
          setError(true);
          createErrorMessage(error.code);
          console.log(error);
        }
    }

    const createErrorMessage = (error) => {
      if (error == "auth/user-not-found") setMsg("Email incorrecto");
      else if (error == "auth/wrong-password") setMsg("Contraseña incorrecta");
      else setMsg("Ocurrió un error, por favor intente más tarde");
    }

  return logState ? (
    <h1>Logged!</h1>
  ) :  (
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
  )
}

export default PrivateRoute