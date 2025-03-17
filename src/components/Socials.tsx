import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import { SiReaddotcv } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import CV from "../assets/HeidiDixonResume.pdf";

export default function Socials() {
  return (
    <ul className="socials">
      <li>
        <a href="https://github.com/wildthinkslaboratory">
          <BsGithub />
        </a>
      </li>
      <li>
        <a href={CV}>
          <SiReaddotcv />
        </a>
      </li>
      <li>
        <Link to="pubs">
          <FiBook />
        </Link>
      </li>
      <li className="citationsLi">
        <BsFillChatSquareQuoteFill />
        <div className="citations">
          <p>
            Design ideas for this website come from{" "}
            <a href="https://brittanychiang.com/">Brittany Chiang's</a>{" "}
            beautiful webpage.
          </p>
          <p>
            This is a <a href="https://react.dev/">React</a> page written in{" "}
            <a href="https://www.typescriptlang.org/">Typescript</a> by me.
          </p>
        </div>
      </li>
    </ul>
  );
}
