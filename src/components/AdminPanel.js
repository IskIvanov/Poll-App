import React  from 'react';
import {useState} from 'react';
import { Input, Button, TextField } from '@material-ui/core';
import PollAnswer from './PollAnswer';
import '../scss/App.scss';

function AdminPanel() {

	const [state, setState] = useState(0);
	const [answer, setAnswer] = useState('none');
	const handleClick = () => setState(state + 1);

	const generateInputs = (answer) => {
		const inputs = [];
		for (let i = 0; i < state; i++) {
			inputs.push( <PollAnswer pollAnswer={answer} />) ;
		}
		return inputs;
	}

	// How does this work
	function handleInputChange(e) {   
		setAnswer('one');
	}

	const handleChange = (event) => {
		this.setState({value: event.target.value})
	}

	const resetInputs = () => {
		setState(0);
	}

  return (
    <div className="App">
		<h1>Sir Vote-a-lot</h1>
		<input className="input-admin"/>
		
		{generateInputs(answer)}
		{/* Save TextInput value to the state and pass it to poll Answer */}
		<input type="text" value={answer} onChange={handleInputChange} />
			<Button onClick={handleClick} variant="outlined"  color="primary" className="button" > Add </Button>

		<p>3/10 possible answers</p>
		<button onClick={resetInputs}>Reset</button>
		
    </div>
  )
}

export default AdminPanel;
