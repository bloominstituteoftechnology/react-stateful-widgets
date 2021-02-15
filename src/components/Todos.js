import React from 'react'

const createNewTodo = text => ({
    id: new Date().toString(),
    text,
    completed: false
})

const removeItem = (items, idx) => {
    return [...items.slice(0, idx), ...items.slice(idx + 1)]
}

const replaceItem = (items, idx, item) => {
    return [...items.slice(0, idx), item, ...items.slice(idx + 1)]
}

export default function Todos() {
    const [inputValue, setInputValue] = React.useState('')
    const [todos, setTodos] = React.useState([{
        id: 'todo1',
        text: 'New Todo',
        completed: false
    }])
    
    const onChange = (evt) => {
        setInputValue(evt.target.value)
    }

    const addTodo = () => {
        if (inputValue === '') return
        const newTodo = createNewTodo(inputValue)
        setTodos([...todos, newTodo])
        setInputValue('')
    }

    const clickTodoButton = (id) => {
        const todoIdx = todos.findIndex(todo => todo.id === id)
        if (todoIdx < 0) return

        const todo = todos[todoIdx]
        if (!todo.completed) {
            return setTodos(replaceItem(todos, todoIdx, { ...todo, completed: true }))
        }
        setTodos(removeItem(todos, todoIdx))
    }

    return (
        <div className="container">
            <div className="todos">
                <h2>Todos</h2>
                <input 
                    value={inputValue}
                    onChange={onChange}
                />
                <button disabled={inputValue === ''} onClick={addTodo}>Add Todo</button>
                {todos.map(todo => {
                    return (
                        <div key={todo.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <p style={{
                                textDecoration: todo.completed ? 'line-through' : ''
                            }}>{todo.text}</p>
                            <button onClick={() => clickTodoButton(todo.id)}>{todo.completed ? 'Delete' : 'Complete'}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}