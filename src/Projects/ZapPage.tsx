import { Link } from "react-router-dom";
import "./ProjectPage.css";

function ZapPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <a href="https://www.flaticon.com/free-icons/robot" title="robot icons">
        Robot icons created by Dooder - Flaticon
      </a>
      <a
        href="https://www.flaticon.com/free-icons/rock-climbing"
        title="rock climbing icons"
      >
        Rock climbing icons created by cube29 - Flaticon
      </a>
      <a
        href="https://www.flaticon.com/free-icons/watercolor"
        title="Watercolor icons"
      >
        Watercolor icons created by Nhor Phai - Flaticon
      </a>
      <a href="https://www.flaticon.com/free-icons/craft" title="craft icons">
        Craft icons created by Icongeek26 - Flaticon
      </a>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">ZAP</div>
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

export default ZapPage;
