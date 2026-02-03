import { BsGithub } from "react-icons/bs";
import { LuLink } from "react-icons/lu";

export type PubsAndAccessProps = {
  code: string;
  link: string;
  pubs: { citation: string; link: string }[];
};

function PubsAndAccessories({ code, link, pubs }: PubsAndAccessProps) {
  return (
    <div className="pubs-access">
      <div className="accessories">
        {code !== "" && (
          <a href={code} className="button" target="_blank">
            <BsGithub /> code
          </a>
        )}
        {link !== "" && (
          <a href={link} className="button" target="_blank">
            <LuLink /> website
          </a>
        )}
      </div>
      <div className="pubs">
        {/* {pubs.length > 0 && <h4>Papers</h4>} */}
        {pubs.length > 0 && (
          <ul>
            {pubs.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" className="external-link">
                  {item.citation}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PubsAndAccessories;
