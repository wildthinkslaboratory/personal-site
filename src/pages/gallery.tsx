import { ART } from "../components/resume-data";
import HomeButton from "../components/HomeButton";

type GaleryImageProps = {
  description: string;
  image: string;
};

function GalleryImage({ description, image }: GaleryImageProps) {
  let popupImage = () => {
    let popup = document.querySelector("#popup-image");
    if (popup) {
      popup?.setAttribute("style", "display:block");
      let popup_image = document.querySelector("#popup-image img");
      if (popup_image) {
        popup_image?.setAttribute("src", image);
      }
    }
  };

  return (
    <div className="image">
      <img src={image} alt={description} onClick={popupImage}></img>
    </div>
  );
}

function Gallery() {
  let closePopup = () => {
    let popup = document.querySelector("#popup-image");
    if (popup) {
      popup?.setAttribute("style", "display:none");
    }
  };

  return (
    <div className="gallery-page">
      <HomeButton />
      <div className="gallery">
        <h1>Gallery</h1>
        <div className="image-container">
          {ART.map((item, index) => (
            <div key={index}>
              <GalleryImage {...item} />
            </div>
          ))}
        </div>
        <div id="popup-image">
          <span onClick={closePopup}>&times;</span>
          <img src=""></img>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
