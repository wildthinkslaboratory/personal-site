import { Scrollama, Step } from "react-scrollama";
import { useEffect, useState } from "react";
import StoryMedia from "./StoryMedia";
import PubsAndAccessories from "./PubsAccessories";
import HomeButton from "./HomeButton";

export type StoryContentProps = {
  title: string;
  content: [number, JSX.Element][];
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

export default function StoryPage({
  title,
  content,
  media,
  code,
  link,
  pubs,
}: StoryContentProps) {
  const [activeMedia, setActiveMedia] = useState(0);
  const [offset, setOffset] = useState(0.5);

  const onStepEnter = ({ data }: any) => {
    // Only change media when a step provides a media index
    if (data.media !== undefined) {
      setActiveMedia(data.media);
    }
  };

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth <= 1130) {
        setOffset(0.9); // mobile
      } else {
        setOffset(0.6); // desktop
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <div className="story-wrapper">
      <HomeButton />
      <div className="story-title-div">
        <div>
          {/* <HomeButton /> */}
          <h3>{title}</h3>
        </div>
      </div>
      <div className="story">
        <div className="media-column">
          {media.map((item, index) => (
            <StoryMedia
              key={index}
              media={item.mediaContent}
              caption={item.caption}
              mediaType={item.mediaType}
              link={item.link}
              active={index === activeMedia}
            />
          ))}
        </div>
        <div className="text-column">
          <Scrollama offset={offset} onStepEnter={onStepEnter}>
            {content.map((item, index) => (
              <Step data={{ media: item[0] }} key={index}>
                <div className="story-p-holder"> {item[1]}</div>
              </Step>
            ))}
          </Scrollama>
        </div>
      </div>
      <div className="story-footer">
        <h3>Code and Publicatons:</h3>
        <PubsAndAccessories
          code={code}
          link={link}
          pubs={pubs}
        ></PubsAndAccessories>
      </div>
    </div>
  );
}
