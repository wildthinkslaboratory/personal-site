import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import { SiReaddotcv } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

export default function Socials() {
  return (
    <ul className="socials">
      <li>
        <a href="https://github.com/wildthinkslaboratory">
          <BsGithub />
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
