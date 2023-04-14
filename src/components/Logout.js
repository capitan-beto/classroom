import React from 'react';
import Button from "react-bootstrap/Button" 
import { signOut } from 'firebase/auth';

const Logout = ({ auth }) => {

    const logout = async () => {
        await signOut(auth);
    }

  return (
    <>
        <Button variant="outline-danger" onClick={logout}>Log Out</Button>
    </>
  )
}

export default Logout