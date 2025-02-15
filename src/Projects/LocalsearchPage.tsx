import bogglePic from "../assets/boggle.jpeg";
import localsearchPic from "../assets/localsearch.png";
import { Link } from "react-router-dom";
import "./ProjectPage.css";

function LocalsearchPage() {
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
            <img
              id="image"
              className="projectImage"
              src={localsearchPic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={bogglePic}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalsearchPage;
