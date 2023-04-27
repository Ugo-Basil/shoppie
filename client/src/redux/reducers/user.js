import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  LOAD_USER_REQUEST: (state, action) => {
    state.loading = true;
  },
  LOAD_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  LOAD_USER_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  // update user info
  UPDATE_USER_INFO_REQUEST: (state, action) => {
    state.loading = true;
  },
  UPDATE_USER_INFO_SUCCESS: (state, action) => {
    state.loading = false;

    state.user = action.payload;
  },
  UPDATE_USER_INFO_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //update user address
  UPDATE_USER_ADDRESS_REQUEST: (state, action) => {
    state.loading = true;
  },
  UPDATE_USER_ADDRESS_SUCCESS: (state, action) => {
    state.addressloading = false;
    state.successMessage = action.payload.successMessage;
    state.user = action.payload.user;
  },
  UPDATE_USER_ADDRESS_FAILED: (state, action) => {
    state.addressloading = false;
    state.error = action.payload;
  },

  //delete user address

  DELETE_USER_ADDRESS_REQUEST: (state, action) => {
    state.addressloading = true;
  },

  DELETE_USER_ADDRESS_SUCCESS: (state, action) => {
    state.addressloading = false;
    state.successMessage = action.payload.successMessage;
    state.user = action.payload.user;
  },
  DELETE_USER_ADDRESS_FAILED: (state, action) => {
    state.addressloading = false;
    state.error = action.payload;
  },

  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },

  CLEAR_MESSAGES: (state, action) => {
    state.successMessage = null;
  },
});
