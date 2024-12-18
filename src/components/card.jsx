import React from "react";

const Card = ({ title, list }) => {
  return (
    <div className="card-flex">
      <div className="card">
        <div className="content-card">
          <h2 className="title">{title}</h2>
          <ul className="list-card">
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
