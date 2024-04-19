import React, { useState } from "react";
import UserInfoEdit from "../components/UserInfoEdit/UserInfoEdit";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserPasswordEdit from "../components/UserPasswordEdit/UserPasswordEdit";

function UserEdit() {
  const [editInfo, setEditInfo] = useState(true);
  const { state } = useLocation();

  return (
    <Container fluid className="h-100">
      <h1 className="header">
        تعديل {editInfo ? "البيانات" : "كلمة المرور"} للمستخدم {state.name}
      </h1> 
      {editInfo ? <UserInfoEdit setEditInfo={setEditInfo} /> : <UserPasswordEdit />}
    </Container>
  );
}

export default UserEdit;
