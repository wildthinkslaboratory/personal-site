import { Link } from "react-router-dom";
import "./ProjectPage.css";

function LegoRoboticsPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">Coaching Robotics</div>
          <div className="projectParagraph">
            <p>
              {" "}
              I coached Lego Robotics for five years. I coached teams at{" "}
              <a href="https://riverroad.4j.lane.edu/">
                El Camino del Rio Elementary School
              </a>{" "}
              and at{" "}
              <a href="https://spencerbutte.4j.lane.edu/">
                Spencer Butte Middle School
              </a>
              . Our teams participated in{" "}
              <a href="https://www.firstlegoleague.org/">
                First Lego League (FLL)
              </a>{" "}
              competitions.
            </p>
            <p>
              My fourth and fifth grade teams focused on learning basic coding
              skills such control structures and hardware control. They used
              these skills to build simple missions that they tested, refined,
              and prepared for competition.
            </p>
            <p>
              My more experienced teams designed and built their own robots to
              take on multi part missions. To do this in the alotted time,
              students need to use a design cycle that allows for multiple
              iterations through a prototype, test and refine cycle. The first
              prototype design is often too complex. Designs need to be
              simplified and streamlined. Students who are ready to implement
              multi part missions also need to learn to manage complexity. The
              more complex a mission is, the more things can go wrong. To be
              successful, students need to build precise strategies that reduce
              error or build stategies that are flexible enough to tolerate
              error.
            </p>
            <p>
              I've taught so many talented, creative and curious kids. I've had
              three teams qualify to go to state competitions and one team who
              won the IBM Award for Innovation at the state competition. My
              students are grown now and many are studying STEM fields in
              college. It's exciting to see them begin STEM careers.
            </p>
          </div>
        </div>
        <div className="imageScroller">
          <div className="videoHolder">
            <iframe
              className="iframe-video"
              src="https://www.youtube.com/embed/yvGqmgsHjUw?si=3yWY_3lQfnvgRpff"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="videoHolder">
            <iframe
              className="iframe-video"
              src="https://www.youtube.com/embed/z5l7fa2riSU?si=zYK2FgTyhdXj7URZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegoRoboticsPage;
