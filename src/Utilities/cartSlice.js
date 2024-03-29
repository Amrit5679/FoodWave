import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state,action) => {
            state.items.push(action.payload);
        },
        removeItem : (state,action) => {
            const nextcartItems=state.items.filter(
                (item)=> item.id !== action.payload.id
            );
            state.items =nextcartItems;
        },
        clearCart: (state) => {
            state.items= [];
        },
    },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;