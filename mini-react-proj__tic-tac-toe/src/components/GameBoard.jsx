export default function GameBoard({onSelectSquere, turns, board}) {
  return (
    <ol id="game-board">
      {
        board.map((row, rowIndex) => {
          return (
            <li className="game-row" key={rowIndex}>
              <ol>
                {
                  row.map((playerSymbol, cellIndex) => {
                    return (
                      <li className="game-cell" key={cellIndex}>
                        <button 
                          onClick={() => onSelectSquere(rowIndex, cellIndex)}
                          disabled={!!playerSymbol}
                        >{playerSymbol}</button>
                      </li>
                    )
                  })
                }
              </ol>
            </li>
          )
        })
      }
    </ol>
  )
}