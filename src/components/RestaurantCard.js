import { CARD_URL } from "../utilities/constants";

const RestaurantCard = (props) => {
  const { resName } = props;
  return (
    <div className="flex flex-col w-[250px] h-[450px] bg-gray-200 justify-between rounded-md  mt-4 p-2 hover:bg-gray-300 transition-all">
      <img className="w-[auto] h-[250px] rounded-md" 
        alt="Restaurant"
        src={CARD_URL + resName.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold">{resName.info.name}</h3>
      <h3 className="truncate">{resName.info.cuisines.join(",")}</h3>
      <h3>{resName.info.avgRating}</h3>
      <h3>{resName.info.sla.deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
