import React,{ useState } from 'react';
import PollForm from './components/PollForm';
import Vote from './components/Vote'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/App.scss';

function App() {
	const [options, setOptions] = useState([
	]);

	const [question, setQuestion] = useState('My Question')

  return (
    <div className="App">
		<PollForm options />
		<Vote />
    </div>
  );
}

export default App;
