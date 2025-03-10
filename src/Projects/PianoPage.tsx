import { Link } from "react-router-dom";
import "./ProjectPage.css";

function PianoPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">Piano</div>
          <div className="projectParagraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="imageScroller">
          <div className="projectImageHolder">
            <img id="image" className="projectImage" src="" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PianoPage;
