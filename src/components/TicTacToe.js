import React, { useState } from 'react';

// Use this variable ONLY to initialize a slice of state!
const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD', 'sqE', 'sqF', 'sqG', 'sqH', 'sqI'];

const listOfSquares = [
  {
    id: 0,
    symbol: undefined,
  },
  {
    id: 1,
    symbol: undefined,
  },
  {
    id: 2,
    symbol: undefined,
  },
  {
    id: 3,
    symbol: undefined,
  },
  {
    id: 4,
    symbol: undefined,
  },
  {
    id: 5,
    symbol: undefined,
  },
  {
    id: 6,
    symbol: undefined,
  },
  {
    id: 7,
    symbol: undefined,
  },
  {
    id: 8,
    symbol: undefined,
  },
];

const playerMark = "X";
const computerMark = "O";

export default function TicTacToe() {
  // Use the state hook twice, as we need two slices of state: 'squares' and
  // 'activeSquare'. One holds the _array_ of square ids, and the other keeps track
  // of the currently active square. On page load there's no active square,
  // so the value of 'activeSquare' should be null.
  const [squares, setSquares] = useState(listOfSquares);
  const [activeSquare, setActiveSquare] = useState(null);
  const [isPlayerOnesTurn, setPlayerTurn] = useState(true);

  const getClassName = id => {
    if (isPlayerOnesTurn) {
      return `${id === activeSquare ? "active" : ""}`;
    } else {
      return `${id === activeSquare ? "computerActive" : ""}`;
    }
  }; // sets color of active square

  const nextTurn = (isPlayerTurn) => {
    console.log("nextTurn: ", isPlayerOnesTurn)
    if (isPlayerTurn) {
      setPlayerTurn(false); // broken
            setTimeout(handleComputerTurn, 2000);  // set slight delay   
      return;
    } else {
      setPlayerTurn(true);
    }
  }; // passes players turn, calls computer turn prn, flips state for turn

  const markActive = (id, isPlayerTurn) => {
    console.log("markActive", id)
    const selectedSquare = squares[id];

    if (selectedSquare.symbol !== undefined) {
      alert("Not a valid choice, please pick a different square.");
      return;
    } // tests if square has been chosen
  
    if (isPlayerTurn) { 
      selectedSquare.symbol = playerMark;
    } else {
      selectedSquare.symbol = computerMark;
    }; // tests for turn, adds mark, flips turn state

    setActiveSquare(id); // changes state, affects color, causes rerender
} // marks active

  // player turns: mark active, eval for win/draw
  const handlePlayerOneTurn = (id) => {
    console.log("handlePlayerOneTurn", id)
    markActive(id, true);

    if (evalForWin(squares)) {
      return;
    } else if (evalForDraw(squares)) {
      return;
    } else { nextTurn(true);
    };
    console.log("Turn: ", isPlayerOnesTurn)
  };
  const handleComputerTurn = () => {

    console.log("handleComputerTurn")
    const openSquare = squares.find(square => square.symbol === undefined)
    markActive(openSquare.id, false);

    if (evalForWin(squares)) {
      return;
    } else if (evalForDraw(squares)) {
      return;
    } else {nextTurn(false)
    };

    console.log("After computer turn: ", isPlayerOnesTurn)
  };
  
  // evalute for win conditions, returns true if yes
  const evalForWin = (squares) => {
    const s0 = squares[0].symbol;
    const s1 = squares[1].symbol;
    const s2 = squares[2].symbol;
    const s3 = squares[3].symbol;
    const s4 = squares[4].symbol;
    const s5 = squares[5].symbol;
    const s6 = squares[6].symbol;
    const s7 = squares[7].symbol;
    const s8 = squares[8].symbol;
    
    // player one win conditions
    if (s0 === playerMark && s1 === playerMark && s2 === playerMark)  {
      alert("Player One!!  YOU WIN!!");
    } else if (s3 === playerMark && s4 === playerMark && s5 === playerMark) {
      alert("Player One!!  YOU WIN!!");
      return true;
    } else if (s6 === playerMark && s7 === playerMark && s8 === playerMark) {
      alert("Player One!!  YOU WIN!!");
      return true;
    } else if (s0 === playerMark && s3 === playerMark && s6 === playerMark) {
      alert("Player One!!  YOU WIN!!");
      return true;
    } else if (s1 === playerMark && s4 === playerMark && s7 === playerMark) {
      alert("Player One!!  YOU WIN!!");
      return true;
    } else if (s2 === playerMark && s5 === playerMark && s8 === playerMark) {
      alert("Player One!!  YOU WIN!!");
      return true;
    } else if (s0 === playerMark && s4 === playerMark && s8 === playerMark) {
      alert("Player One!!  YOU WIN!!");
      return true;
    } else if (s2 === playerMark && s4 === playerMark && s6 === playerMark) {
      alert("Player One!!  YOU WIN!!");
      return true;
    }

    // player two win conditions
    if (s0 === computerMark && s1 === computerMark && s2 === computerMark)  {
      alert("Computer Player!!  YOU WIN!!");
      return true;
    } else if (s3 === computerMark && s4 === computerMark && s5 === computerMark) {
      alert("Computer Player!!  YOU WIN!!");
      return true;
    } else if (s6 === computerMark && s7 === computerMark && s8 === computerMark) {
      alert("Computer Player!!  YOU WIN!!");
    } else if (s0 === computerMark && s3 === computerMark && s6 === computerMark) {
      alert("Computer Player!!  YOU WIN!!");
      return true;
    } else if (s1 === computerMark && s4 === computerMark && s7 === computerMark) {
      alert("Computer Player!!  YOU WIN!!");
      return true;
    } else if (s2 === computerMark && s5 === computerMark && s8 === computerMark) {
      alert("Computer Player!!  YOU WIN!!");
      return true;
    } else if (s0 === computerMark && s4 === computerMark && s8 === computerMark) {
      alert("Computer Player!!  YOU WIN!!");
      return true;
    } else if (s2 === computerMark && s4 === computerMark && s6 === computerMark) {
      alert("Computer Player!!  YOU WIN!!");
      return true;
    }

  };
  const evalForDraw = (squares) => {
    const openSquare = squares.find(square => square.symbol === undefined)

    if (openSquare === undefined) {
      alert("Draw");
      return true;
    } // handles undef case
  }

    // useEffect(() => {
    //   console.log("isPlayerOneTurn: ", isPlayerOnesTurn);
    // }, [isPlayerOnesTurn]);

  return (
    <div className='widget-squares container'>
      <h2>TicTacToe</h2>
      <div className='ttt'>
        {
          squares.map(square =>
            <div
              id={square.id}
              key={square.id}
              className={`square ${getClassName(square.id)}`}
              onClick={() => handlePlayerOneTurn(square.id)}
            >{square.symbol}
            </div>
          )
        }
      </div>
    </div>
  );
}
