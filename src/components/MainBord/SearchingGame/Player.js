import React from "react";
import "../../../App.css";

import { useDispatch } from 'react-redux';
import { addItem } from "../../../redux/arraySlice";


const Player= ({number, player, showNumber}) => {

    const dispatch = useDispatch();

    const handleAddItem = () => {
        let name = player.name;
        let avatar = player.avatar;
        dispatch(addItem({name, avatar}));
      };
      
    return (
        <div className="player">
            {
                showNumber && 
                <div className="player-number">
                    {number}
                </div>
            }
            <p className="player-name">{player.name}</p>
            <img className="player-avatar" src={require(`../../../images/avatars/${player.avatar}.jpeg`)}/>
            <button className="sum_btn" onClick={handleAddItem}> + </button>
        </div>
    )
}

export default Player;