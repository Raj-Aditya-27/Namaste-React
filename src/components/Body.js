import { resObj } from "../utilities/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  //React hook -> It's a utility function
  //useState is used to store components data as a super variable
  //[array,updateArray]=useState(default Value)
  let [ListRestaurant, setListRestaurant] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            let filteredList = ListRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filteredList);
            setListRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {ListRestaurant.map((restaurant) => (
          // key is used to make a card unique and shouldn't re-render
          <RestaurantCard key={restaurant.info.id} resName={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
