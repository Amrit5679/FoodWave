import { ITEM_IMG_CDN_URL } from "../constants";
import { removeItem } from "../Utilities/cartSlice";
import { useDispatch } from "react-redux";

// FoodItem component: Image, name, description,price
// const FoodItem = ({ name, description, cloudinaryImageId, price, imageId }) => {
//   const dispatch = useDispatch();
//   const removeFoodItem = () => {
//     const item = { name, description, cloudinaryImageId, price, imageId };
//     dispatch(removeItem(item));
//   };
//   return (
//     <div className="foodItems">
//       <img src={ITEM_IMG_CDN_URL + imageId} />
//       <h3>{name}</h3>
//       <h4>{description}</h4>
//       <h3>Rupees: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price / 100)}</h3>
//       <button className="remove_item" onClick={() => removeFoodItem()}>
//         Remove
//       </button>
//     </div>
//   );
// };
const FoodItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFoodItem = (itemz) => {
      dispatch(removeItem(itemz));
  };

  return (
      <div className="foodItems">
          <img src={ITEM_IMG_CDN_URL + item.imageId} alt={item.name} />
          <h3>{item.name}</h3>
          <h4>{item.description}</h4>
          <h3>Rupees: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price / 100)}</h3>
          <button className="remove-item" onClick={()=>removeFoodItem(item)}>
              Remove
          </button>
      </div>
  );
};

export default FoodItem;
