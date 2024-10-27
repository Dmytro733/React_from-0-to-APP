import { useState } from 'react'
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquere(rowIndexm, cellIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if(gameTurns.length > 0 && prevTurns[0].player == 'X'){
        currentPlayer = 'O';
      }

      const updatedTurns = [
        {squere: {row: rowIndexm, cell: cellIndex}, player: currentPlayer}, 
        ...prevTurns
      ];
      
      return updatedTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialMame="Dima" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialMame="Zhanna" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquere={handleSelectSquere} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
