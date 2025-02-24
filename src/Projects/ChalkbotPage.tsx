import chalkBotPic from "../assets/chalkbot.jpeg";
import electronicsPic from "../assets/electronics.jpeg";
import chalkBot2Pic from "../assets/chalkbot2.jpeg";
import chalkBot3Pic from "../assets/chalkbot3.jpeg";

import { Link } from "react-router-dom";
import "./ProjectPage.css";

function ChalkbotPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">ChalkBot</div>
          <div className="projectParagraph">
            <p>
              I made ChalkBot when I took Mark Rober's online{" "}
              <a href="https://studio.com/mark-rober-engineering/landing">
                Creative Engineering class
              </a>
              . I made a two dimensional CNC (computer numerical control) style
              printer that could be used to make chalk drawings on the pavement.
              I don't have much hardware and engineering experience so I was
              definitely out of my element.
            </p>
            <p>
              When drawing, the error in the y direction can be minimized by
              providing a frame for the robot to move in. The main technical
              challenge is to reduce the error in the x direction which slowly
              accumulates over the process of a print. For a very big and
              complex drawing, you can reduce this error by periodically zeroing
              the machine. This means stopping the drawing and returning the pen
              to the zero position and backing the machine up against the frame.
              This resets the y position to the proper zero position. I used the
              open source <a href="https://github.com/grbl/grbl">grbl</a> CNC
              software to print my drawings.
            </p>
            <p>
              ChalkBot has been decommisioned and most of it's parts have been
              scavenged by my kids for other projects. I still dream of building
              a better version of her and painting the worlds sidewalks with
              math.
            </p>
          </div>
        </div>
        <div className="imageScroller">
          <div className="videoHolder">
            <iframe
              className="iframe-video"
              src="https://www.youtube.com/embed/Tdn9ZR6qVBE?si=KhFjbuUBvQDiDec_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={chalkBotPic}
              alt=""
            ></img>
          </div>
          <div className="videoHolder">
            <iframe
              className="iframe-video"
              src="https://www.youtube.com/embed/X55FPYN8blc?si=63p6wqMWMn7Oc6x8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={chalkBot2Pic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={electronicsPic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={chalkBot3Pic}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChalkbotPage;
