import axios from "axios";
import { push } from "connected-react-router";

import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./types";

const loginUserSuccess = (auth) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: auth,
  };
};

const loginUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const userLogin = (fdata) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "http://localhost:4000/auth/singin",
      responseType: "json",
      data: fdata,
      withCredentials: true
    })
      .then((res) => {
        const auth = res.data;
        // auth.tryCount = ++fdata.count;
        if(!auth.authorized_user) {
          dispatch(loginUserSuccess(auth));
        }
        if(auth.authorized_user) {
          dispatch(push("/dashboard?uname=root"));
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(error);
        dispatch(loginUsersFailure(errorMsg));
      });
  };
};

export default userLogin;
