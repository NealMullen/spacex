import React, { useEffect } from "react";
import * as a from "./actions";
import C from "./constants";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import image from "./assets/img/launch-home.png";
import apiConfig from "./ApiConfigs";
import Filters from './Components/filters/filters'
import { connect, useDispatch } from "react-redux";
import ApiListTest from "./Components/ApiListTest";
import Header from "./Components/Header";



function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(a.fetchPosts(props.apiType));
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
                <ApiListTest type={props.apiType}  />
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
