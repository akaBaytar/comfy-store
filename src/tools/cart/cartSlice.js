import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 1500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.cartID);

      item ? (item.count += product.count) : state.cartItems.push(product);

      state.numItemsInCart += product.count;
      state.cartTotal += product.price * product.count;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success('Product has been added to the cart.');
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);

      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
      state.numItemsInCart -= product.count;
      state.cartTotal -= product.price * product.count;

      cartSlice.caseReducers.calculateTotals(state);

      toast.info('Product has been removed from the cart.');
    },

    editItem: (state, action) => {
      const { cartID, count } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);

      state.numItemsInCart += count - product.count;
      state.cartTotal += product.price * (count - product.count);

      product.count = count;

      cartSlice.caseReducers.calculateTotals(state);

      toast.info('Amount of the product has been updated.');
    },

    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(defaultState));
      return defaultState;
    },

    calculateTotals: (state) => {
      state.tax = 0.18 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;

      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
