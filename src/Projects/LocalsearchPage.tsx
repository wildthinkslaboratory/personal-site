import bogglePic from "../assets/boggle.png";
import localsearchPic from "../assets/localsearch.png";
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
          <div className="projectTitle">Local Search</div>
          <div className="projectParagraph">
            <p>
              For my PhD I studied solution methods for solving NP-complete
              problems. When the search space of an optimization problem is too
              large to solve completely, the only option is to use local search
              methods. Two domains my lab specialized in were large scale
              scheduling and routing problems. We used a variety of algorithms
              such as variants of hill climbing and Squeaky Wheel optimization.
            </p>
            <p>
              Effective search algorithms require the inner search loop to be
              highly optimized. You need the most efficient data structures and
              code with the best time complexity for the problem. You need to
              understand compiler optimizations and how to keep critical data
              structures in the cache. I have a lot of experience optimizing
              code for both analytical time scaling and more practical concerns
              such as cache optimizations.
            </p>
            <p>
              You can check out my{" "}
              <a href="https://github.com/wildthinkslaboratory/boggle">code</a>{" "}
              for finding an optimal boggle board on my github page to get a
              sense of how I might approach a simple search problem. It uses a
              combination of parallel hill climbing and steepest ascent to find
              the highest scoring boggle board relative to a given dictionary.
              The optimizations required to efficiently score a board relative
              to a dictionary are interesting. A write up of my experiments is
              in the{" "}
              <a href="https://github.com/wildthinkslaboratory/boggle/blob/main/README.md">
                README
              </a>
            </p>
          </div>
        </div>
        <div className="imageScroller">
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={localsearchPic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={bogglePic}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalsearchPage;
