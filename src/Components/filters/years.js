import React from "react";
import Dropdown from "react-dropdown";
import * as a from "../../actions";
import { connect, useDispatch } from "react-redux";

function YearFilter(props){
    const dispatch = useDispatch();
    const filterYear = (selectedOption) => {
        dispatch(a.filterByYear(selectedOption));
      };
    return(
        <Dropdown
        options={props.years}
        className="filter-control action"
        onChange={filterYear}
        value={props.filterByYear}
        placeholder="Filter by year"
      />
    )
}

const mapStateToProps = (state) => {
    const {years, filterByYear } = state.launchList;
    return {
      years: years,
      filterByYear: filterByYear,
    };
  };
  
  export default connect(mapStateToProps)(YearFilter);
  