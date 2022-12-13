import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { DonutContext } from "../context/donuts";
import AddToCartButton from "./AddToCartButton";
import "./DonutCheckout.css";

const DonutCheckout = ({ donut }) => {
  const { fetchDonut, fetchImage } = useContext(DonutContext);
  const [image, setImage] = useState("");

  useEffect(() => {
    const getImage = async () => {
        setImage(await fetchImage(donut?.image));
    };
    getImage();
  }, [donut.image, fetchDonut, fetchImage]);

  return (
    <div className="donut-checkout">
      <img alt={donut.name} height="300" src={image} />
      <div className="right">
        <div className="inner-left">
          <h3>{donut.name}</h3>
        </div>
        <div className="inner-right">
          <h4>$ {donut.price}</h4>
          <div className="bottom">
            <AddToCartButton donutId={donut.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutCheckout;
