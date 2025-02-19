import "./PublicationsTab.css";

function PublicationsTab() {
  return (
    <div className="publicationsTab">
      <div className="projectsBorder">
        <div className="titleDiv">
          <div className="wordHolder">
            <div className="projectsTitle">Publications</div>
          </div>
        </div>
      </div>

      <div className="publicationList">
        <ul>
          <li>
            Apple, J.; Chang, P.; Clauson, A.; Dixon, H.; Fakhoury, H.;
            Ginsberg, M.; Keenan, E.; Leighton, A.; Scavezze, K.; Smith, B..{" "}
            <a href="https://aaai.org/papers/7798-green-driver-ai-in-a-microcosm/">
              Green Driver: AI in a Microcosm.
            </a>{" "}
            AAAI Conference on Artificial Intelligence, North America, aug.
            2011.
          </li>
          <li>
            Heidi E. Dixon, Matthew L. Ginsberg, David Hofer, Eugene M. Luks,
            and Andrew J. Parkes, 2005.{" "}
            <a href="https://www.jair.org/index.php/jair/article/view/10407/24941">
              Generalizing Boolean Satisfiability III: Implementation.
            </a>{" "}
            Journal of Artificial Intelligence Research, 23:441-531.
          </li>
          <li>
            Heidi E. Dixon, PhD Thesis.{" "}
            <a href="https://citeseerx.ist.psu.edu/document?repid=rep1&amp;type=pdf&amp;doi=15ee55bbb6396f9b5c2c6a088b7526c954d2f884">
              Automating Pseudo-Boolean Inference withing a DPLL Framework
            </a>{" "}
            University of Oregon. 2004.
          </li>
          <li>
            Heidi E. Dixon, Matthew L. Ginsberg, Eugene M. Luks, and Andrew J.
            Parkes, 2004.{" "}
            <a href="https://arxiv.org/abs/1109.2134">
              Generalizing Boolean Satisfiability II: Theory.
            </a>{" "}
            Journal of Artificial Intelligence Research, 22:481-534.
          </li>
          <li>
            Heidi E. Dixon, Matthew L. Ginsberg, David K. Hofer, Eugene M. Luks,
            and Andrew Parkes 2004.{" "}
            <a href="https://aaai.org/papers/00055-aaai04-009-implementing-a-generalized-version-of-resolution/">
              Implementing a generalized version of resolution.
            </a>{" "}
            The Nineteenth National Conference on Artificial Intelligence
            (AAAI-2004).
          </li>
          <li>
            Heidi E. Dixon, Matthew L. Ginsberg, and Andrew J. Parkes, 2004.{" "}
            <a href="https://arxiv.org/abs/1107.0040">
              Generalizing Boolean Satisfiability I: Background and survey of
              existing work.
            </a>{" "}
            Journal of Artificial Intelligence Research, 21:193-243.
          </li>
          <li>
            Heidi E. Dixon, Matthew L. Ginsberg, and Andrew J. Parkes, 2002.{" "}
            <a href="https://www.researchgate.net/publication/2539695_Likely_Near-term_Advances_in_SAT_Solvers">
              Likely Near-term Advances in SAT Solvers
            </a>{" "}
            Workshop on Microprocessor Test and Verification (MTV 2002). Held in
            Austin, Texas, USA. June 2002.
          </li>
          <li>
            Heidi E. Dixon and Matthew L. Ginsberg, 2002.{" "}
            <a href="https://cdn.aaai.org/AAAI/2002/AAAI02-095.pdf">
              Inference methods for a pseudo-Boolean satisfiability solver.
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
      </div>
    </div>
  );
}

export default PublicationsTab;
