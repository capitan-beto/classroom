import React, { useState, useEffect } from 'react';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Collapse from "react-bootstrap/Collapse";
// import LoginError from './services/LoginError';
import Logout from './services/Logout';
import AddFile from './AddFile';
import { signInWithEmailAndPassword } from "firebase/auth";
import Login from './services/Login';

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
          setEmail("");
          setPassword("");
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
    <Login
      error={error}
      msg={msg}
      password={password}
      setPassword={setPassword}
      email={email}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
    />
  )
}

export default PrivateRoute