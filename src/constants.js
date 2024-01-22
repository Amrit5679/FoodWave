// Image CDN URL for Restaurant card
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
// Image CDN URl for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
// Swiggy API to get Restaurant data with corsproxy
export const swiggy_api_URL =
  // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
  //hyd
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&page_type=DESKTOP_WEB_LISTING";
// Swiggy Menu api url
export const swiggy_menu_api_URL =
// "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4875418&lng=78.3953462&restaurantId=46881&catalog_qa=undefined&submitAction=ENTER";
//hyd
"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4875418&lng=78.3953462&restaurantId=";

export const shimmer_card_unit = 8;
export const shimmer_menu_card_unit = 4;

export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";