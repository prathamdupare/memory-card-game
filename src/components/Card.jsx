import { useEffect } from "react";
import ReactCardFlip from "react-card-flip";

function Card({ character, isCardFlipped, handleClick, backgroundImage }) {
  useEffect(() => {});

  return (
    <ReactCardFlip isFlipped={isCardFlipped} flipDirection="horizontal">
      <div className="character-card" onClick={handleClick}>
        <img src={backgroundImage}></img>
        <p>{character}</p>
      </div>

      <div className="character-card">This is back</div>
    </ReactCardFlip>
  );
}

export default Card;
