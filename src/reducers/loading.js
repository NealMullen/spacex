import C from "../constants";

const initialState = true;

const isLoading = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      return action.payload;
    default:
      return state;
  }
};

export default isLoading;
