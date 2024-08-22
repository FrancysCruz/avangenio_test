import React from "react";
import "../../../App.css"
import PlayerList from "./PlayerList";
import SearchComponent from "./SearchComponent";

import { useState } from "react";

const SearchingGame= ({}) => {

    // const [players, setPlayers] = useState(['Dr Team', 'Mia Plays', 'Xeoxer', 'Nikmer', 'Francys'])
    const players = ['Dr Team', 'Mia Plays', 'Xeoxer', 'Nikmer', 'Francys'];


    const [filteredGames, setFilteredGames] = useState(players);

    const handleSearch = (query) => {
      const filtered = players.filter(player =>
        player.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredGames(filtered);
    };

    return (
        <div>
        <h3 className="right-panel_titles"><span className="number_title">02.</span> Searching Game</h3>
        <div className="searching">
            <div>
                <p className="text-gray-400 mb-2">COD Warzone</p>
                <hr/>
            </div>
            <PlayerList players={players}/>
            {/* <SearchComponent onSearch={handleSearch} players={players}/>
                <ul className="filtered-games">
                    {filteredGames.map(game => (
                    <li key={game.id}>{game.title}</li>
                    ))}
                </ul> */}
            <button className="search_btn">Search Now</button>
        </div>
      </div>

    )
}

export default SearchingGame;