import React from "react";

/*
const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("all")}>
        all
      </button>

      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button>

      <button className="filter-btn" onClick={() => filterItems("lunch")}>
        lunch
      </button>

      <button className="filter-btn" onClick={() => filterItems("shakes")}>
        shakes
      </button>
    </div>
  );
};

export default Categories;
*/

const Categories = ({ categories, filterItems }) => {
  console.log(categories);
  return (
    <div className="btn-container">
      {categories.map((categorie, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(categorie)}
          >
            {categorie}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
