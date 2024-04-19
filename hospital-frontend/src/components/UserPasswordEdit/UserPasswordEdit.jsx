import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import usePut from "../../hooks/usePut";

function UserPasswordEdit() {
  const [user, setUser] = useState({
    password: "",
    password_confirmation: "",
  });
  const [passError, setPassError] = useState();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [response, error, update] = usePut(
    `http://127.0.0.1:8000/api/user/${state.id}/password`
  );

  useEffect(() => {
    console.log(error);
    if (error) {
      if (error.status == 422)
        setPassError(error.data.errors.password);
    } else if (response) {
      navigate("/");
    }
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleUpdate = () => {
    console.log('user');
    console.log(user);
    update(user);
  }

  return (
    <Row className="h-100 mt-5">
      <Col lg={6}>
        <div className="d-flex flex-column gap-2 mb-4">
          <label htmlFor="password" className="sub_title opacity-75">
            كلمة المرور
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            className="px-4 text-white custom_input"
            value={user.password}
            onChange={(e) => handleChange(e)}
          />
          {passError &&
            passError.map((error, index) => (
              <p key={index} className="mb-0 error_text sub_title">{error}</p>
            ))}
        </div>
        <div className="d-flex flex-column gap-2 mb-4">
          <label htmlFor="password_confirmation" className="sub_title opacity-75">
            تاكيد كلمة المرور
          </label>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="********"
            className="px-4 text-white custom_input"
            value={user.password_confirmation}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          type="submit"
          className="edit_button custom_width-button py-1 sub_title"
          onClick={handleUpdate}
        >
          حفظ
        </button>
      </Col>
    </Row>
  );
}

export default UserPasswordEdit;
