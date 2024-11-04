import { useState } from 'react'
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import GameOver from './components/GameOver'
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from './winning_combinations'

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(turns) {
  let currentPlayer = 'X';

  if(turns.length > 0 && turns[0].player == 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function deriveGameBoard(gameTurns){
  let boardGrid = JSON.parse(JSON.stringify(INITIAL_GAME_BOARD));

  for (const turn of gameTurns) {
    const {squere, player} = turn;
    const {row, cell} = squere;

    boardGrid[row][cell] = player;
  }

  return boardGrid;
}

function deriveWinner(boardGrid, players){
  let winner = null;
  
  for(const combination of WINNING_COMBINATIONS){
    const firstSquereSymbol = boardGrid[combination[0].row][combination[0].column];
    const secondSquereSymbol = boardGrid[combination[1].row][combination[1].column];
    const thirdSquereSymbol = boardGrid[combination[2].row][combination[2].column];

    if(firstSquereSymbol && firstSquereSymbol === secondSquereSymbol && firstSquereSymbol === thirdSquereSymbol){
      winner = players[firstSquereSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquere(rowIndexm, cellIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {squere: {row: rowIndexm, cell: cellIndex}, player: currentPlayer}, 
        ...prevTurns
      ];
      
      return updatedTurns
    })
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return{
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
            initialMame={PLAYERS.X} 
            symbol="X" 
            isActive={activePlayer === 'X'} 
            onChangeName={handlePlayerNameChange}
          />
          <Player 
            initialMame={PLAYERS.O} 
            symbol="O" 
            isActive={activePlayer === 'O'} 
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver onRestart={handleRestart} winner={winner}/>}
        <GameBoard onSelectSquere={handleSelectSquere} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
