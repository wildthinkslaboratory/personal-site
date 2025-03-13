import { Link } from "react-router-dom";
import "./ProjectPage.css";
import dfaPic from "../assets/dfa.001.jpeg";
import phPic from "../assets/ph.jpg";

function TeachingUOPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">
            Adjunct Instructor in Computer Science
          </div>
          <div className="projectParagraph">
            <p>
              I taught classes in the Computer Science department at the
              University of Oregon. I taught their undergraduate/graduate level
              Automata Theory class and the graduate level Algorithms and
              Complexity class.
            </p>
            <p>
              My automata theory class used Sipser's{" "}
              <u>Introduction to the Theory of Computation</u> book. Some topics
              included were regular languages, finite automata (DFA), regular
              expressions, regular grammars, pushdown automata (PDA), context
              free grammars, Turing machines, nondeterminism, the Cook-Levin
              theorem, complexity classes P, NP and NP-complete, undecidable
              languages and Gödel's incompleteness theorem.
            </p>
            <p>
              My Algorithms and Complexity class covered topics like proofs of
              correctness, algorithm analysis, amortized time complexity, divide
              and conquer, dynamic programming, graph algorithms, greedy
              algorithms, Dijkstra's algorithm, the Cook-Levin theorem,
              complexity classes P, NP and NP-complete, local search methods.
            </p>
            <p>
              Students taking these classes are expected to know how to write
              clean well structured proofs. However, in practice, students come
              to these classes from a wide variety of backgrounds with vastly
              different levels of preparation. In addition to introducing
              students to topics in theoretical computer science, a major focus
              of these classes is helping students refine their proof writing
              skills.
            </p>
          </div>
        </div>
        <div className="imageScroller">
          <div className="projectImageHolder">
            <img id="image" className="projectImage" src={dfaPic} alt=""></img>
          </div>
          <div className="projectImageHolder">
            <img id="image" className="projectImage" src={phPic} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachingUOPage;
