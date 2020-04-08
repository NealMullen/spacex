import React from "react";
import * as a from "../../actions";
import { connect, useDispatch } from "react-redux";
import C from "../../constants";
import sortIcon from "../../assets/icon/sort.png";

function SortBy(props) {
  const dispatch = useDispatch();
  const sortAction =
    props.sortBy === C.SORT_ASC ? a.sortByDesc() : a.sortByAsc();
  let sortByText =
    props.sortBy === C.SORT_ASC ? "Sort Descending" : "Sort Ascending";
  const sortOrder = () => {
    dispatch(sortAction);
  };
  return (
    <button className="filter-control action" onClick={sortOrder}>
      <span>{sortByText}</span> <img src={sortIcon} alt="" />
    </button>
  );
}

const mapStateToProps = (state) => {
  const { sortBy } = state.launchList;
  return {
    sortBy: sortBy,
  };
};

export default connect(mapStateToProps)(SortBy);
