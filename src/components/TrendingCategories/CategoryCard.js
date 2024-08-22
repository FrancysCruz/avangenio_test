import React from "react";
import "../../App.css"

const CategoryCard= ({ number, title}) => {
    return (
        <div className="categories-item">
          <img className="" src={require(`../../images/${number}.jpg`)}/>
          <div className="categories-item__details">
            <p className="categories-item_number">{`/${number.toString().padStart(2, '0')}`}</p>
            <h3 className="categories-item_title">{title}</h3>
            {/* <button className="categories-item__button"> */}
              <span className="categories-item__button">→</span>
            {/* </button> */}
          </div>
        </div>
    )
}

export default CategoryCard;