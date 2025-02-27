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
            <p>
              This page highlights my website,{" "}
              <a href="https://wildthinks.org/">Wildthinks</a>, that hosts many
              explorable math explanations. You can see my website{" "}
              <a href="https://github.com/wildthinkslaboratory/blog-kit">
                code
              </a>{" "}
              here. Some of my favorite applications are linked in the images to
              the right. If you want to know the story behind my site then
              continue reading.
            </p>
            <p>
              I started teaching high school mathematics at the Chewonki
              foundations Maine Coast Semester Program. I taught all the
              standard classes, lots of Algebra II classes, some statistics and
              a calculus class. I had no control over what book I used or what
              topics to cover. Later having young children in the public school
              system I got even more exposure to the K-12 math curriculum in
              America.{" "}
            </p>
            <p>
              The math we teach kids in school doesn’t look anything like the
              beautiful ideas I cherished from my college and graduate school
              days. I didn’t want my kids to have to wait until college to
              experience the joy of mathematics so I started searching for tools
              and resources that would give them the same sense of wonder that I
              had experienced only at an appropriate K-12 level.{" "}
            </p>
            <p>
              So how do you bring young children and teenagers into the
              mathematicians' world? That’s a complex question that I’m still
              trying to answer, but I’m confident that the process should
              change. In most classrooms, the teacher tells the students how to
              do math by giving them very specific algorithms that they are
              required to use for the purpose of computing things. Things
              proceed on a strict timeline with very little thinking, reasoning,
              exploration or discovery. I believe that rather than being told
              how to do mathematics, mathematics should be discovered by the
              students like the world's most fabulous treasure hunt. Students
              should get to reinvent it from the ground up. This process is
              harder, and at times more frustrating for students, but it’s also
              more exciting and more fun. The students gain an entirely
              different tool set. Rather than learning how to follow rules and
              accept what they are told, they learn to figure things out on
              their own. They become confident problem solvers. They learn how
              to create and invent mathematics. Most of what they invent will
              not be new to the world, but through the process of inventing they
              will come to think like mathematicians.
            </p>
            <p>
              WildThinks is one of my attempts to bring mathematics to life for
              young people. My hope is that it is a place to play, think,
              explore and figure things out on one’s own.
            </p>
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
