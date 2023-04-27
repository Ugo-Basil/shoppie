import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, {
  PRODUCT_CREATE_REQUEST: (state) => {
    state.isLoading = true;
  },
  PRODUCT_CREATE_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  PRODUCT_CREATE_FAILED: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all products of shop
  GET_ALL_PRODUCTS_SHOP_REQUEST: (state) => {
    state.isLoading = true;
  },
  GET_ALL_PRODUCTS_SHOP_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  GET_ALL_PRODUCTS_SHOP_FAILED: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete product of a shop
  DELETE_PRODUCT_REQUEST: (state) => {
    state.isLoading = true;
  },
  DELETE_PRODUCT_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  DELETE_PRODUCT_FAILED: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all products
  GET_ALL_PRODUCTS_REQUEST: (state) => {
    state.isLoading = true;
  },
  GET_ALL_PRODUCTS_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  GET_ALL_PRODUCTS_FAILED: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  CLEAR_ERRORS: (state) => {
    state.error = null;
  },
});
