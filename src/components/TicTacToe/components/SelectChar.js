import React from 'react'

const SelectChar = ({ onSelectChar }) => {
    const selectChar = (evt) => {
        onSelectChar(evt.target.textContent)
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid green',
            alignItems: 'center'
        }}>
            <h3>Select a Character</h3>
            <div>
                <button onClick={selectChar}>X</button> or <button onClick={selectChar}>O</button>
            </div>
        </div>
    
    )
}

export default SelectChar