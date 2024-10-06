import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        product: [],
        count: 0,
        total: 0,
    },
    reducers:{
        setCart: (state, action) => {
            console.log('action', action.payload);
            state.product = action.payload;
            state.count = action.payload?.length;
            state.total = action.payload?.reduce((total, product) => total + product.productId.price * product.quantity, 0);
        },
        
        removeProduct: (state, action) => {
            debugger; //3
            state.count -= 1;
            state.total -= action.payload.productId.price * action.payload.quantity;
            state.product = state.product.filter(productItem => productItem._id !== action.payload._id)
        },
        clearCart: (state) => {
            state.count = 0;
            state.product = [];
            state.total = 0
        }
    },
})

export const {addProduct,clearCart,setCart,removeProduct} = cartSlice.actions;
export default cartSlice.reducer;