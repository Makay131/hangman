import englishKeys from "../lib/englishKeys.json";

type HangmanKeyboardProps = {
  activeLetters: string[],
  inactiveLetters: string[],
  isGameOver: boolean,
  addGuessedLetter: (letter: string) => void
}
export default function HangmanKeyboard({activeLetters, inactiveLetters, addGuessedLetter, isGameOver}: HangmanKeyboardProps) {
  return (
    <div className="keyboard-grid">
      {englishKeys.map(key => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button className={`keyboard-btn ${isActive ? 'active' : ""} ${isInactive ? "inactive" : ""}`} key={key} onClick={() => addGuessedLetter(key)} disabled={isActive || isInactive || isGameOver}>
              {key}
            </button>
          )
        })}
    </div>
  )
}
