import C from "../constants";

const initialState = C.SORT_ASC;

const sortByReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SORT_ASC:
      return C.SORT_ASC;
    case C.SORT_DESC:
      return C.SORT_DESC;
    default:
      return state;
  }
};

export default sortByReducer;
