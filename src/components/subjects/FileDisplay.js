import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FileDisplay = ({ files }) => {

  return (
    files && <div>
      {files.map(({ title, desc, path }) => {
        return <div
            className='modal show'
            style={{ display: "block", position: "initial" }}
            key={title}
          >
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h2>{desc}</h2>
                <p>
                  <a href={path} target='_blank'>
                    <Button>Abrir en nueva pestaña</Button>
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