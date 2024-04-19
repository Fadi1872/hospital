import "./VisitCadrs.css";
import { FaPlus } from "react-icons/fa6";

function VisitCadrs({ render, add }) {
  return (
    <div className="mansouri_grid">
      {add && (
        <div className="card_back p-3 d-flex justify-content-center align-items-center sub_title mb-10">
          <FaPlus />
        </div>
      )}
      {render()}
    </div>
  );
}

export default VisitCadrs;
