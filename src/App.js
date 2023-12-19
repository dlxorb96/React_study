import {Button} from "primereact/button"
import { useState } from "react";

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import Sidebar from "./Sidebar";
function App() {

  const style = {
    width :"100px",
    background : "red"
  }

    return (
        <Sidebar/>
    )
}

export default App;
