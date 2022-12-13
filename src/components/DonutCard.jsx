import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DonutContext } from "../context/donuts";
import AddToCartButton from "./AddToCartButton";
import "./DonutCard.css";
import FavoriteButton from "./FavoriteButton";

const DonutCard = ({ donut }) => {
  const [image, setImage] = useState("");

  const { fetchImage } = useContext(DonutContext);

  useEffect(() => {
    const getImage = async () => {
      setImage(await fetchImage(donut.image));
    };
    getImage();
  }, [image, donut]);

  return (
    <div className="donut">
      <Link to={`/donut/${donut.id}`}>
        <img alt={donut.name} height="300" src={image} />
      </Link>
      <div className="middle">
        <div>
          <Link to={`/donut/${donut.id}`}>
            <h3>{donut.name}</h3>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "baseline",
            }}
          >
            <Link to={`/donut/${donut.id}`}>
              <h4>$ {donut.price}</h4>
            </Link>
            <div>
              <FavoriteButton donutId={donut.id} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <AddToCartButton donutId={donut.id} />
      </div>
    </div>
  );
};

export default DonutCard;
