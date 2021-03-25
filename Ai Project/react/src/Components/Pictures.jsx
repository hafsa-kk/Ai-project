import React, { useState } from "react";

function Pictures() {
  const [image, setImage] = useState(0);

  function nextImage() {
    if (image === 6) {
      setImage(0);
    } else {
      setImage(image + 1);
    }
  }
  function prevImage() {
    if (image === 0) {
      setImage(0);
    } else {
      setImage(image - 1);
    }
  }

  return (
    <div className="pic-term">
      <img
        className="pic-img"
        src={image + ".jpg"}
        alt="Friends Season Shots"
      />
      <button onClick={nextImage} className="pic-button">
        Next
      </button>
      <button onClick={prevImage} className="pic-button">
        Previous
      </button>
    </div>
  );
}

export default Pictures;
