import englishKeys from "../lib/englishKeys.json";

export default function HangmanKeyboard() {
  return (
    <div className="keyboard-grid">
      {englishKeys.map(key => <button className={`keyboard-btn`} key={key}>{key}</button>)}
    </div>
  )
}
