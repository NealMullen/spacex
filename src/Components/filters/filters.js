import React from "react";
import YearFilter from './years'
import apiConfig from "../../ApiConfigs";
import SortBy from './sortBy'
import { connect } from "react-redux";

function Filters(props){
    const showYearFilter = apiConfig[props.apiType].filterByYear;

    if(showYearFilter){
      return(
        <div className="filters clearfix">
          <YearFilter/>
          <SortBy/>
        </div>
      )
    }
    else{
      return (
        <div className="filters clearfix">
        <SortBy/>
      </div>
      )
    }
}
const mapStateToProps = (state) => {
  const {apiType } = state.launchList;
  return {
    apiType: apiType,
  };
};

export default connect(mapStateToProps)(Filters);

  