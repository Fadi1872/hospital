import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";

function ReviewCard({rev}) {
  return (
    <CardWrapper>
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center pb-3">
          <p className="mb-0 title_small">{rev.title}</p>
          <p className="mb-0 sub_title">{rev.created_at}</p>
        </div>
        <div>
          <p className="mb-0 sub_title">{rev.discription}</p>
        </div>
      </div>
    </CardWrapper>
  );
}

export default ReviewCard;
