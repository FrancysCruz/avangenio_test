import React from "react";
import "../../../App.css"

import { useState } from "react";

import Player from "./Player";

const PlayerList= ({}) => {

    // const [players, setPlayers] = useState(['Dr Team', 'Mia Plays', 'Xeoxer', 'Nikmer', 'Francys'])
    const players = ['Dr Team', 'Mia Plays', 'Xeoxer', 'Nikmer', 'Francys'];

    return (
        <>
            <ul className="players-list">
                {players && players.map((name, index) => (
                    <Player
                    number={index + 1}
                    name={name}
                    />
                    // <li key={index} className="flex items-center">
                    // <span className="w-6 h-6 bg-gray-700 rounded-full mr-2"></span>
                    // <span>{name}</span>
                    // <span className="ml-auto">
                    //     <i className="fas fa-circle text-green-500 mr-1"></i>
                    //     <i className="fas fa-circle text-red-500"></i>
                    // </span>
                    // </li>
                ))}
                </ul>
            </>
    )
}

export default PlayerList;