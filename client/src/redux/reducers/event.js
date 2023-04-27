import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, {
  EVENT_CREATE_REQUEST: (state) => {
    state.isLoading = true;
  },
  EVENT_CREATE_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.event = action.payload;
    state.success = true;
  },
  EVENT_CREATE_FAILED: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all events of shop
  GET_ALL_EVENTS_SHOP_REQUEST: (state) => {
    state.isLoading = true;
  },
  GET_ALL_EVENTS_SHOP_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.events = action.payload;
  },
  GET_ALL_EVENTS_SHOP_FAILED: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete event of a shop
  DELETE_EVENT_REQUEST: (state) => {
    state.isLoading = true;
  },
  DELETE_EVENT_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  DELETE_EVENT_FAILED: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all events
  GET_ALL_EVENTS_REQUEST: (state) => {
    state.isLoading = true;
  },
  GET_ALL_EVENTS_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.allEvents = action.payload;
  },
  GET_ALL_EVENTS_FAILED: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

 CLEAR_ERRORS: (state) => {
    state.error = null;
  },
});
