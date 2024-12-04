export default function Log({turns}) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li className="highlighted" key={`${turn.squere.row}${turn.squere.cell}`}>
          {turn.player} selected {turn.squere.row}, {turn.squere.cell}
        </li>
      ))}
    </ol>
  )
} 