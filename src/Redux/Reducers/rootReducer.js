import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import authReducer from "./authReducer";
import loginReducer from "./loginReducer";

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  authDetail: authReducer,
  loginUser: loginReducer
});

export default rootReducer;
