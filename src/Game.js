import React from 'react'
import Timer from "./Timer.js"
import TypeTest from './typeTest';
import 'random-words'; 

export default function Game({givenMin, givenSec, setStyles, setFin}) {
	var randomWords = require('random-words');
	const sampleTest = randomWords({exactly : 300, join:' '})
	return (
		<div>
			<Timer initMin={givenMin} initSec={givenSec} setFin={setFin} />
			<TypeTest setStlLst={setStyles} word={sampleTest}/>
		</div>
	);
}
