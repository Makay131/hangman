
export default function HangmanWord() {
  const word = 'test';
  const guessedLetters = ["e"];
  return (
    <div className="word-container">
      {word.split("").map((letter, index) => {
        return (<span key={index} className="letter-span"><span style={{
          visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden',
        }}>{letter}</span></span>)
      })}
    </div>
  )
}
