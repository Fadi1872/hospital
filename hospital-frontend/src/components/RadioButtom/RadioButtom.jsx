import "./RadioButtom.css";

function RadioButtom({ role, user, active, setRole }) {
  return (
    <div className="d-flex align-items-center gap-2">
      <div
        className={`radio ${active && "active_radio"}`}
        onClick={() => setRole({ ...user, role: role.id })}
      ></div>
      <p className="mb-0">{role.name}</p>
    </div>
  );
}

export default RadioButtom;
