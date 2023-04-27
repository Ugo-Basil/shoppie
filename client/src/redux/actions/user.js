import axios from "axios";
import { server } from "../../server";

//load user


export const loadUser = () => async (dispatch) => {
  dispatch({ type: "LOAD_USER_REQUEST" });

  try {
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({ type: "LOAD_USER_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "LOAD_USER_FAIL", payload: error.message });
  }
};


//load seller

export const loadSeller = () => async (dispatch) => {
  dispatch({ type: "LOAD_SELLER_REQUEST" });

  try {
    const { data } = await axios.get(`${server}/shop/getseller`, {
      withCredentials: true,
    });
    dispatch({ type: "LOAD_SELLER_SUCCESS", payload: data.seller });
  } catch (error) {
    dispatch({
      type: "LOAD_SELLER_FAIL",
      payload: error.response.data.message,
    });
  }
};


// user profile update

export const updateUserInformation =
  (name, email, phoneNumber, password) => async (dispatch) => {
    dispatch({ type: "UPDATE_USER_INFO_REQUEST" });

    try {
      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        { name, email, phoneNumber, password },
        { withCredentials: true }
      );
      dispatch({ type: "UPDATE_USER_INFO_SUCCESS", payload: data.user });
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_INFO_FAIL",
        payload: error.response.data.message,
      });
    }
  };


// update user address
export const updateUserAddress =
  (country, city, address1, address2, zipCode, addressType) =>
  async (dispatch) => {
    dispatch({ type: "UPDATE_USER_ADDRESS_REQUEST" });

    try {
      const { data } = await axios.put(
        `${server}/user/update-user-addresses`,
        { country, city, address1, address2, zipCode, addressType },
        { withCredentials: true }
      );
      dispatch({
        type: "UPDATE_USER_ADDRESS_SUCCESS",
        payload: {
          successMessage: "User address updated successfully!",
          user: data.user,
        },
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_ADDRESS_FAILED",
        payload: error.response.data.message,
      });
    }
  };

//delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_USER_ADDRESS_REQUEST" });

  try {
    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      { withCredentials: true }
    );
    dispatch({
      type: "DELETE_USER_ADDRESS_SUCCESS",
      payload: {
        successMessage: "User address deleted successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: "DELETE_USER_ADDRESS_FAILED",
      payload: error.response.data.message,
    });
  }
};;
