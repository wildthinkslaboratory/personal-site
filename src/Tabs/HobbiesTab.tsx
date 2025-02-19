import "./ProjectsTab.css";
import artPic from "../assets/chalkoctopus.jpeg";
import chalkbotPic from "../assets/chalkbot.png";
import climbingPic from "../assets/climbingWhite.jpg";

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

function HobbiesTab() {
  return (
    <div className="projectsTab">
      <div className="projectsBorder">
        <div className="titleDiv">
          <div className="wordHolder">
            <div className="projectsTitle">Hobbies</div>
          </div>
        </div>
      </div>
      {/* <div
        id={"projectScroller"}
        className="projectScroller"
        onMouseEnter={disableScroll}
        onWheel={scrollFunction}
        onMouseLeave={enableScroll}
      > */}
      <div id="projectDisplay" className="projectDisplay">
        <Link className="project" to="/climbing">
          <img
            id="image"
            className="gif"
            src={climbingPic}
            alt=""
            onMouseDown={enableScroll}
          ></img>
        </Link>
        <Link className="project" to="/art">
          <img
            id="image"
            className="gif"
            src={artPic}
            alt=""
            onMouseDown={enableScroll}
          ></img>
        </Link>
        <Link className="project" to="/chalkbot">
          <img
            id="image"
            className="gif"
            src={chalkbotPic}
            alt=""
            onMouseDown={enableScroll}
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default HobbiesTab;
