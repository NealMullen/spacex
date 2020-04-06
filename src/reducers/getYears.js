import C from "../constants";

const initialState = [];
const getYearsReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.GET_UNIQUE_YEARS:
      return action.payload;
    default:
      return state;
  }
};

export default getYearsReducer;
