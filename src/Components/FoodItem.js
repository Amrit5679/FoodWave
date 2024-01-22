import { ITEM_IMG_CDN_URL} from "../constants";

// FoodItem component: Image, name, description,price
const FoodItem = ({name,description,cloudinaryImageId,price,imageId}) => {
  return (
    <div className="foodItems">
      <img src={ITEM_IMG_CDN_URL + imageId} />
      <h3>{name}</h3>
      <h4>{description}</h4>
      <h3>Rupees: {price /100}</h3>
    </div>
  );
};

export default FoodItem;