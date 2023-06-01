import React, { useState } from 'react';
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";
import AddFileForm from "../services/AddFileForm";
import { uploadFile } from '../assets/uploadFile';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        submitState(false);
        uploadFile(file, fileData)
          .then(() => submitState(true))
    }

    const submitState = (progress) => {
        if (!progress) setUploadState(<Spinner animation="border" size="sm" variant="secondary"/>); 
        else setUploadState(<Badge bg="success">Listo!</Badge>);
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
    <AddFileForm  
      handleSubmit={handleSubmit}
      handleTitle={handleTitle}
      handleDesc={handleDesc}
      handleFile={handleFile}
      subject={subject}
      handleSubject={handleSubject}
      disable={disable}
      uploadState={uploadState}
    />
  )
};

export default AddFile