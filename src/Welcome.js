import React from 'react'
import './welcome.css'
import './button.css'

export default function Welcome(props) {
	return (
		<div className="welcome">
			<h1>Welcome to QuickType</h1>
			<button onClick={()=>props.setStart(true)} class="button-50 join" >Join Game</button>
		</div>
	)
}
