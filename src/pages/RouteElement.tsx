import Page from "./page";
import LegoRoboticsPage from "../Projects/LegoRoboticsPage";
import GoldfishRobinPage from "../Projects/GoldfishRobinPage";
import WildthinksPage from "../Projects/WildthinksPage";
import ArtPage from "../Projects/ArtPage";
import ChalkbotPage from "../Projects/ChalkbotPage";
import HomeschoolPage from "../Projects/HomeschoolPage";
import TeachingUOPage from "../Projects/TeachingUOPage";
import ChewonkiPage from "../Projects/ChewonkiPage";
import PBChaffPage from "../Projects/PBchaffPage";
import ProofPage from "../Projects/ProofPage";
import ZapPage from "../Projects/ZapPage";
import Publications from "./publications";

import ResumeItemContent from "../components/ResumeItemContent";
import { LS_PAGE } from "../components/resume-data";
import { CLIMBING_PAGE } from "../components/resume-data";
import { PBCHAFF_PAGE } from "../components/resume-data";
import { Route, Routes } from "react-router-dom";

export function RouteElement() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Page />} />
        <Route path="robotics" element={<LegoRoboticsPage />} />
        <Route path="goldfishandrobin" element={<GoldfishRobinPage />} />
        <Route path="wildthinks" element={<WildthinksPage />} />
        <Route
          path="pbchaff"
          element={<ResumeItemContent {...PBCHAFF_PAGE} />}
        />
        <Route
          path="localsearch"
          element={<ResumeItemContent {...LS_PAGE} />}
        />
        <Route
          path="climbing"
          element={<ResumeItemContent {...CLIMBING_PAGE} />}
        />
        <Route path="art" element={<ArtPage />} />
        <Route path="chalkbot" element={<ChalkbotPage />} />
        <Route path="homeschool" element={<HomeschoolPage />} />
        <Route path="teachingUO" element={<TeachingUOPage />} />
        <Route path="chewonki" element={<ChewonkiPage />} />
        <Route path="zap" element={<ZapPage />} />
        <Route path="proof" element={<ProofPage />} />
        <Route path="pubs" element={<Publications />} />
      </Route>
    </Routes>
  );
}
