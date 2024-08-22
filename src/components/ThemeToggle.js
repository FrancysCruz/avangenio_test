import React, { useState, useEffect } from 'react';
import fornite_character1 from "../images/fornite_character1.jpg"
import fornite_character2 from "../images/fornite_character2.jpg"


const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    let imageCharacter = document.getElementById("imageCharacter")
    if (imageCharacter){
      imageCharacter.setAttribute('src', isDarkTheme ? fornite_character1 : fornite_character2 )}
    
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <button onClick={toggleTheme} className='style-button'>
      {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
};

export default ThemeToggle;