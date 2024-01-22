import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  swiggy_menu_api_URL,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY } from "../constants";
import {MenuShimmer} from "./Shimmer";
import useResMenuData from "../Hooks/useResMenuData";
import useOnline from "../Hooks/useOnline";
import userOffline from "./UserOffline";
import UserOffline from "./UserOffline";
import { addItem } from "../Utilities/cartSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const[restaurant,menuItems]=useResMenuData(
      swiggy_menu_api_URL,
      resId,
      RESTAURANT_TYPE_KEY,
      MENU_ITEM_TYPE_KEY
    );
    const isOnline = useOnline();
     
    const dispatch = useDispatch();
    const addFoodItem = (item) => {
      dispatch(addItem(item)); 
    }

    if(!isOnline){
      return <UserOffline />
    }
    return !restaurant ? (
        <MenuShimmer />
    ):(
        <div className="restaurant-menu">
            <div className="restaurant-summary">
              <img className="restaurant-img"
                  src={IMG_CDN_URL+ restaurant?.cloudinaryImageId}
                  alt={restaurant?.name} />
              <div className="restaurant-summary-details">
                <h2 className="restaurant-title">{restaurant?.name}</h2>
                <p className="restaurant-tags">{restaurant?.cuisines?.join(" , ")}</p>
                <div className="restaurant-details">
                  <div className="restaurant-rating" style={
                  (restaurant?.avgRating)<4
                    ?{backgroundColor: "var(--light-red)"}
                    : (restaurant.avgRating)== "_ _"
                    ? {backgroundColor: "white", color: "black"}
                    :{color : "white"}
                    }>
                      <FontAwesomeIcon icon={faStar} />
                      <span>{restaurant?.avgRating}</span>
                  </div>
                  <div className="restaurant-rating-slash">|</div>
                  <div>{restaurant?.sla?.slaString}</div>
                  <div className="restaurant-rating-slash">|</div>
                  <div>{restaurant?.costForTwoMessage}</div>
                </div>
              </div>
            </div>

            <div className="restaurant-menu-content">
              <div className="menu-items-container">
                <div className="menu-title-wrap">
                  <h3 className="meu-title">Recommended</h3>
                  <p className="menu-count">
                    {menuItems.length} ITEMS
                  </p>
                </div>
                <div className="menu-items-list">
                  {menuItems.map((item) =>(
                    <div className="menu-item" key={item?.id}>
                      <div className="menu-item-details">
                        <h3 className="item-title">{item?.name}</h3>
                        <p className="item-cost">
                          {item?.price > 0  ? 
                              new Intl.NumberFormat("en-IN",{
                                style: "currency",
                                currency:"INR",
                              }).format(item?.price / 100)
                            : " "}
                        </p>
                        <p className="item-desc">{item?.description}</p>
                      </div>
                      <div className="menu-img-wrapper">
                        {item?.imageId && (
                          <img className="menu-item-img"
                            src={ITEM_IMG_CDN_URL+ item?.imageId}
                            alt={item?.name}/>
                        )}
                        <button className="add-btn"
                           onClick={()=>addFoodItem(item)}>ADD +</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;