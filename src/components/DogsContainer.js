import React, { useEffect, useState } from "react";
import axios from "axios";
import BreedList from "./BreedList";
import DogPicture from "./DogPicture";

const DogsContainer = () => {
  const [breedList, setBreedList] = useState(null);
  const [breedPictures, setBreedPictures] = useState(null);
  const [dogBreed, setDogBreed] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all");
      setBreedList(res.data.message);
    };
    fetchData();
    // es-disable-next-line
  }, []);

  useEffect(() => {
    const fetchDogPictures = async () => {
      if (!dogBreed) return;
      const res = await axios.get(
        `https://dog.ceo/api/breed/${dogBreed}/images`
      );
      setBreedPictures(res.data.message);
    };
    fetchDogPictures();
  }, [dogBreed]);

  const onclick = e => {
    e.stopPropagation();
    setDogBreed(e.target.textContent);
  };

  return (
    <div className="dog-container">
      <BreedList data={breedList} onclick={onclick} />
      <DogPicture data={breedPictures} dogBreed={dogBreed} />
    </div>
  );
};

export default DogsContainer;
