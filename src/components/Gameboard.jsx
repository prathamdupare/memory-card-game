import { useState, useEffect } from 'react';
import Card from './Card';

import GameOver from './GameOver';

const valoAPI = 'https://valorant-api.com/v1/agents/?page=1&pageSize=6';

function Gameboard() {
  const [agents, setAgents] = useState([]);

  function Points() {
    return (
      <div>
        <button className="btn">
          <span className="btn__inner">
            <span className="btn__slide"></span>
            <span className="btn__content">Points: {points}</span>
          </span>
        </button>
      </div>
    );
  }
  const [points, setPoints] = useState(0);
  const handleIncrementPoints = () => {
    setPoints(points + 1);
  };

  const [clickedAgents, setClickedAgents] = useState([]);

  const agentNumber = 8;

  const [areAllFlipped, setAreAllFlipped] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  const handleClick = (agent) => {
    if (!clickedAgents.includes(agent)) {
      // Push the clicked card into the clickedCards array
      setClickedAgents([...clickedAgents, agent]);

      setAreAllFlipped(!areAllFlipped);
      console.log('Cards Flipped');

      handleIncrementPoints();

      setTimeout(() => {
        setAreAllFlipped((prevState) => !prevState);
      }, 500);
    } else {
      console.log('Failed');
      setGameOver(true);
    }
    console.log(clickedAgents);
  };

  const shuffledAgents = [...agents]
    .sort(() => Math.random() - 0.5)
    .slice(0, agentNumber);

  useEffect(() => {
    fetch(valoAPI)
      .then((response) => response.json())
      .then((json) => {
        setAgents(json.data);
        console.log(json.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <>
      {gameOver && <GameOver />}

      <div className="points-containers">{<Points points={points} />}</div>
      <div className="gameboard">
        {shuffledAgents.length > 0 ? (
          shuffledAgents.map((agent, index) => (
            <Card
              handleClick={() => handleClick(agent)}
              key={index}
              character={agent.displayName}
              backgroundImage={agent.displayIcon}
              isCardFlipped={areAllFlipped}
            />
          ))
        ) : (
          <>
            <div className="spinner"></div>
            <p className="loading">Loading...</p>
          </>
        )}
      </div>
    </>
  );
}

export default Gameboard;
