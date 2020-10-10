import React  from 'react';
import {useState} from 'react';
import { TextField } from '@material-ui/core';
import '../scss/App.scss';

function PollAnswer({pollAnswer}) {

  return (
    <div className="poll-answer">
		<p> { pollAnswer } </p>
    </div>
  )
}

export default PollAnswer;
