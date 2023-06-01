import React from 'react';
import Button from "react-bootstrap/Button";
import { signOut } from 'firebase/auth';

const Logout = ({ auth }) => {

    const logout = async () => {
        await signOut(auth);
    }

  return (
    <div>
        <Button variant="outline-danger"
         onClick={logout}
         className='my-4 px-4 w-100'
        >
          Log Out
        </Button>
    </div>
  )
}

export default Logout