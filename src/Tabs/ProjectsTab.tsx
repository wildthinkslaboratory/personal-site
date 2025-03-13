import "./ProjectsTab.css";
// import ucPic from "../assets/uc.png";
// import localsearchPic from "../assets/localsearch2.png";
// import wildthinksPic from "../assets/penroseLogoVert.jpg";
// import searchPic from "../assets/search.jpeg";
// import phPic from "../assets/ph.jpg";

// import { Link } from "react-router-dom";
import ResumeList from "./ResumeList";
import { RESUME_ITEMS } from "./resume-data";

// export default function ProjectsTab() {
//   return (
//     <div className="projectsTab">
//       <div className="projectsBorder">
//         <div className="titleDiv">
//           <div className="wordHolder">
//             <div className="projectsTitle">Projects and Experience</div>
//           </div>
//         </div>
//       </div>
//       <div id="projectDisplay" className="projectDisplay">
//         <ResumeList items={RESUME_ITEMS} />
//       </div>
//     </div>
//   );
// }

export default function ProjectsTab() {
  return (
    <main id="resume-item-page">
      <header>
        <h2>Projects and Experience</h2>
      </header>
      <ResumeList items={RESUME_ITEMS} />
    </main>
  );
}
