import sortByReducer from "./sortBy";
import postReducer from "./posts";
import filterByYearReducer from "./filterByYear";
import getYearsReducer from "./getYears";
import isLoading from "./loading";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  launchList: combineReducers({
    sortBy: sortByReducer,
    posts: postReducer,
    years: getYearsReducer,
    loading: isLoading,
    filterByYear: filterByYearReducer,
  })
});

export default allReducers;
