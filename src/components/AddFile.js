import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getStorage, uploadBytes, ref } from "firebase/storage";

const AddFile = () => {
    const [file, setFile] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        uploadBytes(addFile, file).then((snapshot) => {
            console.log("Uploaded a blob or file");
        });
    }
    
    const storage = getStorage();
    const addFile = ref(storage, `files/${file.name}`);
    
  return (
    <>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Add New file</Form.Label>
                <Form.Control type='file'
                onChange={e => setFile(e.target.files[0])}
                />
                <Button type='submit'>Submit</Button>
            </Form.Group>
        </Form>
    </>
  )
}

export default AddFile