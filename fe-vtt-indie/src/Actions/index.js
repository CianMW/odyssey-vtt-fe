import thunk from "redux-thunk";

export const setBasicAuth = (auth) => {
  return async (dispatch) => {
    console.log("THIS IS THE base 64 auth", auth);

    dispatch({
      type: "SETBASEAUTH",
      payload: auth,
    });
  };
};
export const setUser = (user) => {
  return async (dispatch) => {
    console.log("THIS IS THE user", user);

    dispatch({
      type: "SETUSER",
      payload: user,
    });
  };
};
  
  export const setLoggedIn = (val) => {
    return async (dispatch) => {
      dispatch({
        type: "SETLOGGEDIN",
        payload: val,
      });
    };
  };
  
  export const setLocation = (path) => {
    return async (dispatch) => {
      dispatch({
        type: "SETLOCATION",
        payload: path,
      });
    };
  };
  
 