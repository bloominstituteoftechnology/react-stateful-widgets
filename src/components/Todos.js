import React, { useState, useEffect } from 'react'; 

export default function Todo() {
  // the HOOKS ------------------------------------------------------------------------------------
  const [inputValue, setInputValue] = useState("");  // the input string in the input field
  const [todoListCompleted, setTodoListCompleted] = useState([]); 
  const [todoList, setTodoList] = useState([]);

  // const example = useState("hello");
  // console.log(example);

  // the HELPER FUNCTIONS -------------------------------------------------------------------------
  const changeInput = evt => {

      // This helper func gets called with input of a string in the input element.  
      // It changes the inputValue state to the "todo" item entered.
      const { value } = evt.target; // assign typed input to variable value

      setInputValue(value); // set inputValue to value

      console.log("inputValue from changeInput: ", inputValue);

  }; // assigns typed todo to the inputValue

  const addTodoList = () => {

      // setTodoList(todoList.push(inputValue));  CANNOT MUTATE THE VARIABLE DIRECTLY
      
      //  QUESTION:  You always want to use the set so that the DOM hook knows that a change has been made?  

      setTodoList([...todoList, inputValue]);

  }; // adds the todo to the todoList

  const addToComplete = (todo) => {
    // This helper function gets called when the button "Complete" is clicked.
    // It will add the element to the todoListCompleted array & delete it from the todoList array.
  
    setTodoListCompleted([...todoListCompleted, todo]); // adds the todo to the todoListCompleted array

    // console.log("todoListCompleted updated from addToComplete: ", todoListCompleted);

    // This section removes the todo from the todoList

      var filteredArray = todoList.filter(function(task){
            return task !== todo;
      });

      setTodoList(filteredArray);
      // console.log("todoList updated from addToComplete: ", todoList)
   
    console.log("todoList from addToComplete: ", todoList);

}; // adds the todo to todoListCompleted, deletes the todo from todoList


    // the STYLES  -------------------------------------------------------------------------
  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color:'royalblue' /*  todoComplete ? 'royalblue' : 'grey',  ---> NEED TO HOOK UP A CONDITIONAL */
  };

  // // useEffect(() => {
  // //   console.log("do this if the todoList changes", todoList); 

  //   // I want to add an invocation for a reset function for the placeholder here
  // }, [todoList]);

  return (
    <div className='widget-todo container'>
      <h2>To Do List</h2>
      <div id='output' style={style} >{inputValue}</div>
      <div>
            <input id='todo' type='text' placeholder=" enter to do here" value={inputValue} onChange={changeInput} /> 
            {/* QUESTION:  I want this placeholder to reset back to baseline after the 
            click.  */}
                <button id='addTodo' onClick={addTodoList}>Add</button> 

            {todoList.map((todo, index) => 
              <div className='todo' 
              key={todo + index}>
                {`${todo}  `} 
                <button id='addToDoComplete' onClick={() => {addToComplete(todo)}}>Complete</button>
              </div>
              )
              
            }
      </div>
    </div>
  );
}

// {friend.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)} SAMPLE .map code 