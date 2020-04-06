import React, { useEffect } from "react";
import ApiItem from "./ApiItem";
import Select from "react-select";
import * as a from "../actions";
import C from "../constants";

import { connect, useDispatch } from "react-redux";

function IsLoading() {
  return <p>Loading...</p>;
}
function ApiItemList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(a.fetchPosts());
  }, []);

  const dispatchAction =
    props.sortBy === C.SORT_ASC ? a.sortByDesc() : a.sortByAsc();

  let sortByText =
    props.sortBy === C.SORT_ASC ? "Sort Descending" : "Sort Ascending";

  const sortOrder = () => {
    dispatch(dispatchAction);
  };

  const filterYear = (selectedOption) => {
    dispatch(a.filterByYear(selectedOption));
  };

  const refresh = () => {
    dispatch(a.refresh());
  };

  return (
    <div>
      <button onClick={refresh}>REFRESH</button>
      <Select
        value={props.filterByYear}
        onChange={filterYear}
        options={props.years}
        placeholder="Filter by year"
      />
      <button onClick={sortOrder}>{sortByText}</button>
      {props.loading ? (
        <IsLoading></IsLoading>
      ) : (
        <ol>
          {(props.posts || []).map((item, i) => (
            <ApiItem key={i} {...item} />
          ))}
        </ol>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  const { sortBy, years, filterByYear, loading } = state.launchList;
  return {
    posts: sortPosts(state.launchList),
    sortBy: sortBy,
    years: years,
    filterByYear: filterByYear,
    loading: loading,
  };
};

const sortPosts = (launchlist) => {
  let { posts, sortBy, filterByYear } = launchlist;
  if (filterByYear != null && filterByYear.value != null) {
    posts = posts.filter(
      (post) =>
        new Date(post.launch_date_utc).getFullYear() === filterByYear.value
    );
  }
  posts = sortBy === C.SORT_ASC ? posts : posts.slice().reverse();
  return posts;
};

export default connect(mapStateToProps)(ApiItemList);
