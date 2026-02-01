import Media from "./Media";
import { BsGithub } from "react-icons/bs";
import { LuLink } from "react-icons/lu";
import HomeButton from "./HomeButton";
import type { ResumeContentProps } from "./ResumeContent";

function ResumeHorzContent({
  title1,
  title2,
  content,
  media,
  code,
  link,
  pubs,
}: ResumeContentProps) {
  return (
    <div className="content-wrapper-horz-div">
      <HomeButton />
      <div className="content-horz-div">
        <h3>{title1}</h3>
        <h3 className="">{title2}</h3>
        <div className="content-paragraphs">{content}</div>
        <div className="accessories">
          {code !== "" && (
            <a href={code} className="button">
              <BsGithub /> code
            </a>
          )}
          {link !== "" && (
            <a href={link} className="button">
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
      <div className="media-horz-div">
        {media.map((item, index) => (
          <Media
            key={index}
            media={item.mediaContent}
            caption={item.caption}
            mediaType={item.mediaType}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ResumeHorzContent;
