import React, { useEffect } from "react";
import ApiItem from "./ApiItem";
import Select from "react-select";
import { Actions as a } from "../actions";
import C from "../constants";

import { connect, useDispatch } from "react-redux";

function ApiItemList(props) {
  const dispatch = useDispatch();
  const dispatchAction =
    props.sortBy === C.SORT_ASC ? a.sortByDesc() : a.sortByAsc();
  let sortByText =
    props.sortBy === C.SORT_ASC ? "Sort Descending" : "Sort Ascending";

  const handleClick = () => {
    dispatch(dispatchAction);
  };

  const handleChange = (selectedOption) => {
    dispatch(a.filterYear(selectedOption));
  };

  useEffect(() => {
    dispatch(a.fetchPosts());
  }, []);

  return (
    <div>
      <Select
        value={props.filterByYear}
        onChange={handleChange}
        options={props.years}
        placeholder="Filter by year"
      />
      <ol>
        <p onClick={handleClick}>{sortByText}</p>
        {(props.posts || []).map((item, i) => (
          <ApiItem key={i} {...item} />
        ))}
      </ol>
    </div>
  );
}
const mapStateToProps = (state) => {
  const launchlist = state.launchList;
  return {
    posts: sortPosts(launchlist),
    sortBy: launchlist.sortBy,
    years: launchlist.years,
    filterByYear: launchlist.filterByYear,
  };
};

const sortPosts = (launchlist) => {
  let posts = launchlist.posts;
  if (
    launchlist.filterByYear != null &&
    launchlist.filterByYear.value != null
  ) {
    posts = posts.filter(
      (post) =>
        new Date(post.launch_date_utc).getFullYear() ===
        launchlist.filterByYear.value
    );
  }
  posts =
  launchlist.sortBy === C.SORT_ASC ? posts : posts.slice().reverse();
  return posts;
};

export default connect(mapStateToProps)(ApiItemList);
