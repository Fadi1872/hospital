import AuthService from "../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { ADMIN, DOCTOR, NURSE } from "../Roles/Roles";
import { useID } from "../../context/IDProvider";
import { useEffect, useState } from "react";

function AuthProtect({ children, allowed, selectId }) {
  const [render, setRender] = useState(false);
  const navigate = useNavigate();
  const { id, set } = useID();

  useEffect(() => {
    const currentUserRole = localStorage.getItem("user_role");
    if (!AuthService.is_loggedIn()) {
      navigate("/login");
      console.log('not loged in');
      setRender(false);
    } else if (
      !allowed.includes(currentUserRole) ||
      (selectId && id.user == -1)
    ) {
      setRender(false);
      if (currentUserRole == ADMIN) navigate("/");
      else if ([DOCTOR, NURSE].includes(currentUserRole)) navigate("/patient");
    } else {
      setRender(true)
    }
  });

  return render ? children : null;
}

export default AuthProtect;
