import snowbunnyPic from "../assets/snowbunny.jpeg";
import teapotPic from "../assets/teapot.jpeg";
import artdecoPic from "../assets/artdecowall.jpeg";
import chalkBotPic from "../assets/chalkbot.jpeg";
import facepaintPic from "../assets/facepaint2.jpeg";
import knitFish from "../assets/knitfish.jpg";
import owlPic from "../assets/owl.jpg";
import izzyquiltPic from "../assets/treequilt.jpg";

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
          <div className="projectTitle">Arts and Crafts</div>
          <div className="projectParagraph">
            <p>
              I do a lot of arts and crafts. Here is a selection of my work in
              various mediums.
            </p>
          </div>
        </div>
        <div className="imageScroller">
          <div className="projectImageHolder">
            <img id="image" className="projectImage" src={owlPic} alt=""></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={izzyquiltPic}
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
              src={chalkBotPic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={knitFish}
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
              src={artdecoPic}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtPage;
