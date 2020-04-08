import React, { useEffect } from "react";
import {fetchPosts} from "./actions";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import image from "./assets/img/launch-home.png";
import Filters from './Components/filters/filters'
import { connect, useDispatch } from "react-redux";
import ApiList from "./Components/ApiList";
import Header from "./Components/Header";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(props.apiType));
  }, []);

  return (
    <div id="app">
      <Header/>
      <div className="api-listing">
        <Container>
          <Row>
            <Col>
                <Filters/>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={4} className="d-none d-md-block">
              <img src={image} alt="" className="home-img" />
            </Col>
            <Col md={8}>
              {props.loading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <ApiList type={props.apiType}  />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { loading,apiType } = state.launchList;
  return {
    loading: loading,
    apiType:apiType
  };
};

export default connect(mapStateToProps)(App);
