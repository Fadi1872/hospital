import { useID } from "../../context/IDProvider";
import CardWrapper from "../CardWrapper/CardWrapper";
import "./Visits.css";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export default function Visits({ visit, patient_id, patient_name, with_name }) {
  const navigate = useNavigate();
  const { id, setId } = useID();
  const handleOnClick = () => {
    setId({
      user: patient_id,
      user_name: patient_name,
      visit: visit.id,
    });
    navigate("/patient/info");
  };

  return (
    <Container>
      <Row>
        <Col
          lg={1}
          className="d-flex align-items-center justify-content-center"
        >
          <div className={`onhold ${visit.on_hold && "active_visit"}`}></div>
        </Col>
        <Col lg={11} className="px-0" onClick={handleOnClick}>
          <CardWrapper>
            <Container fluid className="p-3">
              <Row>
                <Col className="px-0">
                  <p className="sub_title mb-0 pe-3">
                    {with_name ? patient_name : visit.title}
                  </p>
                </Col>
                <Col className="px-0">
                  <p className="sub_title mb-0">{with_name && visit.title}</p>
                </Col>
                <Col className="px-0">
                  <p className="sub_title mb-0 ps-3 text-start">
                    {visit.created_at}
                  </p>
                </Col>
              </Row>
            </Container>
          </CardWrapper>
        </Col>
      </Row>
    </Container>
  );
}
