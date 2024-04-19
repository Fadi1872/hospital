import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import { FaPlus } from "react-icons/fa6";
import UserAccount from "../UserAccount/UserAccount";
import Title from "../Title/Title";
import useGet from "../../hooks/useGet";
import LinesLoader from "../LinesLoader/LinesLoader";
import { useNavigate } from "react-router-dom";

function UserShow() {
  const navigate = useNavigate();
  const [data, error, getData] = useGet("http://127.0.0.1:8000/api/user");
  console.log(error);

  return (
    <div>
      <Title
        title="حسابات المستخدمين"
        sub="يمكنك اضافة المستخدمين وازالتهم من هذه الواجهة"
      />
      <Search name="مستخدم" />
      <div className="d-flex flex-column gap-2">
        <div
          className="card_back p-3 d-flex justify-content-center align-items-center sub_title"
          onClick={() => navigate('/add')}
        >
          <FaPlus />
        </div>
        {!data ? (
          <LinesLoader />
        ) : (
          data.map((element) => (
            <UserAccount
              key={element.id}
              name={element.name}
              email={element.email}
              role={element.role}
              role_id={element.role_id}
              id={element.id}
              getData={getData}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default UserShow;
