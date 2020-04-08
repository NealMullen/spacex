import React from "react";
import { Container, Row, Col } from "react-bootstrap";
var dateFormat = require("dateformat");

// Deonstruct the array we passed over form the list component
const LaunchItem = ({ flight_number, mission_name, launch_date_utc, rocket }) => (
  <li className="item p-3 mb-3 bg-white rounded">
    <Container>
      <Row>
        <Col>
          <span className="flight-number">#{flight_number}</span>
        </Col>
        <Col>
          <span className="flight-name">{mission_name}</span>
        </Col>
        <Col className="align-right">
          <span className="flight-date">
            {dateFormat(launch_date_utc, "dS mmm yyyy")}
          </span>
          <br />
          <span className="rocket-name">{rocket.rocket_name}</span>
        </Col>
      </Row>
    </Container>
  </li>
);

export default LaunchItem;
