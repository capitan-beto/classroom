import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const AddFileForm = ({ 
    handleSubmit,
    handleTitle,
    handleDesc,
    handleFile,
    subject,
    handleSubject,
    disable,
    uploadState
 }) => {
  return (
    <>
    <Form onSubmit={handleSubmit}
     className='w-75 m-auto bg-light px-5 py-4 rounded border'
    >
        <Form.Group className='py-2 mb-4'>
            <Form.Label>Título</Form.Label>
            <Form.Control type='input'
             onChange={(e) => handleTitle(e.target.value)}
             required
            />
        </Form.Group>
        <Form.Group className='py-2 my-4'>
            <Form.Label>Descripción</Form.Label>
            <Form.Control as='textarea' 
              onChange={(e) => handleDesc(e.target.value)}
              required
            />
        </Form.Group>
        <Form.Group className='py-2 mt-5'>
            <Form.Control type='file'
            onChange={e => handleFile(e.target.files[0])}
            required
            />
        </Form.Group>
        <Form.Group className='p-y2 my-4'>
            <Form.Label>Espacio Curricular</Form.Label>
            <DropdownButton id="select-subject" 
              title={subject} 
              onClick={(e) => handleSubject(e.target)}
              required
            >
                <Dropdown.Item id='percusionlat'>Percusión Latinoamericana</Dropdown.Item>
                <Dropdown.Item id='coropablovi'>Coro Pablo VI</Dropdown.Item>
                <Dropdown.Item id='folclore'>Folclore</Dropdown.Item>
            </DropdownButton>
        </Form.Group>
        <p>Completa todos los campos para subir un archivo.</p>
        <Button type='submit'
         variant="outline-dark"
         className='p-2 m-auto'
         disabled={disable}>
             Submit {uploadState}
        </Button>
    </Form>
</>
  )
}

export default AddFileForm