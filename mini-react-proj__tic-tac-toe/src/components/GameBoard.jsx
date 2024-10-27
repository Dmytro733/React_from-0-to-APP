// import { useState } from "react"

const initioalBoardGrid = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard({onSelectSquere, turns}) {
  let boardGrid = initioalBoardGrid;

  for (const turn of turns) {
    const {squere, player} = turn;
    const {row, cell} = squere;

    boardGrid[row][cell] = player;
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
                        <button onClick={() => onSelectSquere(rowIndex, cellIndex)}>{playerSymbol}</button>
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