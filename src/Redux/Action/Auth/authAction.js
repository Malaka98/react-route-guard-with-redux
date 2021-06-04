import axios from "axios";

import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./types";

const fetchUserSuccess = (auth) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: auth,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "http://localhost:4000/auth/check",
      withCredentials: true
    })
      .then((res) => {
        const auth = res.data;
        dispatch(fetchUserSuccess(auth));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(error);
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
