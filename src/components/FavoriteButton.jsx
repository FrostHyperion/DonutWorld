import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { DonutContext } from "../context/donuts";
import { AccountContext } from "../context/account";

const FavoriteButton = ({ donutId }) => {
  const { favorites, removeFromFavorites, addToFavorites } =
    useContext(DonutContext);
  const { user } = useContext(AccountContext);

  const [isFavourite, setIsFavourite] = useState(
    favorites?.filter((f) => f.donut_id == donutId) || false
  );

  useEffect(() => {
    setIsFavourite(favorites?.filter((f) => f.donut_id == donutId) || false);
  }, [favorites, donutId]);

  return (
    <div className="favorite-button">
      {isFavourite.length ? (
        <AiFillHeart
          onClick={() => {
            if (user) {
              removeFromFavorites(
                favorites?.filter((f) => f.donut_id == donutId)[0].id,
                donutId
              );
            } else {
              window.alert("You need to login to perform is action.");
            }
          }}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => {
            if (user) {
              addToFavorites(donutId);
            } else {
              window.alert("You need to login to perform is action.");
            }
          }}
        />
      )}
    </div>
  );
};

export default FavoriteButton;
