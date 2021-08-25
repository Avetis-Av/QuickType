import React from 'react'
import './welcome.css'

export default function Welcome(props) {
	return (
		<div className="welcome">
			<h1>Welcome to QuickType</h1>
			<button onClick={()=>props.setStart(true)}>Join Game</button>
		</div>
	)
}
