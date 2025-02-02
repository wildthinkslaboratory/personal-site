import Page from "./page";
import ClimbingPage from "../Projects/ClimbingPage";
import LegoRoboticsPage from "../Projects/LegoRoboticsPage";
import { Route, Routes } from "react-router-dom";

export function RouteElement() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Page />} />
        <Route path="robotics" element={<LegoRoboticsPage />} />
        <Route path="climbing" element={<ClimbingPage />} />
      </Route>
    </Routes>
  );
}
