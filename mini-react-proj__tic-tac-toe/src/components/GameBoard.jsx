import { useState } from "react"

const initioalBoardGrid = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard() {
  const [boardGrid, setBoardGrid] = useState(initioalBoardGrid)

  function handleCellClick(rowIndex, cellIndex) {
    /** First way to deep array clone **/
    const newBoardGrid = JSON.parse(JSON.stringify(boardGrid))

    /** Second way to deep array clone  **/
    // const newBoardGrid = [...boardGrid.map(innerArray => [...innerArray])] 

    newBoardGrid[rowIndex][cellIndex] = 'X'
    setBoardGrid(newBoardGrid)
  }

  return (
    <ol id="game-board">
      {
        boardGrid.map((row, rowIndex) => {
          return (
            <li className="game-row" key={rowIndex}>
              <ol>
                {
                  row.map((playerSymbol, cellIndex) => {
                    return (
                      <li className="game-cell" key={cellIndex}>
                        <button onClick={() => handleCellClick(rowIndex, cellIndex)}>{playerSymbol}</button>
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