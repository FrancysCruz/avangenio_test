import React from "react";
import "../../../App.css";

import { useDispatch } from 'react-redux';
import { addItem } from "../../../redux/arraySlice";


const Player= ({number, name}) => {

    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem({name, number}));
      };
      
    return (
        <div className="player">
            <div className="player-number">
                {number}
            </div>
            <p className="player-name">{name}</p>
            <img className="player-avatar" src={require(`../../../images/avatars/${number}.jpeg`)}/>
            <button className="sum_btn" onClick={handleAddItem}> + </button>
        </div>
    )
}

export default Player;