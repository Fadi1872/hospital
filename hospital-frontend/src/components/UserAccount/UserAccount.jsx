import { Col, Container, Row } from "react-bootstrap";
import "./UserAccount.css";
import useDelete from "../../hooks/useDelete";
import { useNavigate } from "react-router-dom";

function UserAccount({ name, email, role, role_id, id, getData }) {
  const navigate = useNavigate();
  const [delRes, delErrors, delUser] = useDelete(
    `http://127.0.0.1:8000/api/user/${id}`
  );

  const handleEdit = () => {
    navigate('/edit' ,{state:{
      id: id,
      name: name,
      email: email,
      role: role_id
    }})
  };

  const handleDelete = async () => {
    await delUser();
    getData();
  };

  return (
    <div className="card_back p-3">
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={3}>
            <p className="sub_title mb-0">{name}</p>
          </Col>
          <Col lg={4}>
            <p className="sub_title mb-0">{email}</p>
          </Col>
          <Col lg={3}>
            <p className="sub_title mb-0">{role}</p>
          </Col>
          <Col lg={2} className="d-flex px-0 d-flex gap-2">
            <button
              className="flex-grow-1 sub_title edit_button"
              onClick={handleEdit}
            >
              تعديل
            </button>
            <button
              className="flex-grow-1 sub_title delete_button"
              onClick={handleDelete}
            >
              حذف
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserAccount;
