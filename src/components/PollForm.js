import React, { useState } from "react";
import OptionsForm from './OptionsForm';
import { useDispatch } from 'react-redux';
import Option from './Option';
import { addTodo } from '../state/actionCreators';
import "../scss/App.scss";

function PollForm() {
  const [options, setOptions] = useState([
  ]);

  const [question, setQuestion] = useState('My Question')

  const dispatch = useDispatch()

  const resetOptions = () => {
	setOptions([]);
  }

//   const addOption = text => {
// 	const newTodos = [...options, { text }];
// 	console.log(newTodos.length);
// 	if( newTodos.length < 10) {
// 		setOptions(newTodos);
// 	}
//   };


  const removeOptions = index => {
    const newTodos = [...options];
    newTodos.splice(index, 1);
    setOptions(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        
		<input value={question}  className="input" onChange={(e) => setQuestion(e.target.value)} ></input>

		{options.map((todo, index) => (
          <Option
            key={index}
            index={index}
            todo={todo}
            removeOptions={removeOptions}
          />
        ))}
		
        {/* <OptionsForm addOptions={addOption} /> */}
		
		
		<span> {options.length}/10 possible answers	</span>
		<button onClick={dispatch(addTodo('add'))}>Reset</button>

      </div>
    </div>
  );
}

export default PollForm;
