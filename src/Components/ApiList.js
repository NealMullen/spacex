import React, { useEffect } from "react";
import LaunchItem from "./LaunchItem";
import * as a from "../actions";
import C from "../constants";
import sortIcon from "../assets/icon/sort.png";
import reloadIcon from "../assets/icon/refresh.png";
import Dropdown from "react-dropdown";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import image from "../assets/img/launch-home.png";

import { connect, useDispatch } from "react-redux";

function ApiList(props) {
  console.log(props);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(a.fetchPosts(props.type));
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
    dispatch(a.refresh(props.type));
  };

  return (
    <div className="list-comp">
      <button className="btn action reload" onClick={refresh}>
        <span>Reload data</span> <img src={reloadIcon} alt="" />
      </button>
      <Container>
        <Row>
          <Col>
            <div className="filters clearfix">
              <Dropdown
                options={props.years}
                className="filter-control action"
                onChange={filterYear}
                value={props.filterByYear}
                placeholder="Filter by year"
              />
              <button className="filter-control action" onClick={sortOrder}>
                <span>{sortByText}</span> <img src={sortIcon} alt="" />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={4} className="d-none d-md-block">
            <img src={image} alt="" className="home-img"/>
          </Col>
          <Col md={8}>
            <IsLoading loading={props.loading}/>
            <ol className="list no-style">
              {(props.posts || []).map((item, i) => (
                <LaunchItem key={i} {...item} />
              ))}
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function IsLoading(props){
  return props.loading === true ?
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      :
      null
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

export default connect(mapStateToProps)(ApiList);
