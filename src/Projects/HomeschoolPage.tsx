import { Link } from "react-router-dom";
import "./ProjectPage.css";

function HomeschoolPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">Homeschool Page</div>
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
            <p>
              Good problem solving begins with a deep and fundamental belief
              that the world is structured and ordered and makes sense.
              Complexity arises from a very simple set of rules. The first step
              of problem solving comes from a belief that the world makes sense
              and can be understood. Repect for complexity. Much of the workings
              are hidden and must be inferred. Learing should encourage
              divergent thinking. Provide the clues and environment so students
              can invent the result for themselves. Rather than telling them the
              result. nurturing problem solvers
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

export default HomeschoolPage;
