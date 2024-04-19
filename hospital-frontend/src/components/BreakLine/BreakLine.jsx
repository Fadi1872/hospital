import "./BreakLine.css";

function BreakLine({ name }) {
  return (
    <div className="d-flex align-items-center py-4">
      <div className="line flex-grow-1"></div>
      <p className="mb-0 sub_title px-3">{name}</p>
      <div className="line flex-grow-1"></div>
    </div>
  );
}

export default BreakLine;
