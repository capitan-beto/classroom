import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { getStorage, uploadBytes, ref } from "firebase/storage";

const AddFile = () => {
    const [file, setFile] = useState("");
    const [uploadState, setUploadState] = useState("");
    const [subject, setSubject] = useState("Seleccionar Espacio")
    const [fileData, setFileData] = useState({
        title:"",
        desc: "",
        subject: "",
        ref: ""
    })

    const storage = getStorage();
    const addFile = ref(storage, `files/${fileData.subject}/${file.name}`);

    useEffect(() => {
        console.log(JSON.stringify(fileData));
    }, [fileData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        state("load");
        uploadBytes(addFile, file).then((snapshot) => {
            state("done");
            handleRef();
            console.log("Uploaded a blob or file");
        });
    }

    const state = (progress) => {
        if (progress == "load") setUploadState(<Spinner animation="border" size="sm" variant="secondary"/>); 
        else if (progress == "done") setUploadState(<Badge bg="success">Listo!</Badge>);
    }

    const handleRef = (ref = `files/${fileData.subject}/${file.name}`) => {
        setFileData(currentFile => {
            return {...currentFile, ref}
        })
    }

    const handleSubject = e => {
        let subject = e.id;
        if (!e.text) return;
        else setSubject(e.text);
        setFileData(currentFile => {
            return {...currentFile, subject}
        })
    }

    const handleTitle = title => {
        setFileData(currentFile => {
            return {...currentFile, title};
        })
    }

    const handleDesc = desc => {
        setFileData(currentFile => {
            return {...currentFile, desc};
        })
    }

  return (
    <>
        <Form onSubmit={handleSubmit} className='w-50 m-auto bg-light px-5 py-4 rounded border'>
            <Form.Group className='p-2'>
                <Form.Label>Título</Form.Label>
                <Form.Control type='input'
                 onChange={(e) => handleTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='p-2'>
                <Form.Label>Descripción</Form.Label>
                <Form.Control as='textarea' 
                  onChange={(e) => handleDesc(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='p-2'>
                <Form.Label>Espacio Curricular</Form.Label>
                <DropdownButton id="select-subject" 
                  title={subject} 
                  onClick={(e) => handleSubject(e.target)}
                >
                    <Dropdown.Item id='percusionlat'>Percusión Latinoamericana</Dropdown.Item>
                    <Dropdown.Item id='coropablovi'>Coro Pablo VI</Dropdown.Item>
                    <Dropdown.Item id='folclore'>Folclore</Dropdown.Item>
                </DropdownButton>
            </Form.Group>
            <Form.Group className='py-5'>
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