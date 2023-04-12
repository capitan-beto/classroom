import React, { useState, useEffect } from 'react';
import app from './base';
import {
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword
} from "firebase/auth";

const UpdateFiles = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
          console.log(error);
        }
    }
    
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text"
              id="mail" 
              placeholder='my@email.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
            <input type="password"
              id="pass"
              placeholder='password'
              value={password} 
              onChange={e => setPassword(e.target.value)}
              />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UpdateFiles