import julia13Pic from "../assets/julia13.png";
import circPic from "../assets/circ.png";
import ftcPic from "../assets/ftc.png";
import calcRectPic from "../assets/calcRect.png";

import { Link } from "react-router-dom";
import "./ProjectPage.css";

function WildthinksPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">Wildthinks</div>
          <div className="projectParagraph">
            <p>Wildthinks page content.</p>
            <p>
              I love seeing the sense of wonder and amazement that children
              experience when they learn new ideas. Their ideas of what to build
              and what is possible are so creative, fanciful and sometimes
              crazy. Also, kids are just better at having fun than adults. My
              job as a coach is to give them the tools to make their ideas
              practical and realizable. Coaching robotics was a lot of work, but
              it was rewarding and just so joyful.{" "}
              <a href="https://www.youtube.com/@goldfishandrobin7020">
                GoldfisAndRobin
              </a>{" "}
            </p>
          </div>
        </div>

        <div className="imageScroller">
          <div className="projectImageHolder">
            <a href="https://wildthinks.org/pages/SuperJulia">
              <img
                id="image"
                className="projectImage"
                src={julia13Pic}
                alt=""
              ></img>
            </a>
          </div>
          <div className="projectImageHolder">
            <a href="https://wildthinks.org/pages/ftc1/">
              <img
                id="image"
                className="projectImage"
                src={ftcPic}
                alt=""
              ></img>
            </a>
          </div>
          <div className="projectImageHolder">
            <a href="https://wildthinks.org/pages/circCoord/">
              <img
                id="image"
                className="projectImage"
                src={circPic}
                alt=""
              ></img>
            </a>
          </div>
          <div className="projectImageHolder">
            <a href="https://wildthinks.org/pages/rectangle1/">
              <img
                id="image"
                className="projectImage"
                src={calcRectPic}
                alt=""
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WildthinksPage;
