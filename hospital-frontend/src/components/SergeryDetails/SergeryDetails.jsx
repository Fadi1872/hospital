import { Container, Row, Col } from "react-bootstrap";

function SergeryDetails({ser}) {
  return (
    <Container fluid className="card_back p-3 mt-2">
      <Row>
        <Col lg={6} className="mb-3">
          <Container fluid>
            <Row>
              <Col lg={4}>
                <p className="mb-0 title_small">الطبيب</p>
              </Col>
              <Col lg={8}>
                <p className="mb-0 sub_title">{ser.doctor}</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={6}>
          <Container fluid>
            <Row>
              <Col lg={4}>
                <p className="mb-0 title_small">المدة</p>
              </Col>
              <Col lg={8}>
                <p className="mb-0 sub_title">{ser.duration}</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={6}>
          <Container fluid>
            <Row>
              <Col lg={4}>
                <p className="mb-0 title_small">التاريخ</p>
              </Col>
              <Col lg={8}>
                <p className="mb-0 sub_title">{ser.updated_at}</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={6}>
          <Container fluid>
            <Row>
              <Col lg={4}>
                <p className="mb-0 title_small">نسبة النجاح</p>
              </Col>
              <Col lg={8}>
                <p className="mb-0 sub_title">{ser.success}%</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default SergeryDetails;
