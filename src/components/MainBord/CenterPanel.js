import React from "react";
import "../../App.css"

import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from "../../redux/arraySlice";


const CenterPanel= () => {

  const sharedArray = useSelector((state) => state.sharedArray);
  const dispatch = useDispatch();

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

    return (
        <div className="center-panel panel">
          <h3>Fortnite New Season</h3>
          <p>Join Live Stream</p>
          <div className="center-panel_hour">11 : 45</div>
          <img alt="Fortnite Character" id='imageCharacter' className="mx-auto" />
          <ul className="chosen-players">
            {sharedArray && sharedArray.map((item, index) => (
              <li className="chosen-player" key={index}>
                <p> {item.name}</p>
                <img className="player-avatar" src={require(`../../images/avatars/${item.number}.jpeg`)}/>
                <button className="sum_btn" onClick={() => handleRemoveItem(index)}> - </button>
              </li>
            ))}
          </ul>
      </div> 
    )
}

export default CenterPanel;