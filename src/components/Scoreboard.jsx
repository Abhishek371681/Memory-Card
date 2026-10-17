import './Scoreboard.css' 

function Scoreboard({ score, bestScore }) {
  return (
    <>
    <h1 className="scoreboard-title">P o k e G u e s s r</h1>
    <div className="scoreboard">
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
    </>
  );
}

export default Scoreboard;
