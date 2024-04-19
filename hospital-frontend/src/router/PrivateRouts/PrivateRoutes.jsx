import { ADMIN, DOCTOR, NURSE, RECEPTIONIST } from "../Roles/Roles";
import UserShow from "../../components/UserShow/UserShow";
import UserAdd from "../../components/UsersAdd/UserAdd";
import Visits from "../../views/Visits";
import Admin from "../../module/Admin";
import Checks from "../../views/Checks";
import Desiseases from "../../views/Desiseases";
import DoctorReview from "../../views/DoctorReview";
import Patients from "../../views/Patients";
import Pictures from "../../views/Pictures";
import Sergeries from "../../views/Sergeries";
import Sergery from "../../views/Sergery";
import UserEdit from "../../views/UserEdit";

export const PrivateRoutes = [
  {
    path: "/",
    element: <Admin />,
    allowed: [ADMIN, DOCTOR, NURSE],
    subRoutes: [
      {
        path: "",
        element: <UserShow />,
        allowed: [ADMIN],
        selectId: false
      },
      {
        path: "add",
        element: <UserAdd />,
        allowed: [ADMIN],
        selectId: false
      },
      {
        path: "edit",
        element: <UserEdit />,
        allowed: [ADMIN],
        selectId: false
      },
      {
        path: "patient",
        element: <Patients />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: false
      },
      {
        path: "patient/info",
        element: <Patients />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/info/edit",
        element: <Patients />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/checks",
        element: <Checks />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/checks/edit",
        element: <Checks />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/checks/add",
        element: <Checks />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/pictures",
        element: <Pictures />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/pictures/edit",
        element: <Pictures />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/pictures/add",
        element: <Pictures />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/doctor-review",
        element: <DoctorReview />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/doctor-review/edit",
        element: <DoctorReview />,
        allowed: [ADMIN, DOCTOR],
        selectId: true
      },
      {
        path: "patient/doctor-review/add",
        element: <DoctorReview />,
        allowed: [ADMIN, DOCTOR],
        selectId: true
      },
      {
        path: "patient/diseases",
        element: <Desiseases />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/diseases/edit",
        element: <Desiseases />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/diseases/add",
        element: <Desiseases />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/sergeries",
        element: <Sergeries />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/sergery",
        element: <Sergery />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/sergery/edit",
        element: <Sergery />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "patient/sergery/add",
        element: <Sergery />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: true
      },
      {
        path: "visits",
        element: <Visits />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: false
      },
      {
        path: "visits/edit",
        element: <Visits />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: false
      },
      {
        path: "visits/add",
        element: <Visits />,
        allowed: [ADMIN, DOCTOR, NURSE],
        selectId: false
      },
    ],
  },
];
