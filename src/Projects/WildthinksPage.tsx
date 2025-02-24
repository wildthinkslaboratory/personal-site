import julia13Pic from "../assets/julia13.png";
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
              <a href="https://wildthinks.org/">Wildthinks</a>
            </p>
            <p>Links to some of my favorite content to the right.</p>
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
          <div className="videoHolder">
            <iframe
              className="iframe-video"
              src="https://www.youtube.com/embed/oXyek2Q40AI?si=E3mT4sUw4i__iz1Z"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
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
