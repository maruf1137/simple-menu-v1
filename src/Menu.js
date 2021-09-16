import React from "react";
/*
const Menu = ({ items }) => {
  console.log(items);
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, price, categorie, desc } = item;

        {
          return (
            <article id={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <p>${price}</p>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        }
      })}
    </div>
  );
};

export default Menu;
*/

const Menu = ({ items }) => {
  // console.log({ items });
  return (
    <div className="section-center">
      {items.map((item) => {
        const { title, id, img, desc, price } = item;

        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{}title</h4>
                <p>{price}</p>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
