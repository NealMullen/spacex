import React from "react";
import LaunchItem from "./LaunchItem";
import MissionItem from "./MissionItem";
import C from "../constants";

import { connect } from "react-redux";

function ApiListTest(props) {

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
    posts: sortPosts(state.launchList),
    apiType:state.launchList.apiType
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

export default connect(mapStateToProps)(ApiListTest);
