import { useState } from "react";
import "./LogInForm.css";
import AuthService from "../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LogInForm() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [email_error, setemail_error] = useState(false);
  const [password_error, setpassword_error] = useState(false);
  const navigate = useNavigate();

  const handleSubmition = async (e) => {
    e.preventDefault();
    setemail_error("");
    setpassword_error("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });
      AuthService.log_in(response.data.access_token, response.data.user);
      navigate("/");
    } catch (error) {
      if (error.response.status == 401) {
        let errors = error.response.data;
        if (errors.email_error) setemail_error(errors.email_error);
        if (errors.password_error) setpassword_error(errors.password_error);
        console.log(error.response.data.error);
      } else if (error.response.status == 422) {
        let errors = error.response.data.errors;
        if (errors.email) setemail_error(errors.email[0]);
        if (errors.password) setpassword_error(errors.password[0]);
        console.log(error.response.data.errors);
      }
    }
  };

  return (
    <form className="logIn_form ps-5" onSubmit={(e) => handleSubmition(e)}>
      <h1 className="title mb-0">تسجيل دخول</h1>
      <div className="my-5">
        <div className="d-flex flex-column gap-2 mb-4">
          <label htmlFor="email" className="sub_title opacity-75">
            الحساب
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="fadinoumih@gmail.com"
            className="px-4 text-white custom_input"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          {email_error && (
            <p className="mb-0 error_text sub_title">{email_error}</p>
          )}
        </div>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="password" className="sub_title opacity-75">
            كلمة المرور
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            className="px-4 text-white custom_input"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {password_error && (
            <p className="mb-0 error_text sub_title">{password_error}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="d-block me-auto px-4 py-1 sub_title submit"
      >
        تسجيل دخول
      </button>
    </form>
  );
}

export default LogInForm;
