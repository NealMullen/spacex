import React from "react";
import LaunchItem from "./LaunchItem";
import MissionItem from "./MissionItem";
import C from "../constants";
import Helpers from '../helpers'
import { connect } from "react-redux";

function ApiList(props) {
  if(props.apiType === C.LAUNCH_API){
      return(
        <ol className="list no-style">
            {(props.posts || []).map((item, i) => (
              <LaunchItem key={i} {...item} />
            ))}
        </ol>
      )
  }
  else if(props.apiType === C.MISSIONS_API){
      return(
        <ol className="list no-style">
        {(props.posts || []).map((item, i) => (
          <MissionItem key={i} {...item} />
        ))}
      </ol>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    posts: Helpers.sortPosts(state.launchList),
    apiType:state.launchList.apiType
  };
};

export default connect(mapStateToProps)(ApiList);
