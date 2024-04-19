import React from "react";
import Title from "../components/Title/Title";
import Search from "../components/Search/Search";
import BreakLine from "../components/BreakLine/BreakLine";
import { useID } from "../context/IDProvider";
import VisitsReview from "../components/VisitsReview/VisitsReview";
import SergeryCard from "../components/SergeryCard/SergeryCard";
import sergeries from "../data/Sergeries";

function Sergeries() {
  const { id } = useID();

  return (
    <div>
      <Title
        title={`زيارة المريض ${id.user_name}`}
        sub="جميع عمليات المريض موجودة هنا"
      />
      <Search name="العملية" />
      <VisitsReview add>
        {sergeries.map((ser) =>
          ser.patient_id == id.user && ser.visit_id == id.visit ? (
            <SergeryCard key={ser.id} ser={ser} />
          ) : null
        )}
      </VisitsReview>
      <BreakLine name="عمليات اخرى" />
      <VisitsReview>
        {sergeries.map((ser) =>
          ser.patient_id == id.user && ser.visit_id != id.visit ? (
            <SergeryCard key={ser.id} ser={ser} />
          ) : null
        )}
      </VisitsReview>
    </div>
  );
}

export default Sergeries;
