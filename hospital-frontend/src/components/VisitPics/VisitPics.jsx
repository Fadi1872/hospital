import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

function VisitPics({ children, add }) {
  return (
    <Container fluid>
      <Row className="g-2">
        <Col className="px-0" lg={12}>
          {add && (
            <div className="card_back p-3 d-flex justify-content-center align-items-center sub_title">
              <FaPlus />
            </div>
          )}
        </Col>
        {children}
      </Row>
    </Container>
  );
}

export default VisitPics;
