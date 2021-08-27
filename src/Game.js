import React from 'react'
import Timer from "./Timer.js"
import TypeTest from './typeTest';

export default function Game({givenMin, givenSec, setStyles, setFin}) {
	const sampleTest = "The quick brown foxes are big and fat and can't move fast enough to avoid being shot and killed, it really is a shame... Sign :("
	return (
		<div>
			<Timer initMin={givenMin} initSec={givenSec} setFin={setFin} />
			<TypeTest setStlLst={setStyles} word={sampleTest}/>
			<h1> Start Typing... </h1>
		</div>
	)
}
