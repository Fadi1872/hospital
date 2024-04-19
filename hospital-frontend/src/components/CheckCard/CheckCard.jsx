import "./CheckCard.css";
import CardWrapper from "../CardWrapper/CardWrapper";

function CheckCard({ check }) {
  let results = check.result.split(",");
  return (
    <CardWrapper>
      <div className="mb-10">
        <div className="card_back no_hover d-flex justify-content-between align-items-center p-3">
          <p className="mb-0 sub_title">{check.title}</p>
          <p className="mb-0 sub_title">{check.created_at}</p>
        </div>
        <div className="p-3">
          {results.map((res, index) => (
            <p className="mb-0 sub_title" key={index}>
              {res}
            </p>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}

export default CheckCard;
