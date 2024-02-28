import { CARD_URL } from "../utilities/constants";

const RestaurantCard = (props) => {
  const { resName } = props;
  return (
    <div className="restaurant-card">
      <img
        alt="Restaurant"
        src={CARD_URL + resName.info.cloudinaryImageId}
      ></img>
      <h3>{resName.info.name}</h3>
      <h3>{resName.info.cuisines.join(",")}</h3>
      <h3>{resName.info.avgRating}</h3>
      <h3>{resName.info.sla.deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
