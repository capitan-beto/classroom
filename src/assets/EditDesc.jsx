import React from 'react'
import Form from "react-bootstrap/Form"

const EditDesc = ({ itemOnEdit, title, setInputDesc, desc }) => {

  return (
    itemOnEdit === title? 
      <Form.Control type='text' onChange={e => setInputDesc(e.target.value)} placeholder={desc}/>
    : 
      <h2>
        {desc}
      </h2>
  )
}

export default EditDesc