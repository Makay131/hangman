import { useState } from "react";
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
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  return (
    <div className="home-container">
      <Header>Lose or Win</Header>
      <HangmanFigure />
      <HangmanWord />
      <div className="keyboard-container">
        <HangmanKeyboard />
      </div>
    </div>
  )
}

export default App
