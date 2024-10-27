import { useState } from 'react'

export default function Player({initialMame, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(initialMame);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing)
  }

  function handleChenge(event) {
    setPlayerName(event.target.value)
  }

  const playerNameMurkup = (
    isEditing
    ? <input type='text' placeholder="Name" value={playerName} onChange={handleChenge}/>
    : <span className="player-name">{playerName}</span>
  )

  return(
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerNameMurkup}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  )
}