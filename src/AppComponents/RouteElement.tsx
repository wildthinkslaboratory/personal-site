import Page from "./page";
import ClimbingPage from "../Projects/ClimbingPage";
import LegoRoboticsPage from "../Projects/LegoRoboticsPage";
import GoldfishRobinPage from "../Projects/GoldfishRobinPage";
import WildthinksPage from "../Projects/WildthinksPage";
import LocalsearchPage from "../Projects/LocalsearchPage";
import ArtPage from "../Projects/ArtPage";
import ChalkbotPage from "../Projects/ChalkbotPage";
import HomeschoolPage from "../Projects/HomeschoolPage";
import TeachingUOPage from "../Projects/TeachingUOPage";
import PianoPage from "../Projects/PianoPage";
import ChewonkiPage from "../Projects/ChewonkiPage";
import PBChaffPage from "../Projects/PBchaffPage";

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
        <Route path="pbchaff" element={<PBChaffPage />} />
        <Route path="localsearch" element={<LocalsearchPage />} />
        <Route path="art" element={<ArtPage />} />
        <Route path="chalkbot" element={<ChalkbotPage />} />
        <Route path="homeschool" element={<HomeschoolPage />} />
        <Route path="teachingUO" element={<TeachingUOPage />} />
        <Route path="chewonki" element={<ChewonkiPage />} />
        <Route path="piano" element={<PianoPage />} />
      </Route>
    </Routes>
  );
}
