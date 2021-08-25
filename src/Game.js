import React from 'react'
import Timer from "./Timer.js"

export default function Game() {

	return (
		<div>
			<Timer  initMin={0} initSec={10} />
			<h1> Start Typing... </h1>
		</div>
	)
}
