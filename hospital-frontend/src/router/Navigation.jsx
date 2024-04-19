import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./publicRouts/PublicRouts";
import { PrivateRoutes } from "./PrivateRouts/PrivateRoutes";
import AuthProtect from "./Utils/AuthProtect";

function Navigation() {

  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      {PrivateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
          {route.subRoutes.map((subRoute, index) => (
            <Route
              key={index}
              index={!subRoute.path}
              path={subRoute.path}
              element={
                <AuthProtect
                  key={index}
                  allowed={subRoute.allowed}
                  selectId={subRoute.selectId}
                >
                  {subRoute.element}
                </AuthProtect>
              }
            />
          ))}
        </Route>
      ))}
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default Navigation;