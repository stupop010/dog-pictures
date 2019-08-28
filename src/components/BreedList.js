import React from "react";

const BreedList = ({ data, onclick }) => {
  if (!data) return null;
  const keys = Object.keys(data);
  return (
    <div className="breedList">
      <h1>Breed list</h1>
      <div className="breed">
        <ul>
          {keys.map((item, i) => (
            <li key={i} onClick={onclick}>
              <button className="breedButton">{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BreedList;
