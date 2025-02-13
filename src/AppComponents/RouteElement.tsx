import Page from "./page";
import ClimbingPage from "../Projects/ClimbingPage";
import LegoRoboticsPage from "../Projects/LegoRoboticsPage";
import GoldfishRobinPage from "../Projects/GoldfishRobinPage";
import WildthinksPage from "../Projects/WildthinksPage";
import LocalsearchPage from "../Projects/LocalsearchPage";
import { Route, Routes } from "react-router-dom";

export function RouteElement() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Page />} />
        <Route path="robotics" element={<LegoRoboticsPage />} />
        <Route path="goldfishandrobin" element={<GoldfishRobinPage />} />
        <Route path="climbing" element={<ClimbingPage />} />
        <Route path="wildthinks" element={<WildthinksPage />} />
        <Route path="localsearch" element={<LocalsearchPage />} />
      </Route>
    </Routes>
  );
}
