import React, { useState } from "react";

const DogPicture = ({ data, dogBreed }) => {
  const [pictureNum, setPictureNum] = useState(0);
  if (!data) return null;

  const previousPicture = () => {
    if (pictureNum <= 0) return;
    setPictureNum(pictureNum - 1);
  };

  const nextPicture = () => {
    if (pictureNum >= data.length) return;
    setPictureNum(pictureNum + 1);
  };

  return (
    <div className="dog-pics">
      <h1>{dogBreed}</h1>
      <div
        style={{ backgroundImage: `url(${data[pictureNum]})` }}
        className="picture"
      ></div>
      <div>
        <h3>
          {data.length} pictures of {dogBreed}
        </h3>
        <button className="pic-buttons" onClick={previousPicture}>
          Previous
        </button>
        <button className="pic-buttons" onClick={nextPicture}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DogPicture;
