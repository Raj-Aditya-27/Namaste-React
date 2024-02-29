import { resObj } from "../utilities/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //React hook -> It's a utility function
  //useState is used to store components data as a super variable
  //[array,updateArray]=useState(default Value)
  // let [ListRestaurant, setListRestaurant] = useState(resObj);
  let [ListRestaurant, setListRestaurant] = useState([]);

  //useEffect work after page load->render then it is call
  useEffect(() => {
    fetchData();
    // console.log("Use effect");->This executes after below console.log statement
  }, []);

  // console.log("After useEffect");->This executes before useEffect

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //This is used for page loading time and render time
  //conditional rendering
  if (ListRestaurant.length === 0) {
    // return <h1>Loading...</h1>
    return (
      <div>
        {/* Shimmer is used for dummy card */}
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            let filteredList = ListRestaurant.filter(
              (res) => res.info.avgRating > 4
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
