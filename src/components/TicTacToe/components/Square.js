import React from 'react'

const Square = ({ square, onClick }) => {
    const handleClick = () => {
        if (square.char !== null) return
        onClick(square.id)
    }
    return (
        <div style={{
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '4rem'
        }} onClick={handleClick}>{square.char}</div>
    )
}

export default Square