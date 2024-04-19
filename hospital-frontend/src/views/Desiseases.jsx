import React from "react";
import Title from "../components/Title/Title";
import Search from "../components/Search/Search";
import BreakLine from "../components/BreakLine/BreakLine";
import { useID } from "../context/IDProvider";
import VisitsReview from "../components/VisitsReview/VisitsReview";
import disease from "../data/Diseases";
import DeseaseCard from "../components/DeseaseCard/DeseaseCard";

function Desiseases() {
  const { id } = useID();

  return (
    <div>
      <Title
        title={`زيارة المريض ${id.user_name}`}
        sub="جميع الامراض المريض موجودة هنا"
      />
      <Search name="المرض" />
      <VisitsReview add>
      {disease.map((dis) =>
          dis.patient_id == id.user && dis.visit_id == id.visit ? (
              <DeseaseCard dis={dis} />
          ) : null
        )}
      </VisitsReview>
      <BreakLine name="امراض اخرى" />
      <VisitsReview>
      {disease.map((dis) =>
          dis.patient_id == id.user && dis.visit_id != id.visit ? (
              <DeseaseCard dis={dis} />
          ) : null
        )}
      </VisitsReview>
    </div>
  );
}

export default Desiseases;
