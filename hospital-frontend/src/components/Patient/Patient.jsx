import { Col, Container, Row } from "react-bootstrap";
import "./Patient.css";
import Visits from "../Visits/Visits";
import { useState } from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { useID } from "../../context/IDProvider";
import { useNavigate } from "react-router-dom";

function Patient({ patient, showVisits }) {
  const [show, setShow] = useState(showVisits);

  return (
    <div>
      <CardWrapper>
        <Container fluid className="p-3" onClick={() => setShow(!show)}>
          <Row>
            <Col>
              <p className="sub_title mb-0">{patient.name}</p>
            </Col>
            <Col>
              <p className="sub_title mb-0">{patient.gender}</p>
            </Col>
            <Col>
              <p className="sub_title mb-0">{patient.age}</p>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <div className={`show_hide-button ${show ? "show" : ""}`}>
                <div className="line_1"></div>
                <div className="plus_1"></div>
                <div className="plus_2"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </CardWrapper>
      <div className={`d-flex flex-column gap-2 ${show && "mt-2"}`}>
        {show &&
          patient.visits.map((visit) => (
            <Visits
              key={visit.id}
              patient_id={patient.id}
              patient_name={patient.name}
              visit={visit}
            />
          ))}
      </div>
    </div>
  );
}

export default Patient;
