import React from "react";
import Title from "../components/Title/Title";
import { useID } from "../context/IDProvider";
import Search from "../components/Search/Search";
import VisitCadrs from "../components/VisitCadrs/VisitCadrs";
import checks from "../data/checks";
import CheckCard from "../components/CheckCard/CheckCard";
import BreakLine from "../components/BreakLine/BreakLine";

function Checks() {
  const { id } = useID();

  return (
    <div>
      <Title
        title={`زيارة المريض ${id.user_name}`}
        sub="جميع تحاليل المريض موجودة هنا"
      />
      <Search name="التحليل" />
      <VisitCadrs
        add
        render={() =>
          checks.map((check) =>
            check.patient_id == id.user && check.visit_id == id.visit ? (
              <CheckCard key={check.id} check={check} />
            ) : null
          )
        }
      />
      <BreakLine name="تحاليل اخرى" />
      <VisitCadrs
        render={() =>
          checks.map((check) =>
            check.patient_id == id.user && check.visit_id != id.visit ? (
              <CheckCard key={check.id} check={check} />
            ) : null
          )
        }
      />
    </div>
  );
}

export default Checks;
