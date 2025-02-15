import snowbunnyPic from "../assets/snowbunny.jpeg";
import teapotPic from "../assets/teapot.jpeg";
import artdecoPic from "../assets/artdecowall.jpeg";
import chalkBotPic from "../assets/chalkbot.jpeg";
import facepaintPic from "../assets/facepaint2.jpeg";
import reneequiltPic from "../assets/reneequilt2.jpeg";
import heronPic from "../assets/heron.jpeg";

import { Link } from "react-router-dom";
import "./ProjectPage.css";

function ArtPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">Art</div>
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
              src={artdecoPic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={snowbunnyPic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={teapotPic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={facepaintPic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={chalkBotPic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={reneequiltPic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={heronPic}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtPage;
