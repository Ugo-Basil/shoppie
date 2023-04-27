import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const sellerReducer = createReducer(initialState, {
  LOAD_SELLER_REQUEST: (state) => {
    state.isLoading = true;
  },
  LOAD_SELLER_SUCCESS: (state, action) => {
    state.isSeller = true;
    state.isLoading = false;
    state.seller = action.payload;
  },
  LOAD_SELLER_FAIL: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.isSeller = false;
  },
  CLEAR_ERRORS: (state) => {
    state.error = null;
  },
});
