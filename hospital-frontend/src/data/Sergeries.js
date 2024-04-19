const sergeries = [
  {
    id: 0,
    patient_id: "001223466655",
    visit_id: 0,
    name: "استئصال اللوز",
    success: 90,
    doctor: "سمير صباغ",
    duration: "3-6",
    after_serg: ["الامساك", "فقدان الشهية", "الم عضلي وانتفاخ في مكان الجرح"],
    checks_befor: [0, 1, 2, 3, 4,],
    checks_after: [],
    results: "",
    created_at: "2019/5/5",
    updated_at: "2019/5/7",
  },
  {
    id: 1,
    patient_id: "001223466655",
    visit_id: 2,
    name: "ليزك",
    success: 40,
    doctor: "سمير صباغ",
    duration: "3-6",
    after_serg: ["الامساك", "فقدان الشهية", "الم عضلي وانتفاخ في مكان الجرح"],
    checks_befor: [0, 1, 2, 3, 4],
    checks_after: [1, 2, 3, 4],
    results: "العملية كانت في مستوى عالي من الخطورة ولكن تمت على اكمل وجه ولكن من المحتمل عدم قدرة المريض على القيام بها مرة اخرى",
    created_at: "2019/5/5",
    updated_at: "2019/5/7",
  },
];

export default sergeries;
