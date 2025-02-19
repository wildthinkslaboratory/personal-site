import { Link } from "react-router-dom";
import "./ProjectPage.css";

function GoldfishRobinPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">Goldfish and Robin YouTube Channel</div>
          <div className="projectParagraph">
            <p>
              This all started with my kids. They desperately wanted to have a
              YouTube Channel. I agreed to a channel if it was educational and
              that I would review all posts before they were uploaded. They
              decided to make a series of videos about programming in Minecraft.
              I helped them organize their ideas a bit and we learned editing
              together. That’s how{" "}
              <a href="https://www.youtube.com/@goldfishandrobin7020">
                GoldfisAndRobin
              </a>{" "}
              was born.
            </p>
            <p>
              Things progressed when{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/James_Tanton"
              >
                James Tanton
              </a>{" "}
              saw a video they made on Exploding Dots. Exploding Dots is a James
              Tanton curriculum that teaches arithmetic in alternate base
              systems to young kids and curious adults. James asked the kids to
              make more videos so he could include them in his first{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://globalmathproject.org/gmw"
              >
                Global Math Week
              </a>{" "}
              , an online math program that is put on by the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://globalmathproject.org/"
              >
                Global Math Project
              </a>{" "}
              . We taught a class on Exploding Dots at{" "}
              <a href="https://riverroad.4j.lane.edu/">
                El Camino del Rio Elementary School
              </a>{" "}
              . This helped expand the cast of characters for their videos and
              also allowed them to make some of their videos in Spanish. Over
              all they made a total of 44 videos. Their most popular video has
              about 50 thousand views. Their videos are still sprinkled
              throughout James Tanton’s personal Exploding Dots page.
            </p>
            <p>
              My role in this project was primarily as a mentor to the group.
              The videos were mostly made by the kids. I helped them organize
              their ideas and in the end I did a lot of editing because the
              timeline for the first Exploding Dots week was tight and it turned
              out to be too much work for them. But they did the presentation,
              most of the filming and 100% of the creativity.{" "}
            </p>
            <p>
              My kids outgrew the channel when they hit middle school and moved
              on to other things. This was always a kid driven project so when
              they lost interest production stopped. The videos they made are
              fantastic and I’m super proud of all the group achieved.
            </p>
          </div>
        </div>
        <div className="imageScroller">
          <div className="videoHolder">
            <iframe
              className="iframe-video"
              src="https://www.youtube.com/embed/jCBwHGtEV5M?si=LL-G73P2VW5BqUKr"
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
              src="https://www.youtube.com/embed/0chOl7JnYSQ?si=QPL1Q7GoZwpvfqe2"
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
              src="https://www.youtube.com/embed/eQYLL7XnM-4?si=c5DNfgkUW4w8qlrN"
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
              src="https://www.youtube.com/embed/9Xy-Bbzvlls?si=NGlBCxb2WsM9UkV5"
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

export default GoldfishRobinPage;
