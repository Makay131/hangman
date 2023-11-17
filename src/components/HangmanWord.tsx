type HangmanWordProps = {
  guessedLetters: string[],
  word: string,
  showFinalResult: boolean,
};

export default function HangmanWord({guessedLetters, word, showFinalResult = false}: HangmanWordProps) {
  
  return (
    <div className="word-container">
      {word.split("").map((letter, index) => {
        return (<span key={index} className="letter-span"><span style={{
          visibility: guessedLetters.includes(letter) || showFinalResult ? 'visible' : 'hidden',
          color: !guessedLetters.includes(letter) && showFinalResult ? "red" : "black",
        }}>{letter}</span></span>)
      })}
    </div>
  )
}
