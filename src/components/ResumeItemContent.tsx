import Media from "./Media";
import { BsGithub } from "react-icons/bs";
import { LuLink } from "react-icons/lu";

type ResumeItemContentProps = {
  title1: string;
  title2: string;
  content: string[];
  media: { mediaContent: string; mediaType: string; link: string }[];
  code: string;
  link: string;
  pubs: { citation: string; link: string }[];
};

function ResumeItemContent({
  title1,
  title2,
  content,
  media,
  code,
  link,
  pubs,
}: ResumeItemContentProps) {
  return (
    <div className="content-div">
      <div className="content-vert-div">
        <h1>{title1}</h1>
        <h3 className="">{title2}</h3>
        <div className="content-paragraphs">
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="accessories">
          {code !== "" && (
            <a href={code} className="button">
              <BsGithub /> code
            </a>
          )}
          {link !== "" && (
            <a href={code} className="button">
              <LuLink /> website
            </a>
          )}
        </div>
        <div className="pubs">
          {pubs.length > 0 && (
            <ul>
              {pubs.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.citation}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="media-vert-div">
        {media.map((item, index) => (
          <Media
            key={index}
            media={item.mediaContent}
            mediaType={item.mediaType}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ResumeItemContent;
