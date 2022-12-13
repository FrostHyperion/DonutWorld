import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { DonutContext } from "../context/donuts";
import AddToCartButton from "./AddToCartButton";
import "./DonutCart.css";
import FavoriteButton from "./FavoriteButton";

const DonutCart = ({ donutId }) => {
  const [image, setImage] = useState("");
  const [donut, setDonut] = useState({})

  const { fetchImage, fetchDonut } = useContext(DonutContext);

  useEffect(() => {
    fetchDonut(donutId)
    .then(response => {
        setDonut(response);
    })
    .catch(error => {
        console.log(error)
    })

    const getImage = async () => {
        setImage(await fetchImage(donut.image));
    };
    getImage();
  }, [image, donut]);

  return (
    <div className="donutCart">
      <img alt={donut?.name} src={image} />
      <div className="right">
        <div className="inner-left">
          <h3>{donut?.name}</h3>
          <h4>$ {donut?.price}</h4>
        </div>
        <div className="inner-right">
          <FavoriteButton donutId={donut?.id} />
          <div className="bottom">
            <AddToCartButton donutId={donut?.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutCart;
