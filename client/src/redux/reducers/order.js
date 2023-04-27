import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const orderReducer = createReducer(initialState, {
  // get all orders of user
  GET_ALL_ORDERS_USER_REQUEST: (state) => {
    state.isLoading = true;
  },
  GET_ALL_ORDERS_USER_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.orders = action.payload;
  },
  GET_ALL_ORDERS_USER_FAILED: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all orders of shop
  GET_ALL_ORDERS_SHOP_REQUEST: (state) => {
    state.isLoading = true;
  },
  GET_ALL_ORDERS_SHOP_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.orders = action.payload;
  },
  GET_ALL_ORDERS_SHOP_FAILED: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  CLEAR_ERRORS: (state) => {
    state.error = null;
  },
});
