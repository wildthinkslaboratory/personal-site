import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import { SiReaddotcv } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
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
    </ul>
  );
}
