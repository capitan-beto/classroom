import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";
import { getStorage, uploadBytes, ref } from "firebase/storage";

const AddFile = () => {
    const [file, setFile] = useState("");
    const [uploadState, setUploadState] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        state("load");
        uploadBytes(addFile, file).then((snapshot) => {
            state("done");
            console.log("Uploaded a blob or file");
        });
    }

    const state = (progress) => {
        if (progress == "load") setUploadState(<Spinner animation="border" size="sm" variant="secondary"/>); 
        else if (progress == "done") setUploadState(<Badge bg="success">Listo!</Badge>);
        else return "";
    }

    const storage = getStorage();
    const addFile = ref(storage, `files/${file.name}`);
    
  return (
    <>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control type='input'/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Descripción</Form.Label>
                <Form.Control as='textarea' />
            </Form.Group>
            <Form.Group>
                <Form.Control type='file'
                onChange={e => setFile(e.target.files[0])}
                />
            </Form.Group>
            <Button type='submit' variant="outline-dark">Submit {uploadState}</Button>
        </Form>
    </>
  )
}

export default AddFile