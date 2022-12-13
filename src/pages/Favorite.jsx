import { useContext } from "react";
import DonutCard from "../components/DonutCard";
import { DonutContext } from "../context/donuts";
import "./Favorite.css";

function Favorite() {
  const { favorites } = useContext(DonutContext);

  return (
    <div className="favorite">
      {favorites?.map((product) => {
        return <DonutCard key={product.id} donut={product.donut} />;
      })}
    </div>
  );
}

export default Favorite;
