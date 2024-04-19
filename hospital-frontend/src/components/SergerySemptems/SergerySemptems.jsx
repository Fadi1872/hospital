import React from "react";

function SergerySemptems({ser}) {
  return (
    <div className="d-flex gap-2 mt-2">
      <div className="card_back p-3">
        <p className="mb-0 title_small">المضاعفات</p>
      </div>
      <div className="card_back p-3 flex-grow-1 d-flex align-items-center gap-4">
        {ser.after_serg.map(item => <p className="mb-0 sub_title">{item}</p>)}
      </div>
    </div>
  );
}

export default SergerySemptems;
