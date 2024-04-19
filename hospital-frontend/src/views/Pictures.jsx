import React from "react";
import Title from "../components/Title/Title";
import Search from "../components/Search/Search";
import { useID } from "../context/IDProvider";
import BreakLine from "../components/BreakLine/BreakLine";
import VisitPics from "../components/VisitPics/VisitPics";
import pics from "../data/pics";
import PicsCard from "../components/PicsCard/PicsCard";
import { Col } from "react-bootstrap";

function Pictures() {
  const { id } = useID();
  return (
    <div>
      <Title
        title={`زيارة المريض ${id.user_name}`}
        sub="جميع صور المريض موجودة هنا"
      />
      <Search name="الصورة" />
      <VisitPics add>
        {pics.map((pic) =>
          pic.patient_id == id.user && pic.visit_id == id.visit ? (
            <Col lg={6}>
              <PicsCard pic_info={pic} />
            </Col>
          ) : null
        )}
      </VisitPics>
      <BreakLine name="الصور الاخرى" />
      <VisitPics>
        {pics.map((pic) =>
          pic.patient_id == id.user && pic.visit_id != id.visit ? (
            <Col lg={6}>
              <PicsCard pic_info={pic} />
            </Col>
          ) : null
        )}
      </VisitPics>
    </div>
  );
}

export default Pictures;
