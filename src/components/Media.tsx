import { StlViewer } from "react-stl-viewer";

export type MediaProps = {
  media: string;
  caption: string;
  mediaType: string;
  link: string;
};

function Media({ media, caption, mediaType, link }: MediaProps) {
  const modelProps = {
    scale: 2,
    positionX: 0,
  };

  const renderMedia = () => {
    switch (mediaType) {
      case "image":
        return (
          <div className="media-image-holder">
            <img src={media}></img>
            <span className="media-caption">{caption}</span>
          </div>
        );
      case "image link":
        return (
          <div className="media-image-holder">
            <a href={link} target="_blank">
              <img src={media}></img>
            </a>
            <span className="media-caption">{caption}</span>
          </div>
        );
      case "short":
        return (
          <div className="media-short-holder">
            <iframe
              className="iframe-shorts-video"
              src={media}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <span className="media-caption">{caption}</span>
          </div>
        );
      case "horzShort":
        return (
          <div className="media-horz-short-holder">
            <iframe
              className="iframe-shorts-video"
              src={media}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <span className="media-caption">{caption}</span>
          </div>
        );
      case "video":
        return (
          <div className="media-video-holder">
            <iframe
              className="iframe-video"
              src={media}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <span className="media-caption">{caption}</span>
          </div>
        );
      case "desmos":
        return (
          <div className="media-image-holder">
            <iframe className="iframe-desmos" src={media}></iframe>
            <span className="media-caption">{caption}</span>
          </div>
        );
      case "stl":
        return (
          <div className="media-image-holder">
            <StlViewer
              className="stl-viewer"
              orbitControls
              shadows
              modelProps={modelProps}
              url={media}
            />
            <span className="media-caption">{caption}</span>
          </div>
        );
      default:
        return <h1>unknown media type</h1>;
    }
  };

  return <div className="media-holder">{renderMedia()}</div>;
}

export default Media;
