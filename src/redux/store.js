import { createStore } from "redux";
import signupReducer from "./reducers/";

const store = createStore(signupReducer);
export default store;