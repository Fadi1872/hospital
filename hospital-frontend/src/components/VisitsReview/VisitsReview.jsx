import React from "react";
import { FaPlus } from "react-icons/fa";

function VisitsReview({ children, add }) {
  return (
    <div className="d-flex flex-column gap-2">
      {add && (
        <div className="card_back p-3 d-flex justify-content-center align-items-center sub_title">
          <FaPlus />
        </div>
      )}
      {children}
    </div>
  );
}

export default VisitsReview;
