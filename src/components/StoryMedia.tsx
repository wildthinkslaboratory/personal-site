import { useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";

type StoryMediaProps = {
  media: string;
  caption: string;
  mediaType: string;
  link: string;
};

type StoryMediaComponentProps = StoryMediaProps & {
  active: boolean;
};

function GLBModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      <primitive object={scene} scale={10} /> {/* adjust scale as needed */}
    </Center>
  );
}

function StoryMedia({
  media,
  caption,
  mediaType,
  link,
  active,
}: StoryMediaComponentProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (active && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [active]);

  const renderMedia = () => {
    switch (mediaType) {
      case "image":
        return (
          <div>
            <img src={media}></img>
            <span className="media-caption">{caption}</span>
          </div>
        );

      case "image link":
        return (
          <div>
            <a href={link}>
              <img src={media}></img>
            </a>
            <span className="media-caption">{caption}</span>
          </div>
        );

      case "video":
        return (
          <div className="iframe-holder">
            <iframe
              className="iframe-video"
              src={media}
              title={caption}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <span className="media-caption">{caption}</span>
          </div>
        );

      case "desmos":
        return (
          <div className="iframe-holder">
            <iframe className="story-desmos" src={media}></iframe>
            <span className="media-caption">{caption}</span>
          </div>
        );
      case "glb":
        return (
          <div className="glb-holder">
            <Canvas
              style={{ width: "100%", height: "600px" }}
              camera={{ position: [0, -5, 0] }}
            >
              <ambientLight intensity={1} />
              <directionalLight position={[5, 5, 5]} />

              <Suspense fallback={null}>
                <GLBModel url={media} />
              </Suspense>

              <OrbitControls />
            </Canvas>

            <span className="media-caption">{caption}</span>
          </div>
        );
      default:
        return <h1>unknown media type</h1>;
    }
  };

  return (
    <figure className={`story-media-holder ${active ? "active" : ""}`}>
      {renderMedia()}
    </figure>
  );
}

export default StoryMedia;
