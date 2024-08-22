import React from "react";
import "../../App.css"
import SearchingGame from "./SearchingGame/SearchingGame";

const RightPanel= () => {

    return (
        <div className="right-panel panel">
          <div className="platform_container">
            <h3 className="right-panel_titles"><span className="number_title">01.</span> Choose Platform</h3>
            <div className="flex space-x-2 platforms">
              <button className="platforms_buttons">Party</button>
              <button className="platforms_buttons">Matchs</button>
              <button className="platforms_buttons">Streams</button>
            </div>
          </div>
          <SearchingGame/>
        </div>
      );
}

export default RightPanel;