const Head = (
  <div className="man-head"></div>
);
const Body = (
  <div className="man-body"></div>
)
const RightArm = (
  <div className="man-right-arm"></div>
)
const LeftArm = (
  <div className="man-left-arm"></div>
)
const RightLeg = (
  <div className="man-right-leg"></div>
)
const LeftLeg = (
  <div className="man-left-leg"></div>
)

const hangman = [Head, Body, RightArm, LeftArm, RightLeg ,LeftLeg]

type HangmanFigureProps = {
  wrongAnswerIndex: number,
}

export default function HangmanFigure({wrongAnswerIndex}: HangmanFigureProps) {
  return (
    <div className="hangman-figure">
      {hangman.slice(0, wrongAnswerIndex)}
      <div className="hangman-hang"></div>
      <div className="hangman-top"></div>
      <div className="hangman-stick"></div>
      <div className="hangman-foundation"></div>
    </div>
  )
}
