import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RadioButtom from "../RadioButtom/RadioButtom";
import useGet from "../../hooks/useGet";
import usePost from "../../hooks/usePost";
import { useNavigate } from "react-router-dom";

function UserAdd() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: 2,
    password: "",
    confirmPassword: "",
  });

  const [roles] = useGet("http://127.0.0.1:8000/api/roles");
  const [response, resErrors, addUser] = usePost(
    "http://127.0.0.1:8000/api/user"
  );
  useEffect(() => {
    if (resErrors) {
      if (resErrors.status == 422)
        setErrors({
          name: resErrors.data.errors.name || "",
          email: resErrors.data.errors.email || "",
          password: resErrors.data.errors.password || "",
        });
    } else if (response) {
      navigate("/");
    }
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    console.log("submitted");
    try {
      await addUser({
        name: user.name,
        email: user.email,
        role: user.role,
        password: user.password,
        password_confirmation: user.confirmPassword,
      });
      console.log(response, resErrors);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1 className="header mb-5">اضافة مستخدم</h1>
      <form onSubmit={(e) => handleSubmission(e)}>
        <Container>
          <Row>
            <Col>
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
              <button
                type="submit"
                className="edit_button custom_width-button py-1 sub_title"
              >
                اضافة
              </button>
            </Col>
            <Col>
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
                {errors.password && (
                  <p className="mb-0 error_text sub_title">{errors.password}</p>
                )}
              </div>
              <div className="d-flex flex-column gap-2 mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="sub_title opacity-75"
                >
                  تاكيد كلمة المرور
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="********"
                  className="px-4 text-white custom_input"
                  value={user.confirmPassword}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}

export default UserAdd;
