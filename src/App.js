import Form from "./Form";
import "./styles.css";
import DogsList from "./DogsList";
import { useEffect, useState } from "react";

export default function App() {
  // Use useEffect to fetch the dogs here

  useEffect(() => {
    fetchDogsImg(3);
  }, []);
  const [dogsImgs, setDogsImgs] = useState([]);

  const fetchDogsImg = async (numImgs) => {
    const res = await fetch(
      `https://dog.ceo/api/breeds/image/random/${numImgs}`
    );
    const data = await res.json();
    setDogsImgs(data.message);
  };

  return (
    <div className="card">
      <Form />
      <DogsList dogsImgs={dogsImgs} />
    </div>
  );
}
