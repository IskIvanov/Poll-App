import React  from 'react';
import {useState} from 'react';
// import Poll from './components/Poll.js';
import { Input, Button, TextField } from '@material-ui/core';
import '../scss/App.scss';

function AdminPanel() {

	const [state, setState] = useState(0);
	const handleClick = () => setState(state + 1);

	const generateInputs = () => {
		const inputs = [];
		for (let i = 0; i < state; i++) {
			inputs.push( <TextField id="outlined-basic" variant="outlined" margin="dense" />) ;
		}
		return inputs;
	}

	const resetInputs = () => {
		setState(0);
	}

  return (
    <div className="App">
		<h1>Sir Vote-a-lot</h1>
		<input className="input-admin"/>
		
		<TextField id="outlined-basic" variant="outlined" margin="dense" />
			<Button onClick={handleClick} variant="outlined"  color="primary" className="button" > Add </Button>
				{generateInputs()}

		<p>3/10 possible answers</p>
		<button onClick={resetInputs}>Reset</button>
		
    </div>
  )
}

export default AdminPanel;
