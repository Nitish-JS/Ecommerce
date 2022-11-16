import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    emptyCart: (state) => {
      state.products = [];
      state.total = 0;
      state.quantity = 0;
    },
    itemAddHandler: (state, action) => {
      //  console.log(action.payload);
      const ind = state.products.findIndex((item) => {
        return item._id === action.payload;
      });
      state.products[ind].quantity++;
      let curPrice = state.products[ind].price;
      state.total += curPrice;

      console.log(ind);
    },
    itemRemoveHandler: (state, action) => {
      const ind = state.products.findIndex((item) => {
        return item._id === action.payload;
      });
      let quantity = state.products[ind].quantity;
      if (quantity === 0) {
        state.products.splice(ind, 1);
        state.quantity--;
      } else {
        state.products[ind].quantity--;
        let curPrice = state.products[ind].price;
        state.total -= curPrice;
      }
    },
  },
});

export const { addProduct, emptyCart, itemRemoveHandler, itemAddHandler } =
  cartSlice.actions;
export default cartSlice.reducer;
