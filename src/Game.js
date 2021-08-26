import React from 'react'
import Timer from "./Timer.js"
import TypeTest from './typeTest';

export default function Game({givenMin, givenSec, setStyles, setFin}) {

	return (
		<div>
			<Timer initMin={givenMin} initSec={givenSec} setFin={setFin} />
			<TypeTest setStlLst={setStyles} />
			<h1> Start Typing... </h1>
		</div>
	)
}
