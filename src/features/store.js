import { createStore } from "redux";
import cartreducer from "./reducers/cartreducer";

const store = createStore(
  cartreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
