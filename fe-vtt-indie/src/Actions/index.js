export const fetchJobsAction = (url) => {
    // do fetch stuff
    return async (dispatch) => {
      console.log("THIS IS THE URL", url);
      
      dispatch({
        type: "TOGGLE_LOADER",
        payload: true,
      });
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log("HERE IS THE FETCHED DATA :", data);
        const spreadData = [...data.data];
        await dispatch({
          type: "SET_JOBS",
          payload: spreadData,
        });
        setTimeout(() => {
          dispatch({
            type: "TOGGLE_LOADER",
            payload: false,
          });
        }, 1000);
      } else {
        console.log("ERROR: could not fetch data");
      }
    };
  };
  
  export const addToFavourites = (element) => {
    return async (dispatch) => {
      dispatch({
        type: "FAVOURITE",
        payload: element,
      });
    };
  };
  
  export const removeFromFavourites = (element) => {
    return async (dispatch) => {
      dispatch({
        type: "REMOVE_FAVOURITE",
        payload: element,
      });
    };
  };
  
 