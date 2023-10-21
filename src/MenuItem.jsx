import React from "react";

const MenuItem = ({ price, desc, img, category, title }) => {
  return (
    <article>
      <img src={img} alt={desc} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
