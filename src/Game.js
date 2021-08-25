import React from 'react'
import Timer from "./Timer.js"

export default function Game({givenMin, givenSec}) {

	return (
		<div>
			<Timer initMin={givenMin} initSec={givenSec} />
			<h1> Start Typing... </h1>
		</div>
	)
}
