import { NavLink, useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import "./SideBar.css";
import { FaUserCog, FaUser, FaBookMedical } from "react-icons/fa";
import { useID } from "../../context/IDProvider";
import { ADMIN } from "../../router/Roles/Roles";

function SideBar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("user_role");
  const handleLogOut = () => {
    AuthService.log_out();
    navigate("/login");
  };

  return (
    <div className="sidebar-container h-100 py-4 px-4 d-flex flex-column">
      <div className="d-flex align-items-center gap-3 pb-4 mb-4 border-bottom">
        <div className="user_photo">
          <div className="photo_head"></div>
          <div className="photo_body"></div>
        </div>
        <h1 className="title_small mb-0">
          {localStorage.getItem("user_name")}
        </h1>
      </div>

      <div className="flex-grow-1 d-flex flex-column gap-1">
        {role == ADMIN && (
          <NavLink to="/" className="py-1 px-3 mainNavLink sub_title">
            <FaUserCog className="ms-3 fs-5 color-blue" />
            الحسابات
          </NavLink>
        )}
        <NavLink to="/patient" className="py-1 px-3 mainNavLink sub_title">
          <FaUser className="ms-3 me-1 color-blue" />
          المرضى
        </NavLink>
        {!(useID().id.user == -1) && (
          <div className="sub_nav d-flex flex-column gap-1 pe-5">
            <NavLink
              to="/patient/info"
              className="py-1 px-3 mainNavLink sub_title "
            >
              المريض
            </NavLink>
            <NavLink
              to="/patient/checks"
              className="py-1 px-3 mainNavLink sub_title "
            >
              التحاليل
            </NavLink>
            <NavLink
              to="/patient/pictures"
              className="py-1 px-3 mainNavLink sub_title "
            >
              الصور
            </NavLink>
            <NavLink
              to="/patient/doctor-review"
              className="py-1 px-3 mainNavLink sub_title "
            >
              المراجعات
            </NavLink>
            <NavLink
              to="/patient/diseases"
              className="py-1 px-3 mainNavLink sub_title "
            >
              الامراض والادوية
            </NavLink>
            <NavLink
              to="/patient/sergeries"
              className="py-1 px-3 mainNavLink sub_title "
            >
              العمليات
            </NavLink>
          </div>
        )}
        <NavLink to="/visits" className="py-1 px-3 mainNavLink sub_title">
          <FaBookMedical className="ms-3 me-1 color-blue" />
          الزيارات
        </NavLink>
      </div>

      <button
        className="d-block text-center sub_title text-white py-1 logout_button"
        onClick={handleLogOut}
      >
        تسجيل خروج
      </button>
    </div>
  );
}

export default SideBar;
