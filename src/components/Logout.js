import React from 'react';
import Button from "react-bootstrap/Button" 
import { signOut } from 'firebase/auth';

const Logout = ({ auth }) => {

    const logout = async () => {
        await signOut(auth);
    }

  return (
    <>
        <Button variant="outline-danger"
         onClick={logout}
         className='mx-4'
         >Log Out</Button>
    </>
  )
}

export default Logout