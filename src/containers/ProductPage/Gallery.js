import React from "react";

class Gallery extends React.PureComponent {
  createImages(images) {
    const { setDisplayImage } = this.props;
    return images.map((image, index) => (
      <img
        src={image}
        alt={image}
        key={image}
        className="gallery-image"
        onClick={() => setDisplayImage(index)}
      />
    ));
  }

  render() {
    const { images } = this.props;
    return <div className="gallery">{this.createImages(images)}</div>;
  }
}

export default Gallery;
