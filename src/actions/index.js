import C from "../constants";
import apiConfig from '../ApiConfigs';

const getUniqueYear = (api) => {
  let dateList = new Set();
  let dates = [{ value: null, label: "All" }];
  api.forEach(function (apiItem) {
    var date = new Date(apiItem.launch_date_utc);
    dateList.add(date.getFullYear());
  });
  dateList.forEach((date) => {
    dates.push({ value: date, label: date });
  });
  return dates;
};

export const fetchPosts = (apiType) => {

  let url = `${apiConfig.baseUrl}${apiConfig[apiType].url}?filters=${apiConfig[apiType].filter}`;

  return function (dispatch) {
    dispatch(isLoading(true));
    fetch(url)
      .then((res) => res.json())
      .then((posts) => {
        var dates = getUniqueYear(posts);
        dispatch(populatePosts(posts));
        dispatch(isLoading(false));
        dispatch(populateUniqueYears(dates));
      })
      .catch(function (error) {
        dispatch(isLoading(false));
      });
  };
};
const isLoading = (loaded) => {
  return {
    type: C.LOADING,
    payload: loaded,
  };
};

const updateType = (type) => {
  return {
    type: "TYPE",
    payload: type,
  };
};

export const changeType = (type) => {
  return function (dispatch) {
    dispatch(fetchPosts(type));
    dispatch(updateType(type));
  };
};
const populatePosts = (posts) => {
  return {
    type: C.FETCH_DATA,
    payload: posts,
  };
};
const populateUniqueYears = (years) => {
  return {
    type: C.GET_UNIQUE_YEARS,
    payload: years,
  };
};
export const refresh = (apiType) => {
  return function (dispatch) {
    dispatch(fetchPosts(apiType));
    dispatch(filterByYear(null));
    dispatch(sortByAsc());
  };
};

export const sortByDesc = () => {
  return {
    type: C.SORT_DESC,
  };
};

export const filterByYear = (year) => {
  return {
    type: C.FILTER_YEAR,
    payload: year,
  };
};

export const sortByAsc = () => {
  return {
    type: C.SORT_ASC,
  };
};
