import dpll1Pic from "../assets/dpll1.png";
import dpll2Pic from "../assets/dpll2.png";
import cutPic from "../assets/branchCut.png";

import { Link } from "react-router-dom";
import "./ProjectPage.css";

function PBChaffPage() {
  return (
    <div className="projectDiv">
      <Link className="homeButton" to="/">
        <div className="homeButtonTitle">HOME</div>
      </Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">PBChaff</div>
          <div className="projectParagraph">
            <p>
              {" "}
              For my dissertation I worked on systematic solution methods for
              solving satisifiability (SAT) problems. SAT problems are the
              canonical NP-complte problem. Current solution methods for these
              problems have a worst case time scaling that is exponential
              relative to their input size.
            </p>
            <p>
              Systematic search methods can determine whether a problem instance
              has a solution or not. Determining that a problem doesn't have a
              solution requires the algorithm to produce a proof that no
              solution exists. So systematic methods for SAT problems are a form
              of automated deduction producing propositional proofs of
              unsatisfiability to elimiante parts of the search space with no
              solutions. Unfortunately, the proof systems used by traditional
              SAT solvers is very weak and often requires exponentially long
              proofs on problems that should be easy. This leads to exponential
              time scaling for these problems.
            </p>
            <p>
              My research worked on adapting traditional SAT solvers to use
              pseudo-Boolean representation. Pseudo-Boolean representation
              describes problem constaints as linear inequalities over Boolean
              variables. It originated in Operations Research and is used in
              Integer Programming methods. I adapted standard SAT algorithms to
              use this representation and to produce pseudo-Boolean proofs. My
              experiments showed that this leads to exponential improvements in
              run time for many problem domains and produces only a very modest
              constant time cost in general.
            </p>
            <p>
              The code for my solver{" "}
              <a href="https://github.com/wildthinkslaboratory/satlib/tree/main/pbchaff">
                pbchaff
              </a>{" "}
              is posted on GitHub. It's part of a my larger{" "}
              <a href="https://github.com/wildthinkslaboratory/satlib">
                satlib
              </a>{" "}
              that contains a variety of tools and solvers for satisfiability
              problems.
            </p>
            <h3>PBChaff Publications</h3>
            <p>
              <ul>
                <li>
                  Heidi E. Dixon, PhD Thesis.{" "}
                  <a href="https://citeseerx.ist.psu.edu/document?repid=rep1&amp;type=pdf&amp;doi=15ee55bbb6396f9b5c2c6a088b7526c954d2f884">
                    Automating Pseudo-Boolean Inference withing a DPLL Framework
                  </a>{" "}
                  University of Oregon. 2004.
                </li>
                <li>
                  Heidi E. Dixon and Matthew L. Ginsberg, 2002.{" "}
                  <a href="https://cdn.aaai.org/AAAI/2002/AAAI02-095.pdf">
                    Inference methods for a pseudo-Boolean satisfiability
                    solver.
                  </a>{" "}
                  The Eighteenth National Conference on Artificial Intelligence
                  (AAAI-2002).
                </li>
                <li>
                  Heidi E. Dixon and Matthew L. Ginsberg, 2000.{" "}
                  <a href="https://dl.acm.org/doi/abs/10.1017/S0269888900001041">
                    Combining Satisfiability techniques from AI and OR.
                  </a>{" "}
                  The Knowledge Engineering Review 15(1).
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="imageScroller">
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={dpll2Pic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img
              id="image"
              className="projectImage"
              src={dpll1Pic}
              alt=""
            ></img>
          </div>
          <div className="projectImageHolder">
            <img id="image" className="projectImage" src={cutPic} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PBChaffPage;
