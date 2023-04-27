import axios from "axios";
import { server } from "../../server";

// get all orders of user
export const getAllOrdersOfUser = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ALL_ORDERS_USER_REQUEST",
    });

    const { data } = await axios.get(
      `${server}/order/get-all-orders/${userId}`
    );

    dispatch({
      type: "GET_ALL_ORDERS_USER_SUCCESS",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "GET_ALL_ORDERS_USER_FAILED",
      payload: error.response.data.message,
    });
  }
};

// get all orders of seller
export const getAllOrdersOfShop = (shopId) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ALL_ORDERS_SHOP_REQUEST",
    });

    const { data } = await axios.get(
      `${server}/order/get-seller-all-orders/${shopId}`
    );

    dispatch({
      type: "GET_ALL_ORDERS_SHOP_SUCCESS",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "GET_ALL_ORDERS_SHOP_FAILED",
      payload: error.response.data.message,
    });
  }
};
