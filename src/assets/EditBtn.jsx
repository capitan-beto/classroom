import React, { useState } from 'react';
import Button from "react-bootstrap/Button";

const EditBtn = ({ startEdit, item, handleEdit, id, subject }) => {
  const [onEdit, setOnEdit] = useState(false);

  const handleClick = (e) => {
    setOnEdit(!onEdit);
    startEdit(item, onEdit);
    if (onEdit) {
      handleEdit(id, subject);
    }
  }

  return (
    <Button variant='outline-secondary' onClick={(e) => handleClick(e)}>
        { onEdit ? `Save` : `Edit` }
    </Button>
  )
}

export default EditBtn