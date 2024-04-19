import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import useGet from "../../hooks/useGet";
import RadioButtom from "../RadioButtom/RadioButtom";
import usePut from "../../hooks/usePut";

function UserInfoEdit({ setEditInfo }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [roles] = useGet("http://127.0.0.1:8000/api/roles");
  const [response, error, update] = usePut(
    `http://127.0.0.1:8000/api/user/${state.id}`
  );
  const [user, setUser] = useState({
    name: state.name,
    email: state.email,
    role: state.role,
  });
  console.log(state.role);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    if (error) {
      if (error.status == 422)
        setErrors({
          name: error.data.errors.name || "",
          email: error.data.errors.email || "",
          role: error.data.errors.role || "",
        });
    } else if (response) {
      navigate("/");
    }
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    update(user)
  };

  return (
    <Row className="h-100 mt-5">
      <Col lg={6}>
        <form onSubmit={(e) => handleSubmission(e)}>
          <div className="d-flex flex-column gap-2 mb-4">
            <label htmlFor="name" className="sub_title opacity-75">
              اسم المستخدم
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="فادي نعمة"
              className="px-4 text-white custom_input rlt sub_title"
              value={user.name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && (
              <p className="mb-0 error_text sub_title">{errors.name}</p>
            )}
          </div>
          <div className="d-flex flex-column gap-2 mb-4">
            <label htmlFor="email" className="sub_title opacity-75">
              الحساب
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="fadinoumih@gmail.com"
              className="px-4 text-white custom_input sub_title"
              value={user.email}
              onChange={(e) => handleChange(e)}
            />
            {errors.email && (
              <p className="mb-0 error_text sub_title">{errors.email}</p>
            )}
          </div>
          <div>
            <p className="sub_title opacity-75">الوظيفة</p>
            <div className="d-flex justify-content-between mb-4">
              {roles &&
                roles.map((role) => (
                  <RadioButtom
                    role={role}
                    active={role.id == user.role}
                    key={role.id}
                    user={user}
                    setRole={setUser}
                  />
                ))}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="edit_button custom_width-button py-1 sub_title"
            >
              حفظ
            </button>
            <button
              className="edit_button custom_width-button px-3 py-1 sub_title me-3"
              onClick={() => setEditInfo(false)}
            >
              تعديل كلمة المرور
            </button>
          </div>
        </form>
      </Col>
    </Row>
  );
}

export default UserInfoEdit;
