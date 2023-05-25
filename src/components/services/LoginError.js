import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const LoginError = ({ error, msg}) => {

  return (
    error && <Alert>{ msg }</Alert>
  )
}

export default LoginError