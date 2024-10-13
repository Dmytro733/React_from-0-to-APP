import Player from "./components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialMame="Dima" symbol="X" />
          <Player initialMame="Zhanna" symbol="O" />
        </ol>
        Game board
      </div>
    </main>
  )
}

export default App
