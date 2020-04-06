import C from "../constants";

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

export const fetchPosts = () => {
  return function (dispatch) {
    fetch(
      `https://api.spacexdata.com/v3/launches?filter=flight_number,mission_name,launch_date_utc&pretty=true`
    )
      .then((res) => res.json())
      .then((posts) => {
        var dates = getUniqueYear(posts);
        console.log(dates);
        dispatch(populatePosts(posts));
        dispatch(populateUniqueYears(dates));
      });
  };
}
const populatePosts = (posts) =>{
  return {
    type: C.FETCH_DATA,
    payload: posts,
  };
}
const populateUniqueYears = (years) =>{
  return {
    type: C.GET_UNIQUE_YEARS,
    payload: years,
  };
}
export const refresh = () =>{
  return function (dispatch) {
    fetchPosts();
    dispatch(filterByYear(null));
    dispatch(sortByAsc());
  }
}

export const sortByDesc = () =>{
  return {
    type: C.SORT_DESC,
  };
}

export const filterByYear = (year) =>{
  return {
    type: C.FILTER_YEAR,
    payload: year,
  };
}

export const sortByAsc = () =>{
  return {
    type: C.SORT_ASC,
  };
}