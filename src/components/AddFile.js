import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { writeData } from './base';

const AddFile = () => {
    const [disable, setCondition] = useState(true);
    const [file, setFile] = useState("");
    const [uploadState, setUploadState] = useState("");
    const [subject, setSubject] = useState("Seleccionar Espacio")
    const [fileData, setFileData] = useState({
        title:"",
        desc: "",
        subject: ""
    })

    const storage = getStorage();
    const addFile = ref(storage, `files/${fileData.subject}/${file.name}`);

    const handleSubmit = async (e) => {
        e.preventDefault();
        state("load");
        await uploadBytes(addFile, file).then((snap) => {
            state("done");
        });
        getDownloadURL(addFile).then(url => {
            writeData(fileData.title, fileData.desc, fileData.subject, url);
        })
    }

    const state = (progress) => {
        if (progress == "load") setUploadState(<Spinner animation="border" size="sm" variant="secondary"/>); 
        else if (progress == "done") setUploadState(<Badge bg="success">Listo!</Badge>);
    }

    const handleSubject = e => {
        let subject = e.id;
        if (!e.text) return;
        else {
            setSubject(e.text);
            setFileData(currentFile => {
                return {...currentFile, subject}
            })
            setCondition(false);
        }
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

    const handleFile = (file) => {
        setFile(file);
    }

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
};

export default AddFile