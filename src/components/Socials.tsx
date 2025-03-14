import { Link } from "react-router-dom";

import { FaGithubAlt } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { SiReaddotcv } from "react-icons/si";

export default function Socials() {
  return (
    <ul className="socials">
      <li>
        <a href="https://github.com/wildthinkslaboratory">
          <FaGithubAlt />
        </a>
      </li>
      <li>
        <a href="">
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
