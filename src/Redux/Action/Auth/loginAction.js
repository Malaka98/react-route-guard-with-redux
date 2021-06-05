import axios from "axios";
import { createBrowserHistory } from "history";


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
    })
      .then((res) => {
        const auth = res.data;
        // auth.tryCount = ++fdata.count;
        if(!auth.authorized_user) {
          dispatch(loginUserSuccess(auth));
        }
        if(auth.authorized_user) {
          createBrowserHistory().push("/dashboard?uname=root");
          window.location.reload();
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
