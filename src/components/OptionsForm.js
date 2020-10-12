import React, { useState } from "react";
import "../scss/App.scss";

function OptionsForm({ addOptions }) {
	const [value, setValue] = useState("");
  
	const handleSubmit = e => {
	  e.preventDefault();
	  if (!value) return;
	  addOptions(value);
	  setValue("");
	};
  
	return (
	  <form onSubmit={handleSubmit}>
		<input
		  type="text"
		  className="input"
		  value={value}
		  onChange={e => setValue(e.target.value)}
		/>
		<button className="button">Add</button>
	  </form>
	);
  }

  export default OptionsForm;