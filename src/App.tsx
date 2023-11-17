import { useCallback, useEffect, useState } from "react";
import words from "./lib/wordsList.json";
import Header from "./components/Header";
import HangmanFigure from "./components/HangmanFigure";
import HangmanWord from "./components/HangmanWord";
import HangmanKeyboard from "./components/HangmanKeyboard";

const giveWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [word, setWord] = useState(giveWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !word.includes(letter));
  const correctLetters = guessedLetters.filter(letter => word.includes(letter));

  const isGameLost = incorrectLetters.length >= 6; //length of body parts
  const isGameWon = word.split("").every(letter => guessedLetters.includes(letter));


  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isGameWon || isGameLost) return;

    setGuessedLetters(prevGuessed => [...prevGuessed, letter]);
  }, [guessedLetters, isGameWon, isGameLost])

  useEffect(function() {
    const eventHandler = (e: KeyboardEvent) => {
      const key = e.key;

      if(!key.match(/^[a-z]$/)) return; // if the any key other than a to z is pressed then ---> IGNORE

      addGuessedLetter(key);
    };

    document.addEventListener("keypress", eventHandler)

    return () => document.removeEventListener("keypress", eventHandler)
  }, [addGuessedLetter]);

  const handleResetGame = () => {
    setGuessedLetters([]);
    setWord(giveWord());
  }

 
  return (
    <div className="home-container">
      <Header>
        {isGameWon && "You have won! Want to try again?!"}
        {isGameLost && "You have lost! Try again! :("}
      </Header>
      {(isGameLost || isGameWon) && <button className="reset-btn" onClick={handleResetGame}>Play again</button>}
      <HangmanFigure wrongAnswerIndex={incorrectLetters.length}  />
      <HangmanWord guessedLetters={guessedLetters} word={word} showFinalResult={isGameLost} />
      <div className="keyboard-container">
        <HangmanKeyboard activeLetters={correctLetters} inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} isGameOver={isGameWon || isGameLost} />
      </div>
    </div>
  )
}

export default App
