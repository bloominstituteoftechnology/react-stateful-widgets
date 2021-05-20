import React, { useState } from 'react'


export default function TicTacToe(){
    
    const Positions = {
        1: "",
        2: "", 
        3: "", 
        4: "", 
        5: "", 
        6: "", 
        7: "", 
        8: "", 
        9: ""}

    const [squaresPosition, setSquaresPosition] = useState(Positions)


    const style1 = {
        width: '180px',
        height: '180px',
        display: 'flex',
        flexFlow: 'row wrap'
      };
    const style2 = {
        boxSizing: 'border-box',
        border: '2px solid black',
        width: '60px',
        height: '60px',
        fontSize: '40px',
        color: 'green',
        textAlign: "center"
      };


    const markActive = (key) => {
        if(squaresPosition[key] !== "O"){
            // input the user selection
            squaresPosition[key] = "X";
            const newobj = {...squaresPosition}
            setSquaresPosition(newobj);
            //check if there is a winner
            if (win("O")){
                return 
            } 
            if (win("X")){
                return 
            }            
            // check if computer can win 
            if(possibleWin("O", "X")){
                squaresPosition[possibleWin("O", "X")] = "O"
                const newobj2 = {...squaresPosition}
                setSquaresPosition(newobj2);
            }
            // check if user can win
            else if (possibleWin("X", "O")){
                squaresPosition[possibleWin("X", "O")] = "O"
                const newobj2 = {...squaresPosition}
                setSquaresPosition(newobj2);
            }
            // make random move
            else{
                const possibilities = Object.keys(squaresPosition).filter(item => squaresPosition[item] !== "X" && squaresPosition[item] !== "O");
                let randomSelect = possibilities[Math.floor(Math.random() * (possibilities.length - 1))];
                squaresPosition[randomSelect] = "O";
                const newobj2 = {...squaresPosition}
                setSquaresPosition(newobj2);
            }
        }
    }
    //check if val can win next move
    const possibleWin = (val, val1) => {
        const move = [];
        for(let key in squaresPosition){
            if(squaresPosition[key] === val)
            {
                move.push(parseInt(key))
            }
        }
        if(move.includes(1)){
            if(move.includes(2) && squaresPosition[3] !== val1 ){
                return(3)
            }
            else if (move.includes(3) && squaresPosition[2] !== val1 ){
                return(2)
            }
            else if (move.includes(4) && squaresPosition[7] !== val1 ){
                return(7)
            }
            else if (move.includes(7) && squaresPosition[4] !== val1 ){
                return(4)
            }
            else if (move.includes(9) && squaresPosition[5] !== val1 ){
                return(5)
            }
            else if (move.includes(5) && squaresPosition[9] !== val1 ){
                return(9)
            }
        }
        else if(move.includes(2)){
            if(move.includes(3) && squaresPosition[1] !== val1 ){
                return(1)
            }
            else if(move.includes(8) && squaresPosition[5] !== val1 ){
                return(5)
            }
            else if(move.includes(5) && squaresPosition[8] !== val1 ){
                return(8)
            }
        }
        else if(move.includes(3)){
            if(move.includes(6) && squaresPosition[9] !== val1 ){
                return(9)
            }
            else if(move.includes(9) && squaresPosition[6] !== val1 ){
                return(9)
            }
            else if(move.includes(5) && squaresPosition[7] !== val1 ){
                return(7)
            }
        }
        else if(move.includes(4)){
            if(move.includes(5) && squaresPosition[6] !== val1 ){
                return(6)
            }
            else if (move.includes(6) && squaresPosition[5] !== val1 ){
                return(5)
            }
            else if (move.includes(7) && squaresPosition[1] !== val1 ){
                return(1)
            }
        }
        else if(move.includes(5)){
            if(move.includes(6) && squaresPosition[4] !== val1 ){
                return(4)
            }
            else if (move.includes(8) && squaresPosition[2] !== val1 ){
                return(2)
            }
            else if (move.includes(1) && squaresPosition[9] !== val1 ){
                return(9)
            }
            else if (move.includes(3) && squaresPosition[7] !== val1 ){
                return(7)
            }
            else if (move.includes(7) && squaresPosition[3] !== val1 ){
                return(3)
            }
            else if (move.includes(9) && squaresPosition[1] !== val1 ){
                return(1)
            }
        }
        else if(move.includes(6)){
            if(move.includes(9) && squaresPosition[3] !== val1 ){
                return(3)
            }
        }
        else if(move.includes(7)){
            if(move.includes(8) && squaresPosition[9] !== val1 ){
                return(9)
            }
            else if(move.includes(9) && squaresPosition[8] !== val1 ){
                return(8)
            }
        }
        else if(move.includes(8)){
            if(move.includes(9) && squaresPosition[7] !== val1 ){
                return(7)
                }
        }
        else if(move.includes(9)){
            if(move.includes(6) && squaresPosition[3] !== val1 ){
                return(3)
            }
        }
        return(false)
    }
    //check if there's a winner
    const win = (val) => {
        // to replace with .filter()
        const move = [];
        for(let key in squaresPosition){
            if(squaresPosition[key] === val)
            {
                move.push(parseInt(key))
            }
        }
        if(move.includes(1)){
            if(move.includes(2) && move.includes(3)){
                return(true)
            }
            else if(move.includes(4) && move.includes(7)){
                return(true)
            }
            else if(move.includes(5) && move.includes(9)){
                return(true)
            }
        }
        else if(move.includes(2)){
            if(move.includes(5) && move.includes(8)){
                return(true)
            }
        }
        else if(move.includes(3)){
            if(move.includes(6) && move.includes(9)){
                return(true)
            }
            else if(move.includes(5) && move.includes(7)){
                console.log("whyyyyyyy?")
                return(true)
            }
        }
        else if(move.includes(4)){
            if(move.includes(5) && move.includes(6)){
                return(true)
            }
        }
        else if(move.includes(7)){
            if(move.includes(8) && move.includes(9)){
                return(true)
            }
        }
        else { 
            return(false)
        }
            
    }

return(
        <div className='container'>
        <h2>Tic Tac Toe</h2>
        <div style={style1}>
            {
            Object.keys(squaresPosition).map( item =>
                <div
                id={item}
                key={item}
                style={style2}
                onClick={() => markActive(item)}
                >{squaresPosition[item]}
                </div>
            )
            }
        </div>
        <p>{win('X')? "You win!":''}</p>
        <p>{win('O')? "You loose!":''}</p>
        </div>
        )
}