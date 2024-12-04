export default function GameOver({winner, onRestart}) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {!winner && <p>It's a draw!</p>}
      {winner && <p>{winner} wins!</p>}
      <button onClick={onRestart}>Play Again</button>
    </div>
  )
}