import React, { useState } from 'react';

export default function Todos(){
    const listItems = [
        {
            id : 1,
            title : 'Take out the trash.',
            compleated : false,
        },
        {
            id : 2,
            title : 'Make dinner.',
            compleated : false,
        },
        {
            id : 3,
            title : 'Pet the Dog.',
            compleated : false,
        },
    ]

    const [todos, setTodos] = useState(listItems)





    return (
        todos.map(todo => 
            <h3>{todo.title}</h3>
        )
    )
}