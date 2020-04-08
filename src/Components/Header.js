import React from "react";
import logo from "../assets/spacex-logo.png";
import Dropdown from "react-dropdown";
import C from "../constants";
import RefreshButton from "./actions/RefreshButton";
import { Container, Row, Col } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import {changeType} from "../actions";

function Header(props) {
  let ops = [
    { label: C.LAUNCH_API, value: C.LAUNCH_API },
    { label: C.MISSIONS_API, value: C.MISSIONS_API },
  ];
  const dispatch = useDispatch();
  const handleChange = (selectedOption) => {
    dispatch(changeType(selectedOption.value));
  };

  return (
    <header className="app-header clearfix">
      <Container>
        <Row>
          <Col>
            <div className="logo">
              <img src={logo} className="logo-img" alt="logo" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Dropdown
              options={ops}
              className="type-control"
              value={props.apiType}
              onChange={handleChange}
            />
          </Col>
          <Col className="refresh-col">
            <RefreshButton type={props.apiType} />
          </Col>
        </Row>
      </Container>
    </header>
  );
}
const mapStateToProps = (state) => {
  const { apiType } = state.launchList;
  return {
    apiType: apiType,
  };
};

export default connect(mapStateToProps)(Header);
