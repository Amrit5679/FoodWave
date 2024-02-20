import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../Utilities/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return(
        <div className="cart">
            <div className="cartItems">
                {cartItems.length==0 ? <h1>Cart is Empty<br/>Add Items to the cart</h1>:(
                    cartItems?.map((item) => (
                        // <FoodItem key={item.id} {...item} />
                        <FoodItem key={item.id} item={item} />
                    )))
                }
            </div>
            <button className="clear-btn" onClick={()=>handleClearCart()}>Clear</button>
        </div>
    );
}
export default Cart;