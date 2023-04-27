// add to wishlist
export const addToWishlist = (data) => async (dispatch, getState) => {
  dispatch({
    type: "ADD_TO_WISHLIST",
    payload: data,
  });

  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlist)
  );
  return data;
};

// remove from wishlist
export const removeFromWishlist = (data) => async (dispatch, getState) => {
  dispatch({
    type: "REMOVE_FROM_WISHLIST",
    payload: data._id,
  });
  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlist)
  );
  return data;
};
