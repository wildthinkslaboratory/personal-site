import { Link } from "react-router-dom";
import "./ProjectPage.css";

function ClimbingPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">Bouldering</div>
          <div className="projectParagraph">
            <p>
              I started climbing about seven years ago when my kids got
              interested in it. Now I can’t imagine my life without it. I climb
              because I need to move. When you climb, the body is like a complex
              force meter. Neurons from fingertips to toes and everywhere in
              between flood the brain with messages and senses about directional
              forces. In a flow state, the brain just integrates them and
              perfectly calculates the next movement. I love this experience,
              building the neural circuitry needed through volume and repetition
              until our body just knows what to do. Climbing is also a way to
              practice managing fear. I am by nature a risk averse person. To
              climb well, you need to be able to move well when you’re scared.
              You need to move freely and with commitment while your brain is
              screaming at you to freeze. When you move through that barrier of
              fear and flow upward, grasp the next hold and your fingers stick,
              the burst of exhilaration is unbeatable. It’s so hard and at the
              same time addictive. So the climbing gym pulls me and I must go.
            </p>
          </div>
        </div>
        <div className="imageScroller">
          <div className="videoHolder">
            <iframe
              className="iframe-video"
              src="https://www.youtube.com/embed/s7JqHHQ9L_E?si=D88N7B6qNyOPxm2J"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="videoHolder">
            <iframe
              className="iframe-shorts-video"
              src="https://youtube.com/embed/XDC2k6AhAaM?si=x8BKrup8cdg6U1YD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="videoHolder">
            <iframe
              className="iframe-video"
              width="315"
              height="560"
              src="https://www.youtube.com/embed/X6yaPpIIUHk?si=ve9GLNRWEq8SIGky"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClimbingPage;
