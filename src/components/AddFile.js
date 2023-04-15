import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { getDownloadURL ,getStorage, uploadBytes, ref } from "firebase/storage";

const AddFile = () => {
    const [file, setFile] = useState("");
    const [uploadState, setUploadState] = useState("");
    const [subject, setSubject] = useState("Seleccionar Espacio")
    const [fileData, setFileData] = useState({
        title:"",
        desc: "",
        subject: "",
        url: ""
    })

    const storage = getStorage();
    const addFile = ref(storage, `files/${file.name}`);

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

    const handleRef = () => {
        getDownloadURL(addFile).then(url => {
            setFileData(currentFile => {
                return {...currentFile, url}
            })
        });
    }

    const handleSubject = subject => {
        if (!subject) return;
        else setSubject(subject);
        setFileData(currentFile => {
            return {...currentFile, subject}
        })
    }

    const handleTitle = title => {
        setFileData(currentFile => {
            return {...currentFile, title};
        })
        console.log(fileData)
    }

    const handleDesc = desc => {
        setFileData(currentFile => {
            return {...currentFile, desc};
        })
    }

  return (
    <>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control type='input'
                 onChange={(e) => handleTitle(e.target.value)}
                 onClick={() => console.log(fileData)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Descripción</Form.Label>
                <Form.Control as='textarea' 
                  onChange={(e) => handleDesc(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Espacio Curricular</Form.Label>
                <DropdownButton id="select-subject" 
                  title={subject} 
                  onClick={(e) => handleSubject(e.target.text)}
                >
                    <Dropdown.Item>Percusión Latinoamericana</Dropdown.Item>
                    <Dropdown.Item>Coro Pablo VI</Dropdown.Item>
                    <Dropdown.Item>Folclore</Dropdown.Item>
                </DropdownButton>
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