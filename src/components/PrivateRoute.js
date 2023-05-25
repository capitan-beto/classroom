import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import LoginError from './services/LoginError';
import Logout from './services/Logout';
import AddFile from './AddFile';
import { signInWithEmailAndPassword } from "firebase/auth";

const PrivateRoute = ({ logState, auth }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        loginEmailPassword();
    }

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

  return logState ?(
    <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
      <Logout auth={auth}/>
      <AddFile/>
    </div>
  ) : (
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

export default PrivateRoute