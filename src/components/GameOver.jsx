function GameOver(onClick) {
  return (
    <>
      <div className="overlay" id="gameOverOverlay">
        <div className="dialog-box">
          <h1>Game Over</h1>
          <p>You Failed!</p>
          <button className="btn" onClick={onClick}>
            <span className="btn__inner">
              <span className="btn__slide"></span>
              <span className="btn__content">Retry?</span>
            </span>
          </button>{' '}
        </div>
      </div>
    </>
  );
}

export default GameOver;
