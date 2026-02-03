import Media from "./Media";
import PubsAndAccessories from "./PubsAccessories";
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
        <PubsAndAccessories
          code={code}
          link={link}
          pubs={pubs}
        ></PubsAndAccessories>
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
