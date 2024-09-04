import React from "react";
import "../../../App.css"
import PlayerList from "./PlayerList";
import SearchComponent from "./SearchComponent";

import { players } from "../../../data/players";

import { useState } from "react";

const SearchingGame= () => {

    // const [players, setPlayers] = useState(['Dr Team', 'Mia Plays', 'Xeoxer', 'Nikmer', 'Francys'])
    // const players = [{name: 'Dr Team', avatar: '1'}, {name:'Mia Plays', avatar: '2'}, {name: 'Xeoxer', avatar: '3'}, 
    //   {name: 'Nikmer', avatar: '4'}, {name: 'Francys', avatar: '5'}, { name: 'Lia Plays', avatar: '6'}];


    const [filteredGames, setFilteredGames] = useState();
    const [showSearch, setShowSearch] = useState(false);

    const handleSearch = (query) => {
      const filtered = players.filter(player =>
        player.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredGames(filtered);
      console.log(filtered)
    };

    return (
        <div>
        <h3 className="right-panel_titles"><span className="number_title">02.</span> Searching Game</h3>
        <div className="searching">
            <div>
                <p className="text-gray-400 mb-2">COD Warzone</p>
                <hr/>
            </div>
            <PlayerList players={players} showNumber={true}/>
            { showSearch &&
              <div className="search-component__container">
                <SearchComponent onSearch={handleSearch} players={players}/>
                <PlayerList players={filteredGames} showNumber={false}/>
              </div>
            }
            <button className="search_btn" onClick={() => setShowSearch(!showSearch)}>Search Now</button>
        </div>
      </div>

    )
}

export default SearchingGame;