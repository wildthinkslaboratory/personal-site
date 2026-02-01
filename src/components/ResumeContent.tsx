import Media from "./Media";
import { BsGithub } from "react-icons/bs";
import { LuLink } from "react-icons/lu";
import HomeButton from "./HomeButton";

export type ResumeContentProps = {
  title1: string;
  title2: string;
  content: JSX.Element;
  media: {
    mediaContent: string;
    caption: string;
    mediaType: string;
    link: string;
  }[];
  code: string;
  link: string;
  pubs: { citation: string; link: string }[];
};

function ResumeContent({
  title1,
  title2,
  content,
  media,
  code,
  link,
  pubs,
}: ResumeContentProps) {
  return (
    <div className="content-div">
      <HomeButton />
      <div className="content-vert-div">
        <h3>{title1}</h3>
        <h3>{title2}</h3>
        <div className="content-paragraphs">{content}</div>
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
      <div className="media-vert-div">
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

export default ResumeContent;
