import React from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MainContent from './MainContent';
import PrivateRoute from './PrivateRoute';
import Percusion from './subjects/Percusion';


const Menu = () => {
  return (
    <div>
    <Tabs 
      defaultActiveKey="home"
      id="header-tab"
      className="mb-3"
      fill
      >
        <Tab eventKey="home" title="Home">
          <MainContent/>
        </Tab>
        <Tab eventKey="percusion" title="Percusión latinoamericana">
          <Percusion/>
        </Tab>
        <Tab eventKey="folclore" title="Folclore">
          folclore content
        </Tab>
        <Tab eventKey="coropablo" title="Coro Pablo VI">
          Coro pablo VI content
        </Tab>
        <Tab eventKey="private" title="Subir Archivos">
          <PrivateRoute />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Menu