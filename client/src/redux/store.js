import { configureStore } from "@reduxjs/toolkit";
import {
  userReducer,
  sellerReducer,
  productReducer,
  eventReducer,
  cartReducer,
  wishlistReducer,
  orderReducer,
} from "./reducers/index";


const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    events: eventReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
  },
});

export default Store;
