import React from 'react';
import './index.css';
import EmojiButton from "./EmojiButton";
import Header from "./Header";
import PetCard from "./PetCard";

const pets = [
  {
    id: 1,
    name: "Fezzik",
    image:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/23124207/Old-English-Sheepdog-running-in-the-park.jpg",
    favSnacks: ["Peanut Butter", "Soccer Balls"],
    isAdopted: false
  },
  {
    id: 2,
    name: "Lucy",
    image:
      "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg",
    favSnacks: ["Cake", "Bacon"],
    isAdopted: true
  },
  { id: 3, name: "Blaise", favSnacks: ["Pigeons", "Grass", "Chicken"], isAdopted: true },
];

function App() {
  const petCards = pets.map((petObj) => {
    return (
      <PetCard
        key={petObj.id}
        name={petObj.name}
        image={petObj.image}
        favSnacks={petObj.favSnacks}
        isAdopted={petObj.isAdopted}
      />
    );
  });

  return (
    <div>
      <Header isLoggedIn={false} />
      <main>{petCards}</main>
    </div>
  );
}

export default App;
