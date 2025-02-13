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
          </div>
        </div>
        <div className="imageScroller"></div>
      </div>
    </div>
  );
}

export default LocalsearchPage;
