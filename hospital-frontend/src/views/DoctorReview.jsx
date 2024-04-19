import React from "react";
import Title from "../components/Title/Title";
import Search from "../components/Search/Search";
import BreakLine from "../components/BreakLine/BreakLine";
import { useID } from "../context/IDProvider";
import VisitsReview from "../components/VisitsReview/VisitsReview";
import review from "../data/DoctorReviews";
import ReviewCard from "../components/ReviewCard/ReviewCard";

function DoctorReview() {
  const { id } = useID();
  return (
    <div>
      <Title
        title={`زيارة المريض ${id.user_name}`}
        sub="جميع مراجعات المريض موجودة هنا"
      />
      <Search name="المراجعة" />
      <VisitsReview add>
        {review.map((rev) =>
          rev.patient_id == id.user && rev.visit_id == id.visit ? (
              <ReviewCard rev={rev} />
          ) : null
        )}
      </VisitsReview>
      <BreakLine name="مراجعات اخرى" />
      <VisitsReview>
        {review.map((rev) =>
          rev.patient_id == id.user && rev.visit_id != id.visit ? (
              <ReviewCard rev={rev} />
          ) : null
        )}
      </VisitsReview>
    </div>
  );
}

export default DoctorReview;
