import React from "react";
import MenuItem from "./MenuItem";

export default function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return <MenuItem key={id} {...item} />;
      })}
    </div>
  );
}
