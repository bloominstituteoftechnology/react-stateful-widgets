import React from 'react'

// Components
import Square from './Square'

// utils
import { replaceItem } from '../../../utils'

const INITIAL_SQUARES = [
    null, null, null,
    null, null, null,
    null, null, null
]

const WINNING_IDS = [
    // ROWS
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // COLUMNS
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // CROSSES
    [0, 4, 8],
    [2, 4, 6]
]

const getSquareChars = (board, ids) => {
    return ids.map(id => board[id])
}

const areWinningSquares = (board, char, ids) => {
    const squares = getSquareChars(board, ids)
    return squares.every(square => square === char)
}

const isWin = (board, char) => {
    for (const winningIdSet of WINNING_IDS) {
        if (areWinningSquares(board, char, winningIdSet)) {
            return true
        }
    }
    return false
}

const getEmptySquares = (board) => {
    const emptySquares = []

    board.forEach((square, id) => {
        if (square === null) emptySquares.push(id)
    });

    return emptySquares 
}

const randomChoice = array => {
    const randomIdx = Math.floor(Math.random() * array.length)
    return array[randomIdx]
}

const getComputerMove = (board, human, computer) => {
    const emptySquares = getEmptySquares(board)
    // try to win
    for (const emptySquare of emptySquares) {
        // win
        if (isWin(replaceItem(board, emptySquare, computer))) {
            return emptySquare
        } else if (isWin(board, emptySquare, human)) {
            // block
            return emptySquare
        }
        // console.log({ winAttempt })
    }
    return randomChoice(emptySquares)
    // try to block
    // random move
}

const Gameboard = ({ human }) => {
    const [squares, setSquares] = React.useState(INITIAL_SQUARES)
    const computer = human === 'X' ? 'O' : 'X'

    const onClickSquare = (squareId) => {
        const newSquares = replaceItem(squares, squareId, human)
        if (isWin(newSquares, human)) {
            console.log('human wins')
        } else {
            const computerMove = getComputerMove(newSquares, human, computer)
            console.log({ computerMove })
        }
        setSquares(newSquares)
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(3, 1fr)`,
            gridTemplateRows: `repeat(3, 1fr)`,
            width: '300px', height: '300px',
            gap: '10px',
            margin: '20px 0',
            background: 'black'
        }}>
            {squares.map((square, squareId) => {
                return (
                    <Square square={{
                        char: square,
                        id: squareId
                    }} 
                    onClick={onClickSquare}
                    key={squareId} />
                )
            })}
        </div>
    )
}

export default Gameboard