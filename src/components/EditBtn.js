import React, { useState } from 'react';
import Button from "react-bootstrap/Button";

const EditBtn = ({ handleTitle, item }) => {
  const [onEdit, setOnEdit] = useState(false);

  const handleClick = (e) => {
    setOnEdit(!onEdit);
    handleTitle(item);
  }

  return (
    <Button variant='outline-secondary' onClick={(e) => handleClick(e)}>
        { onEdit ? `Save` : `Edit` }
    </Button>
  )
}

export default EditBtn