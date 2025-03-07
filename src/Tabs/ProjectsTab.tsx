import "./ProjectsTab.css";
import ucPic from "../assets/uc.png";
import localsearchPic from "../assets/localsearch2.png";
import wildthinksPic from "../assets/penroseLogoVert.jpg";
import searchPic from "../assets/search.jpeg";

import { Link } from "react-router-dom";

// function scrollFunction(event: any) {
//   const carousel = document.getElementById("projectScroller");
//   if (carousel) {
//     carousel.scrollLeft += event.deltaY;
//     if (
//       1.25 * carousel.scrollLeft === carousel.clientWidth ||
//       carousel.scrollLeft === 0
//     ) {
//       enableScroll();
//     } else {
//       disableScroll();
//     }
//   }
// }

// function disableScroll() {
//   const body = document.body;
//   body.classList.add("noScroll");
// }

function enableScroll() {
  const body = document.body;
  body.classList.remove("noScroll");
}

function ProjectsTab() {
  return (
    <div className="projectsTab">
      <div className="projectsBorder">
        <div className="titleDiv">
          <div className="wordHolder">
            <div className="projectsTitle">Projects and Experience</div>
          </div>
        </div>
      </div>
      <div id="projectDisplay" className="projectDisplay">
        <Link className="project" to="/wildthinks">
          <img
            id="image"
            className="gif"
            src={wildthinksPic}
            alt=""
            onMouseDown={enableScroll}
          ></img>
        </Link>
        <Link className="project" to="/localsearch">
          <img
            id="image"
            className="gif"
            src={localsearchPic}
            alt=""
            onMouseDown={enableScroll}
          ></img>
        </Link>
        <Link className="project" to="/pbchaff">
          <img
            id="image"
            className="gif"
            src={searchPic}
            alt=""
            onMouseDown={enableScroll}
          ></img>
        </Link>
        <Link className="project" to="/zap">
          <img
            id="image"
            className="gif"
            src={ucPic}
            alt=""
            onMouseDown={enableScroll}
          ></img>
        </Link>
        <Link className="project" to="/proofcomplexity">
          <img
            id="image"
            className="gif"
            src={ucPic}
            alt=""
            onMouseDown={enableScroll}
          ></img>
        </Link>
        <Link className="project" to="/greendriver">
          <img
            id="image"
            className="gif"
            src={ucPic}
            alt=""
            onMouseDown={enableScroll}
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsTab;
