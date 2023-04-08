import React from 'react'
import  Nav  from 'react-bootstrap/Nav'

const HeaderMenu = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="home">
      <Nav.Item>
        <Nav.Link eventKey="home" href='/#'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="percusion">Percusión Latinoamericana</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="folclore">Folclore</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="pablovi">Coro Pablo VI</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="update">Subir archivos</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default HeaderMenu