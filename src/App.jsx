import './App.css';
import Gameboard from './components/Gameboard';

function App() {
  return (
    <>
      <div className="heading-group">
        <div className="img-group">
          <div className="img-border"></div>

          <img src="https://i.imgur.com/j8oaioD.png" alt="img" />
        </div>
        <h1 id="heading">
          Welcome to Valo-Memory
          <h6>Do not Click on the character twice</h6>
        </h1>
      </div>
      <div>
        <div className="gameboard-container">
          <Gameboard />
        </div>
      </div>
    </>
  );
}

export default App;
