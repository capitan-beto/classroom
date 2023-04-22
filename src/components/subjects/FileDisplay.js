import React from 'react'
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const FileDisplay = ({ files }) => {
  const test = "https://www.theodinproject.com/dashboard";

  const downloadFile = (path) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (evt) => {
      const blob = xhr.response;
    }
    xhr.open("GET", path);
    xhr.send();
  }

  return (
    <div>
      {files.map(({ title, desc, path }) => {
        return <div
            className='modal show'
            style={{ display: "block", position: "initial" }}
            key={title}
          >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h2>{desc}</h2>
                <p>
                  <a href={path} target='_blank'>
                    <Button>Link</Button>
                  </a>
                </p>
              </Modal.Body>
            </Modal.Dialog>
          </div>
      })}
    </div>
  )
}

export default FileDisplay