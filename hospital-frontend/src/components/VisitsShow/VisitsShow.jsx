import React from "react";
import patients from "../../data/patients";
import Visits from "../Visits/Visits";

function VisitsShow() {
  return (
    <div className="d-flex flex-column gap-2">
      {patients.map((item) =>
        item.visits.map(
          (visit) =>
            visit.on_hold && (
              <Visits key={visit.id} patient_id={item.id} patient_name={item.name} with_name visit={visit} />
            )
        )
      )}
    </div>
  );
}

export default VisitsShow;
