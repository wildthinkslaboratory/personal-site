type ResumeItemContentProps = {
  title1: string;
  title2: string;
  content: string[];
  media: { mediaContent: string; mediaType: string }[];
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
        <div className="media-holder">
          {media.map((item) => (
            <img className="media-image" src={item.mediaContent}></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeItemContent;
