import GalleryImage from "../components/GalleryImage";
import { ART } from "../components/resume-data";

function Gallery() {
  let closePopup = () => {
    console.log("close popup");
    let popup = document.querySelector("#popup-image");
    if (popup) {
      popup?.setAttribute("style", "display:none");
    }
  };

  return (
    <div className="gallery-page">
      <div className="container">
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
          <img src={ART[0].image}></img>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
