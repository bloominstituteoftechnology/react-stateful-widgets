import React, {useState} from 'react';

export function Items(){

    var [checkboxes] = useState({type: 'checkbox'});
    var [input, setInput] = useState("");
    var [answer, setAnswer] = useState(true);
    
const ChangeInput = event => {
    const{ value } = event.target;
    
    setInput(input = value);
}

const ClickCheckbox = event => {
    setAnswer(event.target ? answer = false : answer = true);
}

const reset = () => {
    /* STEP 5 */
    setInput(input = "");
    setAnswer(answer = true);
  }
  const style = {
    outline: '0',
    border: 'hidden',
    borderBottom: '1px solid #cecece',
    textDecoration: !answer ? 'line-through ': 'none',
   
  };

  
return (            
    <div id="check-box">
        <input 
        type={checkboxes.type} 
        onChange={ClickCheckbox}
        />
        <input
        type="text"
        placeholder="Enter a new task"
        value={input}
        style={style}
        onChange={ChangeInput}
        />
          <button id='resetInput' onClick={reset}>Reset</button>
        </div>
        );
}

 export function Todos() {
    
    return (
        <div className="widget-spinner container">
            <h2>To-Do List</h2>
        <section>
        <div id="to-do">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      
      </div>
        </section>
    </div>
    );
}