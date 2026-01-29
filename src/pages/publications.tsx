import HomeButton from "../components/HomeButton";

function Publications() {
  return (
    <div className="publications-page">
      <HomeButton />
      <h3>Publications</h3>
      <div className="publicationList">
        <ul>
          <li>
            Apple, J. et al.{" "}
            <a
              href="https://aaai.org/papers/7798-green-driver-ai-in-a-microcosm/"
              target="_blank"
            >
              Green Driver: AI in a Microcosm.
            </a>{" "}
            AAAI, 2011.
          </li>
          <li>
            Dixon, H. E., Ginsberg, M. L., Hofer, D. K., Luks, E. M., and
            Parkes, A.{" "}
            <a
              href="https://www.jair.org/index.php/jair/article/view/10407/24941"
              target="_blank"
            >
              Generalizing Boolean Satisfiability III: Implementation.
            </a>{" "}
            JAIR, 2005.
          </li>
          <li>
            Heidi E. Dixon{" "}
            <a
              href="https://citeseerx.ist.psu.edu/document?repid=rep1&amp;type=pdf&amp;doi=15ee55bbb6396f9b5c2c6a088b7526c954d2f884"
              target="_blank"
            >
              Automating Pseudo-Boolean Inference withing a DPLL Framework.
            </a>{" "}
            PhD Thesis. University of Oregon. 2004.
          </li>
          <li>
            Dixon, H. E., Ginsberg, M. L., Luks, E. M., and Parkes, A. J.{" "}
            <a
              href="https://www.jair.org/index.php/jair/article/view/10397/24905"
              target="_blank"
            >
              Generalizing Boolean Satisfiability II: Theory.
            </a>{" "}
            JAIR, 2004.
          </li>
          <li>
            Dixon, H. E., Ginsberg, M. L., Hofer, D. K., Luks, E. M., and
            Parkes, A. J.{" "}
            <a
              href="https://aaai.org/papers/00055-aaai04-009-implementing-a-generalized-version-of-resolution/"
              target="_blank"
            >
              Implementing a generalized version of resolution.
            </a>{" "}
            AAAI, 2004.
          </li>
          <li>
            Dixon, H. E., Ginsberg, M. L., and Parkes, A. J.{" "}
            <a
              href="https://www.jair.org/index.php/jair/article/view/10369/24816"
              target="_blank"
            >
              Generalizing Boolean Satisfiability I: Background and survey of
              existing work.
            </a>{" "}
            JAIR, 2004.
          </li>
          <li>
            Dixon, H. E., Ginsberg, M. L., and Parkes, A. J.{" "}
            <a
              href="https://www.researchgate.net/publication/2539695_Likely_Near-term_Advances_in_SAT_Solvers"
              target="_blank"
            >
              Likely Near-term Advances in SAT Solvers.
            </a>{" "}
            MTV Workshop, 2002.
          </li>
          <li>
            Dixon H. E. and Ginsberg M. L.{" "}
            <a
              href="https://cdn.aaai.org/AAAI/2002/AAAI02-095.pdf"
              target="_blank"
            >
              Inference methods for a pseudo-Boolean satisfiability solver.
            </a>{" "}
            AAAI, 2002.
          </li>
          <li>
            Dixon, H. E. and Ginsberg, M. L.{" "}
            <a
              href="https://dl.acm.org/doi/abs/10.1017/S0269888900001041"
              target="_blank"
            >
              Combining Satisfiability techniques from AI and OR.
            </a>{" "}
            KER 15(1), 2000.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Publications;
