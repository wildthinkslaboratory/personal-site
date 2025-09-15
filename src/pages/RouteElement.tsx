import Page from "./page";
import Publications from "./publications";
import Gallery from "./gallery";

import ResumeContent from "../components/ResumeContent";
import { LS_PAGE } from "../components/resume-data";
import { CLIMBING_PAGE } from "../components/resume-data";
import { PBCHAFF_PAGE } from "../components/resume-data";
import { CHEWONKI_PAGE } from "../components/resume-data";
import { WT_PAGE } from "../components/resume-data";
import { GR_PAGE } from "../components/resume-data";
import { LR_PAGE } from "../components/resume-data";
import { CB_PAGE } from "../components/resume-data";
import { UO_PAGE } from "../components/resume-data";
import { PC_PAGE } from "../components/resume-data";
import { HS_PAGE } from "../components/resume-data";
import { CONTROL_PAGE } from "../components/resume-data";
import { DRONE_PAGE } from "../components/resume-data";
import { Route, Routes } from "react-router-dom";

export function RouteElement() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Page />} />
        <Route path="robotics" element={<ResumeContent {...LR_PAGE} />} />
        <Route
          path="goldfishandrobin"
          element={<ResumeContent {...GR_PAGE} />}
        />
        <Route path="homeschool" element={<ResumeContent {...HS_PAGE} />} />
        <Route path="proof" element={<ResumeContent {...PC_PAGE} />} />
        <Route path="chalkbot" element={<ResumeContent {...CB_PAGE} />} />
        <Route path="teachingUO" element={<ResumeContent {...UO_PAGE} />} />
        <Route path="wildthinks" element={<ResumeContent {...WT_PAGE} />} />
        <Route path="chewonki" element={<ResumeContent {...CHEWONKI_PAGE} />} />
        <Route path="pbchaff" element={<ResumeContent {...PBCHAFF_PAGE} />} />
        <Route path="localsearch" element={<ResumeContent {...LS_PAGE} />} />
        <Route path="climbing" element={<ResumeContent {...CLIMBING_PAGE} />} />
        <Route
          path="balancebot"
          element={<ResumeContent {...CONTROL_PAGE} />}
        />
        <Route path="drone" element={<ResumeContent {...DRONE_PAGE} />} />
        <Route path="pubs" element={<Publications />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}
