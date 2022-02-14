import React, {useState} from 'react';

export default function Todo(){
    let [todoList, setTodoList] = useState([{title:'first todo',content:'this is the first todo',state:true,id:0}]); 
    let [createTodo,setCreateTodo] = useState(false);
    let [currentTodoTitle, setCurrentTodoTitle] = useState(''); 
    let [currentTodoContent,setCurrentTodoContent] = useState(''); 

    const changeInput = (evt,callback) => {
        let {value} = evt.target
        callback(value); 
      };
    
    const toggleTodoById = (id) =>{
        setTodoList(todoList.map(val=>{val.id == id ? val.state = !val.state : val; return val}))
    }
    const addTodoToList = ()=>{ // add the todo, set title content and
        let todoToObject = {title:currentTodoTitle , content:currentTodoContent,state:true,id:new Date()}
        setTodoList(todoList.concat([todoToObject])); 
        setCreateTodo(false); 
        setCurrentTodoContent(''); 
        setCurrentTodoTitle(''); 
    }

    const removeTodoFromList = (id) =>{
        
        setTodoList(todoList.reduce((acc,item)=>{
            if(item.title != id) acc.push(item);
            return acc 
        },[])); 
    }

    return(
        <div className='widget-input container'>
            <h2>Todo List</h2>
            {
                todoList.map(todo=>
                    <div className='todo' key={todo.title}>
                        <h3 className={todo.state ? 'active' : 'inactive'} onClick={()=>toggleTodoById(todo.id)}>{todo.title}</h3>
                        <h4>{todo.content}</h4>
                        <button onClick={()=>removeTodoFromList(todo.title)}>remove</button>
                    </div>
                )
            }
            {createTodo && <input placeholder='Todo Title' value={currentTodoTitle} onChange={(event)=>changeInput(event,setCurrentTodoTitle)} />}
            {createTodo && <textarea value={currentTodoContent} onChange={(event)=>changeInput(event,setCurrentTodoContent)}/>}
            {!createTodo ? <button onClick={()=>setCreateTodo(!createTodo)}>Create New Todo</button> : <button onClick={addTodoToList}>Add Todo</button>}
        </div>
    )
}