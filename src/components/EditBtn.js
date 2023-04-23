import React, { useState } from 'react'
import Button from "react-bootstrap/Button";

const EditBtn = ({ state, item }) => {
    const [onEdit, setOnEdit] = useState(false);

  return (
    <Button variant='outline-secondary' onClick={() => setOnEdit(!onEdit)}>
        { onEdit ? `Save` : `Edit` }
    </Button>
  )
}

export default EditBtn