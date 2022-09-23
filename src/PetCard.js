import React from 'react'
import EmojiButton from './EmojiButton'

/* 
Using the isAdopted prop, conditionally render the EmojiButton
- if the pet is not adopted, show the EmojiButton
- if the pet is already adopted, don't show the EmojiButton
- Hints here: https://reactjs.org/docs/conditional-rendering.html
*/

function PetCard({ 
  name, 
  image = "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg", 
  favSnacks,
  isAdopted 
}) {
  
  const snackLis = favSnacks.map(snack => <li key={snack}>{snack}</li>)
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      {/* <EmojiButton label="Adopt" /> */}
      {isAdopted ? null : <EmojiButton label="Adopt" />}
      <h3>Favorite Snacks</h3>
      <ul>
        {snackLis}
      </ul>
    </div>
  )
}

export default PetCard