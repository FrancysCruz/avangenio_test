import React, {useState} from "react";
import "../../App.css"

const CategoryCard= ({ number, title}) => {

  const [color, setColor] = useState(getRandomColor());

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

    return (
        <div className="categories-item">
          <img className="" src={require(`../../images/${number}.jpg`)}/>
          <div className="categories-item__details">
            <div className="number-section">
              <span style={{color: color}} className="detail">/ </span>
              <p className="categories-item_number">{`${number.toString().padStart(2, '0')}`}</p>
            </div>
            <div className="title-section">
              <h3 className="categories-item_title">{title}</h3>
              {/* <button className="categories-item__button"> */}
                <span className="categories-item__button">→</span>
              {/* </button> */}
            </div>
          </div>
        </div>
    )
}

export default CategoryCard;