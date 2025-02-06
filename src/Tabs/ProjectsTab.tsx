import "./ProjectsTab.css";
import roboticsPic from "../assets/legoRobotics.jpg";
import { Link } from "react-router-dom";

function scrollFunction(event: any) {
  const carousel = document.getElementById("projectScroller");
  if (carousel) {
    carousel.scrollLeft += event.deltaY;
    if (
      1.25 * carousel.scrollLeft === carousel.clientWidth ||
      carousel.scrollLeft === 0
    ) {
      enableScroll();
    } else {
      disableScroll();
    }
  }
}

function disableScroll() {
  const body = document.body;
  body.classList.add("noScroll");
}

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
            <div className="projectsTitle">Projects</div>
            <p>
              This is a paragraph. This is a paragraph. This is a paragraph.{" "}
              This is a paragraph. This is a paragraph. This is a paragraph.{" "}
              This is a paragraph. This is a paragraph. This is a paragraph.{" "}
              This is a paragraph. This is a paragraph. This is a paragraph.{" "}
              This is a paragraph.{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        id={"projectScroller"}
        className="projectScroller"
        onMouseEnter={disableScroll}
        onWheel={scrollFunction}
        onMouseLeave={enableScroll}
      >
        <Link className="project" to="/robotics">
          <div className="imageHolder">
            <img
              id="image"
              className="gif"
              src={roboticsPic}
              alt=""
              onMouseDown={enableScroll}
            ></img>
            <div className="centered">Robotics</div>
          </div>
        </Link>
        <Link className="project" to="/goldfishandrobin">
          <img
            id="image"
            className="gif"
            src="highresshortvid.gif"
            alt=""
            onMouseDown={enableScroll}
          ></img>
        </Link>
        <Link className="project" to="/climbing">
          <img
            id="image"
            className="gif"
            src="highresshortvid.gif"
            alt=""
            onMouseDown={enableScroll}
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsTab;
