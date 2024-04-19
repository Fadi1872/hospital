import { Container, Row, Col } from "react-bootstrap";
import CardWrapper from "../CardWrapper/CardWrapper";
import './DeseaseCard.css'

function DeseaseCard({ dis }) {
  return (
    <div className="px-0 d-flex flex-column gap-2">
      <CardWrapper>
        <div className="p-3 d-flex justify-content-between align-item-center">
          <p className="mb-0 title_small">{dis.name}</p>
          <p className="mb-0 sub_title">{dis.created_at}</p>
        </div>
      </CardWrapper>
      <Container>
        <Row>
          <Col lg={1}>
            <div className="ver_line me-auto ms-2"></div>
          </Col>
          <Col className="px-0 d-flex flex-column gap-2">
            {dis.midecins.map((mid) => (
              <div className="p-3 card_back d-flex justify-content-between align-item-center">
                <p className="mb-0 sub_title">{mid.name}</p>
                <p className="mb-0 sub_title">{mid.how_many}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DeseaseCard;
