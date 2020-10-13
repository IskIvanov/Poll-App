import React from "react";
import "../scss/App.scss";

function Option({ todo, index, removeOptions }) {
	return (
	  <div
		className="todo"
		style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
	  >
		{todo.text}
  
		<div>
		  <button onClick={() => removeOptions(index)}>X</button>
		</div>

	  </div>
	);
}

export default Option;