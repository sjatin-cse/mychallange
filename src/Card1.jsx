import React from "react";
import "./Card1.css";
import { useContext } from "react";
import { ProductsContext } from "./context";

const Card = ({ d }) => {
  const { id } = useContext(ProductsContext);

  const user = d[id];
  console.log(user);
  // const name =

  return (
    <div className="card1">
      <span>
        <img src={user.picture.large} />
      </span>
      <span style={{ textAlign: "left" }}>
        <h1 id="username">
          {user.name.title + " " + user.name.first + " " + user.name.last}
        </h1>
        <div>
          {user.location.street.number +
            "," +
            user.location.street.name +
            "," +
            user.location.city +
            "," +
            user.location.state +
            "," +
            user.location.country}
        </div>
        <div>
          {user.location.timezone.offset +
            " - " +
            user.location.timezone.description}
        </div>
        <div className="gen">{user.gender}</div>
      </span>
    </div>
  );
};

export default Card;
