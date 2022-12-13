import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import FavoriteButton from "../components/FavoriteButton";
import { DonutContext } from "../context/donuts";
import "./Donut.css";

const Donut = () => {
  const { id } = useParams();
  const [donut, setDonut] = useState({});
  const { fetchDonut, fetchImage } = useContext(DonutContext);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchDonut(id)
      .then((response) => {
        const getImage = async () => {
          setImage(await fetchImage(response.image));
        };
        getImage();
        setDonut(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fetchDonut, fetchImage, id]);

  return (
    <div className="details">
      <div className="container">
        <img src={image} alt={donut?.name} />
        <div className="right">
          <div className="inner-left">
            <p>{donut?.name}</p>
            <p>$ {donut?.price}</p>
          </div>
          <div className="inner-right">
            <div>
              <FavoriteButton donutId={donut.id} />
            </div>
            <AddToCartButton donutId={donut.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donut;
