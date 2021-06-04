import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
  } from "../Action/Auth/types";
  
  const initialState = {
    loading: true,
    auth: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          loading: action.payload.loading,
          auth: action.payload.auth
        };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  