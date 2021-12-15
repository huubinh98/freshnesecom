import React from "react";

export default function SideMenu({ list, title, active }) {
  console.log(list);
  return (
    <div>
      <h2>{title}</h2>

      {list.map((item, index) => (
        <p style={{ color: `${active ? "red" : "black"}` }} key={index}>
          {item}
        </p>
      ))}
    </div>
  );
}
