import '../styling/Log.css'

export default function Log({playerTurns}) {

  return(
    <ol id="log">
      {playerTurns.map(turns => (
        <li key={`${turns.square.row}${turns.square.col}`}>
          {turns.player} selected {turns.square.row},{turns.square.col}
        </li>
      ))}
    </ol>
  )
}