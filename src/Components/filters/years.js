import React from "react";
import Dropdown from "react-dropdown";
import {filterByYear} from "../../actions";
import { connect, useDispatch } from "react-redux";

function YearFilter(props){
    const dispatch = useDispatch();
    const handleChange = (selectedOption) => {
        dispatch(filterByYear(selectedOption));
      };
    return(
        <Dropdown
        options={props.years}
        className="filter-control action"
        onChange={handleChange}
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
  