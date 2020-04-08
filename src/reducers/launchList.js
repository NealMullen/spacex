import C from "../constants";

const initialState = {
  apiType: C.LAUNCH_API,
  sortBy: C.SORT_ASC,
  posts: [],
  years: [],
  loading: true,
  filterByYear: null,
};

const launchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.CHANGE_API_TYPE:
      return Object.assign({}, state, {
        apiType: action.payload,
      });
    case C.FETCH_DATA:
      return Object.assign({}, state, {
        posts: action.payload,
      });
    case C.SORT_ASC:
      return Object.assign({}, state, {
        sortBy: C.SORT_ASC,
      });
    case C.SORT_DESC:
      return Object.assign({}, state, {
        sortBy: C.SORT_DESC,
      });
    case C.FILTER_YEAR:
      return Object.assign({}, state, {
        filterByYear: action.payload,
      });
    case C.GET_UNIQUE_YEARS:
      return Object.assign({}, state, {
        years: action.payload,
      });
    case C.LOADING:
      return Object.assign({}, state, {
        loading: action.payload,
      });
    default:
      return state;
  }
};

export default launchListReducer;
