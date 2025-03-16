export type GaleryImageProps = {
  description: string;
  image: string;
};

export default function GalleryImage({ description, image }: GaleryImageProps) {
  let popupImage = () => {
    let popup = document.querySelector("#popup-image");
    if (popup) {
      popup?.setAttribute("style", "display:block");
      let popup_image = document.querySelector("#popup-image img");
      if (popup_image) {
        popup_image?.setAttribute("src", image);
        console.log(popup);
      }
    }
  };

  return (
    <div className="image">
      <img src={image} alt={description} onClick={popupImage}></img>
    </div>
  );
}
