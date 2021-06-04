import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
  } from "../Action/Auth/types";
  
  const initialState = {
    unauthorized_user: null,
    error: '',
    // tryCount: 0
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          unauthorized_user: action.payload.authorized_user,
          error: action.payload.error,
          tryCount: action.payload.tryCount
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
  