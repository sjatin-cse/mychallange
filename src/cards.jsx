import React from "react";
import { useContext } from "react";
import { ProductsContext } from "./context";

import "./cards.css";
const Cards = ({ _id, nat, name, gender, email }) => {
  const { id, setid } = useContext(ProductsContext);
  function addProduct() {
    setid(_id);
    console.log(id);
  }

  return (
    <div onClick={addProduct} className="container">
      <div className="card">
        <a className="gen">
          {gender}
          {" . " + _id}
          {nat}
        </a>
        <h3>{name}</h3>
        <div className="mail">{email}</div>
      </div>
    </div>
  );
};

export default Cards;
