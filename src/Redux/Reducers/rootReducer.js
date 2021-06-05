import { combineReducers } from "redux";

import authReducer from "./authReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  authDetail: authReducer,
  loginUser: loginReducer
});

export default rootReducer;
