import Media from "./Media";

type ResumeItemContentProps = {
  title1: string;
  title2: string;
  content: string[];
  media: { mediaContent: string; mediaType: string; link: string }[];
};

function ResumeItemContent({
  title1,
  title2,
  content,
  media,
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
