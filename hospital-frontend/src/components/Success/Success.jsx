import "./Success.css";

function Success({suc}) {
  return (
    <div className="bar_outer">
      <div className="bar_inner" style={{'--suc': `${suc}%`}}></div>
    </div>
  );
}

export default Success;
