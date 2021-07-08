import React from 'react'

import SelectChar from './components/SelectChar'
import Gameboard from './components/Gameboard'

// Scene names
const SELECT_CHAR_SCENE = 'select-char'
const GAMEBOARD_SCENE = 'gameboard'
const WINNER_SCENE = 'winner'

export default function TicTacToe() {
    const [currentScene, setCurrentScene] = React.useState(GAMEBOARD_SCENE)
    const [humanChar, setHumanChar] = React.useState("X")

    const onSelectChar = (char) => {
        setHumanChar(char)
        setCurrentScene(GAMEBOARD_SCENE)
    }

    return (
        <div className="container">
            <h2>TicTacToe</h2>
            {currentScene === SELECT_CHAR_SCENE && (
                <SelectChar onSelectChar={onSelectChar} />
            )}
            {currentScene === GAMEBOARD_SCENE && (
                <Gameboard human={humanChar} />
            )}
            {currentScene === WINNER_SCENE && (
                <>Show winner</>
            )}
        </div>
    )
}