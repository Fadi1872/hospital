import { useParams } from "react-router-dom";
import Title from "../components/Title/Title";
import { useID } from "../context/IDProvider";
import SergeryCard from "../components/SergeryCard/SergeryCard";
import sergeries from "../data/Sergeries";
import checks from "../data/checks";
import CheckCard from "../components/CheckCard/CheckCard";
import VisitCadrs from "../components/VisitCadrs/VisitCadrs";
import SergeryDetails from "../components/SergeryDetails/SergeryDetails";
import SergerySemptems from "../components/SergerySemptems/SergerySemptems";

function Sergery() {
  const { idSer } = useParams();
  const { id } = useID();
  let ser;
  sergeries.forEach((item) => {
    if (item.id == idSer) ser = item;
  });

  return (
    <div>
      <Title title={`زيارة المريض ${id.user_name}`} />
      <div className="mb-5"></div>
      <SergeryCard ser={ser} />
      <SergeryDetails ser={ser} />
      <SergerySemptems ser={ser} />
      <div className="mb-5"></div>
      <h1 className="mb-3 title_small">التحاليل قبل العملية</h1>
      <VisitCadrs
        add
        render={() =>
          checks.map((check) =>
            ser.checks_befor.includes(check.id) ? (
              <CheckCard key={check.id} check={check} />
            ) : null
          )
        }
      />
      <div className="mb-5"></div>
      <h1 className="mb-3 title_small">التحاليل بعد العملية</h1>
      <VisitCadrs
        add
        render={() =>
          checks.map((check) =>
            ser.checks_after.includes(check.id) ? (
              <CheckCard key={check.id} check={check} />
            ) : null
          )
        }
      />
      <div className="mb-5"></div>
      <h1 className="mb-3 title_small">نتائج العملية</h1>
      <div className="card_back p-3">
        <p className="mb-0 sub_title">{ser.results? ser.results: "لا يوجد نتائج بعد"}</p>
      </div>
    </div>
  );
}

export default Sergery;
