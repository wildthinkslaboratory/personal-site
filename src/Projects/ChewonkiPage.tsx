import chewonkiPic from "../assets/chewonki2.jpg";

import { Link } from "react-router-dom";
import "./ProjectPage.css";

function ChewonkiPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">
            The Chewonki Foundation: Maine Coast Sememster
          </div>
          <div className="projectParagraph">
            <p>
              I taught high school algebra, calculus and statistics at the{" "}
              <a href="https://chewonki.org/">Chewonki Foundation's</a>{" "}
              <a href="https://mainecoastsemester.chewonki.org/">
                Maine Coast Semester
              </a>{" "}
              program, which is an environmentally based semester away program
              for high school juniors.
            </p>
            <p>
              The Chewonki Foundation is located on a beautiful peninsula on the
              coast of Maine. Students live and work on the farm and study
              environmentally based classes. My job was to help them keep up
              their mathematical studies while they were away from their regular
              schools. I had small classes filled with very bright and motivated
              students who were excited to learn.
            </p>
          </div>
        </div>
        <div className="imageScroller">
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={chewonkiPic}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChewonkiPage;
