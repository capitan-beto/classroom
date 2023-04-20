import React, { useEffect, useState } from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MainContent from './MainContent';
import PrivateRoute from './PrivateRoute';
import Percusion from './subjects/Percusion';
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import app from './base';

const Menu = () => {
  const [logState, setLogState] = useState(false);

  const auth = getAuth(app);

  useEffect(() => {
    const monitorAuthState = () => onAuthStateChanged(auth, 
      async (user) => {
        if (user) return setLogState(true);
        return setLogState(false);
      });

    return () => monitorAuthState();
  }, [auth])

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
          <Percusion logState={logState}/>
        </Tab>
        <Tab eventKey="folclore" title="Folclore">
          folclore content
        </Tab>
        <Tab eventKey="coropablo" title="Coro Pablo VI">
          Coro pablo VI content
        </Tab>
        <Tab eventKey="private" title="Subir Archivos">
          <PrivateRoute logState={logState} auth={auth}/>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Menu