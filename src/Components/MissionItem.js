import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Deonstruct the array we passed over form the list component
const MissionItem = ({ mission_name, mission_id, description }) => (
  <li className="item p-3 mb-3 bg-white rounded">
    <Container>
      <Row>
        <Col>
          <span>{mission_name}</span>
        </Col>
        <Col className="align-right">
          <span>ID: {mission_id}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{description}</p>
        </Col>
      </Row>
    </Container>
  </li>
);

export default MissionItem;
