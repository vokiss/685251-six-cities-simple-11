type PropertyPhotoProps = {
  image: string;
}

function PropertyPhoto ({image}: PropertyPhotoProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="studio" />
    </div>
  );
}

export default PropertyPhoto;
