import React from "react";
import Title from "../components/Title/Title";
import Search from "../components/Search/Search";
import VisitsShow from "../components/VisitsShow/VisitsShow";

function Visits() {
  return (
    <div>
      <Title
        title="المرضى الذين هم في المشفى"
        sub="يمكنك تصفح كل الزبارات مع كل بياناتهم المسجلة"
      />
      <Search name="الزيارة" />
      <VisitsShow />
    </div>
  );
}

export default Visits;
