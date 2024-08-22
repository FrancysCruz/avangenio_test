import React from "react";
import { useState } from "react";

import LeftPanel from "./LeftPanel"
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel"
import "../../App.css"

const MainBoard = () => {
  
  return (
    <div className="mainboard">
      <LeftPanel/>
      <CenterPanel />
      <RightPanel />
    </div>
    );
  }

export default MainBoard;