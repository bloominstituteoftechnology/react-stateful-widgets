import React, {useState} from 'react'

const myTodos = [
  {
    todoItem: 'Eat Food',
    completed: false
  },
  {
    todoItem: 'sleep',
    completed: false
  },
  {
    todoItem: 'take a shower',
    completed: true
  }
]

function Todo() {
  // const initialTodoItem = {
  //   todoItem: '',
  //   completed: false
  // }

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        todoItem: inputText,
        completed: false,
        id: Math.random() * 1000
      }
    ])
    setInputText('')
  }

  const onDel = (item) => {
    setTodos(todos.filter(el => el.id !== item.id))
  }
  const onCheck = (todo) => {
    setTodos(todos.map(item => {
      if(item.id === todo.id){
        return{
          ...item,
          completed: !item.completed
        }
      }
      return item
    }))
  }

  const style = (item) =>{
    return {
      fontSize: '1.5em',
      marginBottom: '0.3em',
      color:  item.completed ? 'crimson' : 'royalblue',
      textDecoration: item.completed ? 'line-through' : 'none'
    }
  };

  return (
    <div className="container">
      <h2>My Todos</h2>

      <form>
        <input type="text" placeholder="Enter a todo" onChange={onChange}  value={inputText}/>
        <button onClick={onSubmit}>Submit</button>
      </form>

      <ul>

        {
          todos.map(item => {
            return (
              <li key={item.id} style={style(item)}>
                {item.todoItem}
                <button onClick={(e) => onCheck(item)}>✅</button>
                <button onClick={(e) => onDel(item)}>❌</button>
              </li>
            )
          })
        }

      </ul>
    </div>
  )
}

export default Todo
