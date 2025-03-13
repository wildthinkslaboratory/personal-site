import "./ProjectsTab.css";
import ResumeList from "./ResumeList";
import { PROJECT_ITEMS } from "./resume-data";

export default function ProjectsTab() {
  return (
    <main id="resume-item-page">
      <ResumeList items={PROJECT_ITEMS} />
    </main>
  );
}
