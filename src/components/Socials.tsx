import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import { SiReaddotcv } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { RiAwardFill } from "react-icons/ri";
import CV from "../assets/HeidiDixonResume.pdf";

export default function Socials() {
  return (
    <ul className="socials">
      <li>
        <div className="social-div">
          <a href="https://github.com/wildthinkslaboratory">
            <BsGithub />
          </a>
          <span className="social-name">github</span>
        </div>
      </li>
      <li>
        <div className="social-div">
          <a href={CV}>
            <SiReaddotcv />
          </a>
          <span className="social-name">resume</span>
        </div>
      </li>
      <li>
        <div className="social-div">
          <Link to="pubs">
            <FiBook />
          </Link>
          <span className="social-name">publications</span>
        </div>
      </li>
      <li>
        <div className="social-div">
          <a href="https://patents.justia.com/inventor/heidi-dixon">
            <RiAwardFill />
          </a>
          <span className="social-name">patent</span>
        </div>
      </li>
      <li className="citationsLi">
        <BsFillChatSquareQuoteFill />
        <div className="citations">
          <p>
            Design ideas for this website come from{" "}
            <a href="https://brittanychiang.com/" target="_blank">
              Brittany Chiang's
            </a>{" "}
            beautiful webpage.
          </p>
          <p>
            This is a{" "}
            <a href="https://react.dev/" target="_blank">
              React
            </a>{" "}
            page written in{" "}
            <a href="https://www.typescriptlang.org/" target="_blank">
              Typescript
            </a>{" "}
            by me.
          </p>
        </div>
      </li>
    </ul>
  );
}
