export default function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner ? <p>{winner} won!</p> : <p>Its a draw</p>}
      <p>
        <button onClick={onRematch}>Rematch</button>
      </p>
    </div>
  );
}
