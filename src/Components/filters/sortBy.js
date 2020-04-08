import React from "react";
import { connect, useDispatch } from "react-redux";
import sortIcon from "../../assets/icon/sort.png";
import Helpers from '../../helpers'

function SortBy(props) {
  const sortAction = Helpers.getSortByAction(props.sortBy);
  let sortByText = Helpers.getSortByText(props.sortBy);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(sortAction);
  };

  return (
    <button className="filter-control action" onClick={handleClick}>
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
