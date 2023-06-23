import React from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MainContent from './MainContent';
import PrivateRoute from './PrivateRoute';
import SubjectRoute from './subjects/SubjectRoute';
import { useAuthState } from '../hooks/useAuthState';

const Menu = () => {
  const { logState, auth } = useAuthState();

  return (
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
          <SubjectRoute logState={logState} subject={"percusionlat"} /> 
        </Tab>
        <Tab eventKey="folclore" title="Folclore">
          <SubjectRoute logState={logState} subject={"folclore"} />
        </Tab>
        <Tab eventKey="coropablo" title="Coro Pablo VI">
          <SubjectRoute logState={logState} subject={"coropablovi"} />
        </Tab>
        <Tab eventKey="private" title="Subir Archivos">
          <PrivateRoute logState={logState} auth={auth}/>
        </Tab>
      </Tabs>
  )
}

export default Menu