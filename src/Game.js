import React from 'react'
import Timer from "./Timer.js"
import TypeTest from './typeTest';

export default function Game( props ) {
	return (
		<div>
			<Timer initMin={props.givenMin} initSec={props.givenSec} />
			<TypeTest />
			<h1> Start Typing... </h1>
		</div>
	)
}
