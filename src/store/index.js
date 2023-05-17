import { configureStore } from "@reduxjs/toolkit";

import uiActions from "./ui-slice";
import cartActions from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: uiActions,
    cart: cartActions,
  },
});

export default store;
