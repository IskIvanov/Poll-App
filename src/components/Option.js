import React from "react";
import "../scss/App.scss";

function Option({ todo, index, removeTodo }) {
	return (
	  <div
		className="todo"
		style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
	  >
		{todo.text}
  
		<div>
		  <button onClick={() => removeTodo(index)}>X</button>
		</div>

	  </div>
	);
}

export default Option;