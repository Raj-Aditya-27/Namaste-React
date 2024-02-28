import { resObj } from "../utilities/mockData";
import RestaurantCard from "./RestaurantCard"

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resObj.map((restaurant) => (
          // key is used to make a card unique and shouldn't re-render
          <RestaurantCard key={restaurant.info.id} resName={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
