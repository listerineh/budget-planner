import { useState } from "react";
import BottomArrow from "../icons/BottomArrow";
import "./Category.css";
import TopArrow from "../icons/TopArrow";

const Category = ({categories, name, Icon}) => {
  const [isOpen, setisOpen] = useState(false);

  const total = categories.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="category-wrapper">
      <div className="category-container">
        <div className="category-container-group">
          <div className="category-icon">
            <Icon />
          </div>
          <h3>{name}</h3>
          <button 
            className="category-button"
            onClick={() => setisOpen(!isOpen)}
          >
            {isOpen ? <TopArrow /> : <BottomArrow />}
          </button>
        </div>
        <div className="category-container-group">
          <p>Total $ {total}</p>
        </div>
      </div>
      {isOpen && (
        <div className="category-wrapper-group">
          {
            categories.map(item => (
              <div className="category-wrapper-item" key={item.name}>
                <div className="category-item-container">
                  <p className="category-item-name">{item.name}</p>
                  <p className="category-item-date">{item.date}</p>
                </div>
                <p>${item.price}</p>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default Category;
