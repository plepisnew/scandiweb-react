import React from "react";

class Gallery extends React.Component {
  createImages(images) {
    return images.map((image, index) => (
      <img
        src={image}
        alt={image}
        key={image}
        className="gallery-image"
        onClick={() => this.props.setDisplayImage(index)}
      />
    ));
  }

  render() {
    return (
      <div className="gallery">{this.createImages(this.props.images)}</div>
    );
  }
}

export default Gallery;
