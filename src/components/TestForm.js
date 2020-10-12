import React, { useState } from "react";
import OptionsForm from './OptionsForm';
import Option from './Option';
import "../scss/App.scss";

function App() {
  const [options, setOptions] = useState([
   
  ]);

  const handleReset = () => {
	setOptions([]);
  }

  const addOption = text => {
    const newTodos = [...options, { text }];
    setOptions(newTodos);
  };


  const removeTodo = index => {
    const newTodos = [...options];
    newTodos.splice(index, 1);
    setOptions(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        
		{options.map((todo, index) => (
          <Option
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}
		
        <OptionsForm addOptions={addOption} />
		
		<button onClick={handleReset}>Reset</button>

      </div>
    </div>
  );
}

export default App;
